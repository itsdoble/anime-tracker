import React from "react";

const NoData = () => {
  return (
    <div className="w-[95%] h-32 p-2 bg-pink-200 text-red-900 font-semibold rounded-lg mt-4 text-left flex justify-center items-center col-span-2 text-lg outline outline-1">
      <p>
        (<span className="line-through">No Data</span>){"  "}No Data Yet
      </p>
    </div>
  );
};

export default NoData;
