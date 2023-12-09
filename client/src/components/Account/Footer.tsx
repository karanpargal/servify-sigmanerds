import HeroIcons from '../shared/HeroIcons';

const Footer = () => {
  return (
    <div>
      <div className="flex  ">
        <div className="flex w-[600px] flex-row justify-between gap-x-10  ">
          <div className="flex flex-row gap-2">
            <div className="flex  ">
              <HeroIcons.QuestionMarkCircleIcon className="h-auto w-8" />
            </div>
            <div className="flex ">
              <h1 className="text-xl">FAQs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
