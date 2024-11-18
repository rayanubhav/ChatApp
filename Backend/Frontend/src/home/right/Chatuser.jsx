import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../Context/SocketContext.jsx";


function Chatuser() {
  const {selectedConversation}=useConversation();
  console.log(selectedConversation);

  const { onlineUsers}=useSocketContext();
  const getOnlineUserStatus=(userId)=>{
    return onlineUsers.includes(userId)? "online":"offline"
  }


  //to get random profile picture
  const profileImages = [
    "https://th.bing.com/th/id/OIP.bWO_kFRnKlulSILdWapqwAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP._uf7BrKIl4b8U81yspBesQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.7baOqfXGwQQsYzZ2TT33XAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.PSAjYlxkmKtDl7ZKwkfk9wHaHc?w=195&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.wxkNLRFDCjiG3xJ-XC0RZgHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.vCeBxDTp4n5AGDFt1IPsjwHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.v9QgQVIv9LYWsTijUCU5aAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.-EnvE2obiJar3BZxCGIFEAHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.Jna8zUHTb0tFr0hyzOvDYAHaHi?w=206&h=210&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://i.pinimg.com/originals/eb/94/42/eb9442eeacd9ec6f5806f6721ccded32.jpg",
    "https://i.pinimg.com/originals/49/ba/8d/49ba8d34cee8c66f7e4aad5d1e3ef903.jpg",
    "https://i.pinimg.com/736x/5d/26/ca/5d26ca3214448b5b1b029ee1fedd9fa6.jpg"
  ];

    // Function to assign a random profile image
    const getRandomProfileImage = (id) => {
      // Use the user ID to generate a consistent random image
      const index = id ? id.charCodeAt(0) % profileImages.length : Math.floor(Math.random() * profileImages.length);
      return profileImages[index];
    };

  const isOnline = onlineUsers.includes(selectedConversation._id);
  const profileImage=getRandomProfileImage(selectedConversation._Id);
 


  return (
    <div className="pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300 ">
    <div>
      <div className={`avatar ${isOnline? "online":"offline" }`}>
        <div className="w-14 rounded-full ">
        <img
              src={profileImage}
              alt="Profile"
            />
        </div>
      </div>
      </div>


      <div>
        {/* <h1 className="text-xl">{selectedConversation.name}</h1> */}
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">{getOnlineUserStatus(selectedConversation._id)}</span>
      </div>
    </div>
  );
}

export default Chatuser;
