import HeroIcons from '../shared/HeroIcons';

const HelpAndSupport = () => {
  return (
    <div>
      <div className="flex flex-row items-start gap-2">
        <div className="flex  ">
          <HeroIcons.ChatBubbleLeftRightIcon className="h-8 w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl">Help And Support</h1>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
