import Footer from '@/components/Account/Footer';
import HelpAndSupport from '@/components/Account/HelpAndSupport';
import ManageAccounts from '@/components/Account/ManageAccounts';
import PastOrdersCard from '@/components/Account/PastOrdersCard';
import ProfileCard from '@/components/Account/ProfileCard';
import Settings from '@/components/Account/Settings';

const Accounts = () => {
  return (
    <div className="container border">
      <div className="flex justify-center ">
        <div className="flex-row">
          <div>
            <ProfileCard />
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
        </div>
      </div>
    </div>
  );
};

export default Accounts;
