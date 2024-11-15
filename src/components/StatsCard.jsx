import React from "react";

const StatsCard = ({ title, count, percentage, icon, trend }) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm w-1/3 p-3">
      <div className="absolute top-4 left-4 bg-clip-border rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 h-12 w-12 flex items-center justify-center">
        {/* Icon */}
        <span className="w-6 h-6 text-white">{icon}</span>
      </div>
      <div className="text-right mt-4">
        <p className="block text-sm font-normal text-blue-gray-600">{title}</p>
        <h4 className="text-2xl font-semibold leading-snug text-blue-gray-900">
          {count}
        </h4>
      </div>
      <div className="border-t border-blue-gray-50 mt-4 pt-4">
        <p
          className={`text-base leading-relaxed ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          <strong>{percentage}</strong> than last{" "}
          {title === "Sales" ? "day" : "week"}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
