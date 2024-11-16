# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
// "use client";

// import React from "react";
// import { FiEye } from "react-icons/fi";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   Legend,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// // Radar chart data
// const data = [
//   {
//     feature: "Tracking",
//     mobile: 15,
//     desktop: 110,
//     max: 150,
//   },
//   {
//     feature: "Builder",
//     mobile: 130,
//     desktop: 90,
//     max: 150,
//   },
//   {
//     feature: "Schedule",
//     mobile: 86,
//     desktop: 130,
//     max: 150,
//   },
//   {
//     feature: "AI Train",
//     mobile: 125,
//     desktop: 40,
//     max: 150,
//   },
//   {
//     feature: "Interval",
//     mobile: 148,
//     desktop: 90,
//     max: 150,
//   },
// ];

// // UsageRadar component
// export const UsageRadar = () => {
//   return (
//     <div className="col-span-4 overflow-hidden rounded border border-stone-300">
//       <div className="p-4">
//         <h3 className="flex items-center gap-1.5 font-medium">
//           <FiEye /> Usage
//         </h3>
//       </div>

//       <div className="h-64 px-4">
//         <ResponsiveContainer width="100%" height="100%">
//           <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//             <PolarGrid />
//             <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
//             <PolarRadiusAxis angle={30} domain={[0, 150]} />
//             <Radar
//               name="Mobile"
//               dataKey="mobile"
//               stroke="#18181b"
//               fill="#18181b"
//               fillOpacity={0.2}
//             />
//             <Radar
//               name="Desktop"
//               dataKey="desktop"
//               stroke="#5b21b6"
//               fill="#5b21b6"
//               fillOpacity={0.2}
//             />
//             <Tooltip
//               wrapperClassName="text-sm rounded"
//               labelClassName="text-xs text-stone-500"
//             />
//             <Legend />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

export const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300 ">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">Contact Form</h3>
      </div>

      <div className="p-4">
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


activity graph <div className="col-span-8  overflow-hidden rounded border border-stone-300 h-60">
listing <div className="col-span-8 p-4 -mt-80 rounded border border-stone-300">



