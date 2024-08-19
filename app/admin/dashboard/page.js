import PurchaseSaleSection from "@/components/Dashboard/PurchaseSaleSection";
import TopSection from "@/components/Dashboard/TopSection";

const Dashboard = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <TopSection />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* purchase and sales */}
        <div className="col-span-1 rounded bg-white p-4 shadow-sm shadow-green-400 lg:col-span-2">
          <PurchaseSaleSection />
        </div>

        <div className="col-span-1 rounded bg-white p-4 shadow-sm shadow-green-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
          magni alias ullam. Itaque quisquam facilis, aut laudantium ullam
          blanditiis quasi sunt animi porro aperiam nam, quas provident saepe
          dolore!
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
