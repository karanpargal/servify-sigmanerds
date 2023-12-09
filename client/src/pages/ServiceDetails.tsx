import { HeroSolidIcons } from '@/components/shared/HeroIcons';
import Loader from '@/components/shared/Loader';
import DatePicker from '@/components/ui/DatePicker';
import Button from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import useGetService from '@/hooks/useGetService';
import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';
import { axiosClient } from '@/utils/apiClients';
import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';
import { Label } from '@radix-ui/react-label';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContractWrite } from 'wagmi';
import * as Yup from 'yup';
import { escrowContractABI } from '../../../server/consts/escrow';
import { OrderClientType } from '../../../server/orders/orders.schema';
import { ServiceClientType } from '../../../server/services/services.schema';

const ServiceDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();

  const service = useGetService({ id: id! });
  const navigate = useNavigate();
  return (
    <main className="mx-auto max-w-2xl">
      {service.data ? (
        <>
          <section className="m-6 my-12 rounded-xl border-2 border-stone-200 bg-background-secondary p-6 py-10">
            <h1 className="mb-4 text-2xl font-semibold">{service.data.name}</h1>
            <div className="mb-6 flex items-center justify-between">
              <article className="flex items-center gap-x-2 rounded-md  border-2 border-accent-primary/80 bg-accent-primary/10 px-3 py-1 text-sm">
                <HeroSolidIcons.UserCircleIcon className="h-auto w-6" />{' '}
                {service.data.seller.name}
              </article>
              <div className="flex flex-col items-end gap-x-1">
                <article className="text-lg font-semibold">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(service.data.price)}
                </article>
                <span className="rounded-md border-2 border-accent-secondary bg-accent-secondary/10 px-3 text-sm font-medium text-text-secondary">
                  {service.data.category}
                </span>
              </div>
            </div>
            <p className="mb-6">{service.data.description}</p>

            <section className="border-t-2 border-dashed border-stone-300 pt-4">
              <h2 className="mb-4 text-lg font-semibold">
                Reviews and Ratings
              </h2>
              {service.data.reviews.map((review) => (
                // @ts-expect-error bad types
                <article key={review._id}>
                  <h3 className="flex items-center gap-x-2">
                    {/* @ts-expect-error bad types*/}
                    {review.user.name} <span>{}</span>
                  </h3>
                </article>
              ))}
            </section>

            {/* Book service flow */}
            <footer className="flex justify-center">
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <Dialog.Trigger asChild>
                  <Button>Book now</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                  <Dialog.Header className="mb-3">
                    <Dialog.Title>Create service listing</Dialog.Title>
                  </Dialog.Header>
                  <BookServiceForm
                    onSuccess={() => navigate('/orders')}
                    service={service.data}
                  />
                </Dialog.Content>
              </Dialog>
            </footer>
          </section>
        </>
      ) : (
        <Loader className="min-h-[90vh]" />
      )}
    </main>
  );
};

export default ServiceDetails;

function BookServiceForm({
  service,
  onSuccess,
}: {
  service: ServiceClientType;
  onSuccess?: () => void;
}) {
  const { data: userData } = useUserData();

  const { toast } = useToast();
  const tomorrow = dayjs().add(1, 'day').startOf('day').toDate();

  const { walletClient: signer } = useWallet();

  const { write } = useContractWrite({
    address: '0xC434c7be548A31fb8dA76f0CC3Cf25e51166B039',
    abi: escrowContractABI,
    functionName: 'depositFunds',
  });

  const BookServiceSchema = useMemo(
    () =>
      Yup.object().shape({
        address: Yup.string().trim().required('Address is required!'),
        date: Yup.date()
          .required('Empty booking date!')
          .min(tomorrow, "Booking can't be created in the past!"),
      }),
    [tomorrow],
  );

  const formik = useFormik({
    initialValues: {
      address: '',
      date: tomorrow,
    },
    validationSchema: BookServiceSchema,
    onSubmit: async (values) => {
      console.log(service);
      try {
        const response = await axiosClient.post<OrderClientType>(`/orders`, {
          consumer: userData?._id,
          service: service._id,
          seller: service.seller._id,
          address: values.address,
          amount: service.price,
          serviceDate: values.date,
        });

        const pushUser = PushAPI.initialize(signer, {
          env: CONSTANTS.ENV.STAGING,
        });

        const userChatBegin = (await pushUser).chat.send(
          service.seller.walletAddress,
          {
            type: 'Text',
            content: 'Hey, I have booked your service.',
          },
        );

        console.log(userChatBegin);

        const weiValue = 0.0000051 * service.price * 1000000000000000000;

        write({
          args: [response.data._id],
          value: BigInt(parseInt(weiValue.toFixed(0))),
        });
        toast({ title: 'Booking created!' });
        onSuccess?.();
      } catch (error) {
        console.log(error);
        toast({ title: 'Error while submitting', variant: 'destructive' });
      }
    },
  });

  return (
    <form className="space-y-6">
      <div className="space-y-1">
        <Label htmlFor="address">Address</Label>
        <Textarea
          name="address"
          id="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.errors.address && formik.touched.address && (
          <div className="text-xs text-red-500">{formik.errors.address}</div>
        )}
      </div>
      <div className="space-y-1">
        <Label>Choose service date</Label>
        <DatePicker
          value={formik.values.date}
          onChange={(date) => formik.setFieldValue('date', date)}
          disabled={{ before: tomorrow }}
        />
        {formik.errors.date && formik.touched.date && (
          <div className="text-xs text-red-500">
            {formik.errors.date as string}
          </div>
        )}
      </div>

      <Button
        disabled={formik.isSubmitting}
        type="button"
        className="w-full rounded-md"
        onClick={() => formik.handleSubmit()}
      >
        Pay to book
      </Button>
    </form>
  );
}
