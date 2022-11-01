import { useState } from "react";
import HiringPartner from "./HiringPartner";
import hiringNetworkData from "./../data/hiring-network.json";

export default function HiringNetwork(props) {
  const [showLess, setShowLess] = useState(false);
  const hiringNetwork = showLess
    ? hiringNetworkData
    : hiringNetworkData.slice(0, 10);

  return (
    <div>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto bg-white p-6 rounded-lg">
        <div className="mt-2 lg:mt-4 grid sm:grid-cols-2 gap-1 md:grid-cols-5 ">
          {hiringNetwork.map((partner, index) => (
            <HiringPartner key={index} {...partner} />
          ))}
        </div>
        <button
          className="block mx-auto my-4 text-sm font-semibold text-secondary-600 px-3 py-2 bg-secondary-50 rounded-md"
          onClick={() => setShowLess((prev) => !prev)}
        >
          {showLess ? "Show Less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
