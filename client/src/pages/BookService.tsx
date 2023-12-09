import Button from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookService = () => {
  const navigate = useNavigate();
  const [serviceDate, setServiceDate] = useState('');
  const [address, setAddress] = useState('');

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleBooking = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/orders`,
      {
        consumer: 'abc',
        service: 'abc',
        seller: 'abc',
        address: address,
        amount: 'number',
        serviceDate: serviceDate,
      },
    );
    console.log(response.data);
  };

  return (
    <main className="font-inter min-h-screen bg-gray-100 p-8">
      <div className="mb-8 text-center">
        <p className="text-4xl font-bold">Book a Service</p>
      </div>
      <div className="mx-auto w-[50%] rounded-md bg-white p-6 shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <ServiceDetail label="Service Name" value="ABCD" />
          <ServiceDetail label="Service Provider" value="Seller Name" />
          <ServiceDetail label="Service Description" value="Description" />
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
          <ServiceDetail label="Amount" value="$100" />
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
  value: string;
}

interface ServiceInputProps {
  label: string;
  type: string;
  setFunction: (val: string) => void;
}

export default BookService;
