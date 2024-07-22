import { TiTick } from "react-icons/ti";

const WebHostingPlan = () => {
  const plans = [
    { id: 1, title: "Basic", price: "$4.99/mo", discount: "10% OFF" },
    { id: 2, title: "Premium", price: "$6.99/mo", discount: "5% OFF" },
    { id: 3, title: "Gold", price: "$9.99/mo", discount: "15% OFF" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="flex flex-col items-center justify-center w-full sm:w-3/4 md:w-2/4 lg:w-1/4 rounded p-4 bg-gray-50 mb-7"
        >
          <h3 className="text-3xl font-bold text-purple-900">{plan.title}</h3>
          <strong className="text-3xl font-bold text-gray-900 my-5">
            {plan.price}
          </strong>
          <span className="bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold">
            {plan.discount}
          </span>
          <div className="mt-6">
            <h5 className="text-2xl mb-1 font-semibold text-purple-700">
              Top Features
            </h5>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> 100 Websites
            </div>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> 100 GB SSD Storage
            </div>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> Weekly Backups
            </div>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> Unlimited Bandwidth
            </div>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> Free SSL
            </div>
            <div className="flex items-center text-green-700 mb-1 ps-3">
              <TiTick /> Free Email
            </div>
          </div>
          <button className="mt-4 border-2 border-gray-900 text-gray-900 text-2xl font-bold p-2 rounded-full hover:text-white hover:bg-gray-900 transition w-full">
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default WebHostingPlan;
