const FrequentOrdersCard = () => {
  return (
    <div>
      <div className="relative mt-8 flex flex-col">
        <div className="h-20 border">img</div>
        <div className=" flex flex-row justify-between">
          <div className="flex flex-col">
            <h1>Order name</h1>
            <p>Description</p>
          </div>

          <div className="flex flex-col">
            <p>price</p>
            <p>rating</p>
            <p>Duration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentOrdersCard;
