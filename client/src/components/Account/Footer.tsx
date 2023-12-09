import useWallet from '@/hooks/useWallet';
import HeroIcons from '../shared/HeroIcons';
import Button from '../ui/button';

const Footer = () => {
  const { disconnect } = useWallet();
  return (
    <div>
      <div className="mt-10 flex justify-center ">
        <div className="flex w-[600px] flex-row justify-between gap-x-10 p-10 ">
          <div className="flex flex-row gap-2">
            <div className="flex  ">
              <HeroIcons.QuestionMarkCircleIcon className="h-auto w-8" />
            </div>
            <div className="flex">
              <h1 className="text-xl">FAQs</h1>
            </div>
          </div>

          <Button
            onClick={() => {
              disconnect();
            }}
          >
            <span>Log Out</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
