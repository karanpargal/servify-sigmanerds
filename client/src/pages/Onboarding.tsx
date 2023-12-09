import Button from '@/components/ui/button';
import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';
import { Navigate } from 'react-router-dom';

// addresses: string[]; accept first address
import UserDetailsForm from '@/components/Forms/UserDetailsForm';

export default function Onboarding() {
  const { disconnect } = useWallet();

  const user = useUserData();

  if (user.data) return <Navigate to="/dashboard" />;

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
