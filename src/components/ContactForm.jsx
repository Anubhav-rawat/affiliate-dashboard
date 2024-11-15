// src/components/ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold">Get In Touch</h2>
      <p className="text-gray-400 mb-6">Say something to start a live chat!</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800"
        />
        <input
          type="text"
          placeholder="Contact No"
          className="w-full px-4 py-2 rounded-lg bg-gray-800"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800"
        />
        <input
          type="text"
          placeholder="Business Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800"
        />
        <input
          type="text"
          placeholder="Business Type"
          className="w-full px-4 py-2 rounded-lg bg-gray-800"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 h-20"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-black rounded-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
