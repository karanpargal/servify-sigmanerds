import Footer from '@/components/Account/Footer';
import HelpAndSupport from '@/components/Account/HelpAndSupport';
import ManageAccounts from '@/components/Account/ManageAccounts';
import PastOrdersCard from '@/components/Account/PastOrdersCard';
import ProfileCard from '@/components/Account/ProfileCard';
import Settings from '@/components/Account/Settings';
import useWallet from '@/hooks/useWallet';
import axios from 'axios';

const Accounts = () => {
  const { address, balance } = useWallet();

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
      <div className="flex justify-center ">
        <div className="flex-row">
          <div>
            <ProfileCard
              address={address?.toString() || ''}
              balance={
                balance === undefined
                  ? ''
                  : balance.formatted.slice(0, 5) + ' ' + balance.symbol
              }
            />
          </div>

          <div className="m-4 mt-10 flex justify-between ">
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
            <button className="rounded-lg border p-4 px-8 text-2xl">
              Switch to Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
