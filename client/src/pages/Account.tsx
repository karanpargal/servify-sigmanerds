import Footer from '@/components/Account/Footer';
import HelpAndSupport from '@/components/Account/HelpAndSupport';
import ManageAccounts from '@/components/Account/ManageAccounts';
import PastOrdersCard from '@/components/Account/PastOrdersCard';
import ProfileCard from '@/components/Account/ProfileCard';
import Settings from '@/components/Account/Settings';
import useUserData from '@/hooks/useUserData';
import axios from 'axios';
import useWallet from '../hooks/useWallet';

const Accounts = () => {
  const { address } = useWallet();
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
    <div className="container ">
      <div className="mt-8 flex justify-center">
        <div className=" flex-row rounded-xl border  bg-background-secondary p-4 pb-8">
          <div>
            <ProfileCard />
          </div>

          <div className="item-start m-4 flex justify-between ">
            <div>
              <PastOrdersCard />
            </div>
            <div>
              <HelpAndSupport />
            </div>
          </div>

          <div className="m-4 mt-10 flex justify-between ">
            <div>
              <ManageAccounts />
            </div>
            <div>
              <Settings />
            </div>
          </div>

          <div>
            <Footer />
          </div>

          <div className="mr-10 mt-10 flex flex-row justify-center gap-4">
            <button
              className="rounded-lg border p-4 px-8 text-2xl"
              onClick={() => {
                handleChangePref();
              }}
            >
              {userData?.preference === 'provider'
                ? 'Consumer only dashboard'
                : 'Become a provider'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
