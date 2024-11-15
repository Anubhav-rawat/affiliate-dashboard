
import React from "react";

const ListingsTable = () => {
  const listings = [
    {
      id: 1,
      name: "Mathilda Bell",
      leads: 187,
      deals: 154,
      tasks: "28 Tasks Done",
    },
    {
      id: 2,
      name: "Marion Figueroa",
      leads: 235,
      deals: 148,
      tasks: "21 Tasks Done",
    },
    {
      id: 3,
      name: "Lee Barrett",
      leads: 420,
      deals: 356,
      tasks: "15 Tasks Done",
    },
    {
      id: 4,
      name: "Joseph Brooks",
      leads: 180,
      deals: 95,
      tasks: "9 Tasks Done",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold">Listings</h2>
      <p className="text-gray-600">Last 2 Weeks</p>
      <table className="w-full mt-4 text-left">
        <thead>
          <tr>
            <th className="py-2">No.</th>
            <th className="py-2">Name</th>
            <th className="py-2">Leads</th>
            <th className="py-2">Deals</th>
            <th className="py-2">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td>{listing.id}</td>
              <td>{listing.name}</td>
              <td>{listing.leads}</td>
              <td>{listing.deals}</td>
              <td>{listing.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
