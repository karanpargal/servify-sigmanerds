import HeroIcons from '../shared/HeroIcons';

const Footer = () => {
  return (
    <div>
      <div className="mt-10 flex justify-center border">
        <div className="flex w-[600px] flex-row justify-between gap-x-10 p-10 ">
          <div className="flex flex-row gap-2">
            <div className="flex  ">
              <HeroIcons.QuestionMarkCircleIcon className="h-auto w-8" />
            </div>
            <div className="flex">
              <h1 className="text-2xl">FAQs</h1>
            </div>
          </div>
          <div className="mr-20 flex flex-col gap-5 ">
            <h1 className="text-2xl">About us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
