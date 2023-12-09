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

// addresses: string[]; accept first address
import { useState } from 'react';

export default function Onboarding() {
  const [step, setstep] = useState<0 | 1>(0);
  const { disconnect } = useWallet();

  const userData = useUserData();

  if (userData) return <Navigate to="/dashboard" />;
  return (
    <main>
      {/* <UserDetailsForm /> */}

      <footer>
        <Button onClick={() => disconnect()}>Log out</Button>
      </footer>
    </main>
  );
}
