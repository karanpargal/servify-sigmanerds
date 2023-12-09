import Footer from '@/components/Account/Footer';
import HelpAndSupport from '@/components/Account/HelpAndSupport';
import ManageAccounts from '@/components/Account/ManageAccounts';
import PastOrdersCard from '@/components/Account/PastOrdersCard';
import ProfileCard from '@/components/Account/ProfileCard';
import Settings from '@/components/Account/Settings';
import useWallet from '@/hooks/useWallet';

const Accounts = () => {
  const { address, balance } = useWallet();

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
            <div>
              <button className="rounded-lg border p-4 px-8 text-2xl">
                Switch to Provider
              </button>
            </div>
            <button className="rounded-lg border p-4 px-8 text-2xl">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
