import Footer from '@/components/Account/Footer';
import HelpAndSupport from '@/components/Account/HelpAndSupport';
import ManageAccounts from '@/components/Account/ManageAccounts';
import PastOrdersCard from '@/components/Account/PastOrdersCard';
import ProfileCard from '@/components/Account/ProfileCard';
import Settings from '@/components/Account/Settings';
import Button from '@/components/ui/button';
import useUserData from '@/hooks/useUserData';
import axios from 'axios';
import useWallet from '../hooks/useWallet';

const Accounts = () => {
  const { address, disconnect } = useWallet();

  const { data: userData } = useUserData();

  const handleChangePref = async () => {
    const response = await axios.put(
      `http://localhost:8080/api/v1/users/${address}`,
      {
        preference:
          userData?.preference === 'provider' ? 'consumer' : 'provider',
      },
    );
    console.log(response.data);
    window.location.reload();
  };

  const balanceInINR = async () => {
    const tokenInINR = await axios.post(
      'https://api.1inch.dev/price/v1.1/',
      {
        tokens: ['0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'],
        currency: 'USD',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_1INCH_API_KEY}}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          Accept: 'application/json',
        },
      },
    );
    console.log(tokenInINR);
  };

  balanceInINR();

  return (
    <div className="container w-1/2">
      <div className="mt-8 flex justify-center">
        <div className=" flex-row rounded-xl border  bg-background-secondary p-4 pb-8">
          <div>
            <ProfileCard />
          </div>

          <div className="grid grid-rows-3">
            <div className=" m-4 grid grid-cols-2 justify-between ">
              <div>
                <PastOrdersCard />
              </div>
              <div>
                <HelpAndSupport />
              </div>
            </div>
            <div className="m-4 mt-6 grid grid-cols-2 justify-between ">
              <div>
                <ManageAccounts />
              </div>
              <div>
                <Settings />
              </div>
            </div>

            <div className="m-4 mt-10 grid grid-cols-2 justify-between ">
              <Footer />
              <Button
                className="w-1/2 bg-red-600 hover:bg-red-400"
                onClick={() => {
                  disconnect();
                }}
              >
                <span>Log Out</span>
              </Button>
            </div>
          </div>

          <div className="mr-10 mt-10 flex flex-row justify-center gap-4">
            <Button
              className="rounded-lg p-4 px-8 py-6 text-xl"
              onClick={() => {
                handleChangePref();
              }}
            >
              {userData?.preference === 'provider'
                ? 'Only consume services'
                : 'Provide services'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
