import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("messenger"));
  const itsme = message?.senderId === authUser?.user?._id;

  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-500" : "";

  // Ensure `createdAt` exists before formatting
  const formattedTime = message?.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="p-4">
      {message?.message && ( // Only render if `message.message` exists
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      )}
    </div>
  );
}

export default Message;
