import DailyBuySaleChart from "./DailyBuySaleChart";

const DailyBuySaleSection = ({ buySales }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div>
          <h3 className="text-lg font-semibold capitalize leading-5">
            last year buy & sales
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="inline-block h-3 w-3 rounded-full bg-primary capitalize"></span>
            Sales
          </p>
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="inline-block h-3 w-3 rounded-full bg-red-400 capitalize"></span>
            Buy
          </p>
        </div>
      </div>

      {/* Purchase and Sales Chart */}
      <div className="h-full max-h-[300px] w-full">
        <DailyBuySaleChart buySales={buySales} />
      </div>
    </>
  );
};

export default DailyBuySaleSection;
