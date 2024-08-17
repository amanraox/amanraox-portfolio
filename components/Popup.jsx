import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-[#121217] p-6 rounded-lg shadow-2xl w-96 relative border-2 border-[#00e187] text-[#00ff99]"
        style={{ transition: "transform 0.3s ease", transform: "scale(1)" }}
      >
        <button
          className="absolute top-2 right-2 text-[#00ff99] text-xl font-bold hover:text-[#00ff99] focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{message.title}</h2>
        <p>{message.body}</p>
        <button
          className="mt-6 w-full bg-[#00e187] hover:bg-[#00ff99] text-[#121217] py-2 px-4 rounded focus:outline-none transition-colors duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
