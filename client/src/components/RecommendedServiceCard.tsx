const RecommendedServiceCard = () => {
  return (
    <div className="relative mt-8 flex flex-1 flex-col">
      <div className="h-36 w-40 border">img</div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-col">
          <h1>Order name</h1>
        </div>

        <div className="flex flex-col">
          <p>price</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedServiceCard;
