import React, { useEffect } from "react";
import Chatuser from "./Chatuser.jsx"
import Messages from "./Messages.jsx"
import Type from "./Type.jsx"
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../Context/AuthProvider.jsx"
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null); //error can exist here
  }, [setSelectedConversation]);       //selectedConversation
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
           <Chatuser></Chatuser>
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
            <Messages/>
            </div>
            <Type/>
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.name}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};