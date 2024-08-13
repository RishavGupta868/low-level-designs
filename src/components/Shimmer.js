import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-row flex-wrap">
      {Array(20)
        .fill(0)
        .map((e, index) => {
          return (
            <div
              key={index}
              className="w-72 h-72 border border-gray-100 m-2 p-4 bg-slate-100 rounded-lg  "
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
