import Button from '@/components/ui/button';
import useUserData from '@/hooks/useUserData';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContractWrite } from 'wagmi';
import { escrowContractABI } from '../../../server/consts/escrow';

type Service = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  provider: {
    _id: string;
    name: string;
  };
};

const BookService = () => {
  const { data: userData } = useUserData();
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state as { service: Service };
  const [serviceDate, setServiceDate] = useState('');
  const [address, setAddress] = useState('');
  const { data: contractData, write } = useContractWrite({
    address: '0xC434c7be548A31fb8dA76f0CC3Cf25e51166B039',
    abi: escrowContractABI,
    functionName: 'depositFunds',
  });

  console.log(service);
  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleBooking = async () => {
    const response = await axios.post(`http://localhost:8080/api/v1/orders`, {
      consumer: userData?._id,
      service: service._id,
      seller: service.provider._id,
      address: address,
      amount: service.price,
      serviceDate: serviceDate,
    });

    const weiValue = 0.0000051 * service.price * 1000000000000000000;

    const tx = write({
      args: [response.data._id],
      value: BigInt(weiValue),
    });

    console.log(response.data, contractData, tx);
  };

  return (
    <main className="font-inter min-h-screen bg-gray-100 p-8">
      <div className="mb-8 text-center">
        <p className="text-4xl font-bold">Book a Service</p>
      </div>
      <div className="mx-auto w-[50%] rounded-md bg-white p-6 shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <ServiceDetail label="Service Name" value={service.title} />
          <ServiceDetail
            label="Service Provider"
            value={service.provider.name}
          />
          <ServiceDetail
            label="Service Description"
            value={service.description}
          />
          <ServiceInput
            label="Date of Service"
            type="date"
            setFunction={(val) => {
              setServiceDate(val);
            }}
          />
          <ServiceInput
            label="Address"
            type="text"
            setFunction={(val) => {
              setAddress(val);
            }}
          />
          <ServiceDetail label="Amount in Rs." value={service.price} />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-x-20">
        <Button className="bg-red-600 hover:bg-red-400" onClick={handleBack}>
          Cancel
        </Button>

        <Button onClick={handleBooking}>Book</Button>
      </div>
    </main>
  );
};

const ServiceDetail = ({ label, value }: ServiceDetailProps) => (
  <div className="flex items-center justify-between border-b py-2">
    <p className="font-semibold text-gray-600">{label}</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

const ServiceInput = ({ label, type, setFunction }: ServiceInputProps) => (
  <div className="flex items-center justify-between border-b py-2">
    <p className="font-semibold text-gray-600">{label}</p>
    <input
      type={type}
      onChange={(e) => {
        setFunction(e.currentTarget.value);
      }}
      className="rounded-lg border-2 px-2 py-0.5 text-gray-800"
    />
  </div>
);

interface ServiceDetailProps {
  label: string;
  value: string | number;
}

interface ServiceInputProps {
  label: string;
  type: string;
  setFunction: (val: string) => void;
}

export default BookService;
