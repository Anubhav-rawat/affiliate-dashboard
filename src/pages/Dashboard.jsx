import React from "react";

import Sidebar from "../components/Sidebar";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import AffiliateLinks from "../components/AffiliateLinks";
import ListingsTable from "../components/ListingsTable";
import ContactForm from "../components/ContactForm";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="w-4/5 p-8 space-y-8">
        <Header />

        <div className="flex space-x-6">
          <StatsCard title="Total Views" count="75" />
          <StatsCard title="Tasks Done" count="75" />
          <StatsCard title="Tasks Pending" count="75" />
        </div>

        <AffiliateLinks />
        <ListingsTable />
      </div>

      <div className="w-1/4 ml-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Dashboard;
