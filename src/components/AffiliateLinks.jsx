import React, { useState } from "react";
import { FaShareAlt, FaCopy } from "react-icons/fa"; // Using Font Awesome icons

const AffiliateLinks = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://www.figma.com/file/NfVy..."; // Link for affiliates

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">Links for Affiliates</h2>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 px-4 py-2 text-gray-800 bg-white rounded-l-lg focus:outline-none"
          value={link}
          readOnly
        />
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center rounded-none"
        >
          <FaCopy className="mr-2" />
          {copied ? "Copied!" : "Copy"}
        </button>
        <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold flex items-center rounded-r-lg">
          <FaShareAlt className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default AffiliateLinks;
