// TODO: Add onboarding form with formik
// name: string; text field
// email: string; text field type="email"
// age: number; text field type="number"
// sex: string; drop down 🤦🏽‍♂️
// bio: string; textarea
// preference: "provider" | "consumer"; radio group

import Button from '@/components/ui/button';
import useWallet from '@/hooks/useWallet';

// addresses: string[]; accept first address
export default function Onboarding() {
  const { disconnect } = useWallet();
  return (
    <main>
      Onboarding
      {/* TODO: add logout page here as well */}
      <footer>
        <Button onClick={() => disconnect()}>Log out</Button>
      </footer>
    </main>
  );
}
