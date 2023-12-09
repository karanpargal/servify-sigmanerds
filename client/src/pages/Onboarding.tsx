// TODO: Add onboarding form with formik
// name: string; text field
// email: string; text field type="email"
// age: number; text field type="number"
// sex: string; drop down 🤦🏽‍♂️
// bio: string; textarea
// preference: "provider" | "consumer"; radio group

import Button from '@/components/ui/button';
import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';

// addresses: string[]; accept first address
import UserDetailsForm from '@/components/Forms/UserDetailsForm';

export default function Onboarding() {
  const { disconnect } = useWallet();

  const userData = useUserData();
  const ListingSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Title is required'),

    thumbhnail: Yup.string().required('Thumbnail is Required'),

    duration: Yup.number().required('Task Duration is required '),

    pricing: Yup.number()
    .required('pricing is required'),
  });

  if (userData) return <Navigate to="/dashboard" />;

  return (
    <main className="mx-auto max-w-2xl">
      <section className="m-6 my-12 rounded-xl border-2 border-stone-200 bg-background-secondary p-6 py-10">
        <UserDetailsForm />
        <Button
          className="mt-4 block w-full flex-1"
          onClick={() => disconnect()}
          variant="outline"
        >
          Log out
        </Button>
      </section>
    </main>
  );
}
