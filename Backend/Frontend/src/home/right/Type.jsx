import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import useSendMessage from "../../Context/useSendMessage.js";

function Type() {
  const { loading, sendMessages } = useSendMessage();

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    // if (message.trim() === "") return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Type here"
            className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
          />
        </div>
        <button className=" text-3xl">
          <GrSend  />
        </button>
      </div>
    </form>
  );
}

export default Type;
