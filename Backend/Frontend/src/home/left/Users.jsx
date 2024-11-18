import React from "react";
import User from "./User.jsx";
import userGetAllUsers from "../../Context/userGetAllUsers.jsx";

function Users() {
  const [allUsers, loading] = userGetAllUsers();
  return (
    <div>
      {" "}
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        style={{ maxHeight: "calc(84vh - 10vh)" }}
        className="flex-eren py-2  overflow-y-auto"
      >
        {allUsers.map((user, index) => {
          return <User key={index} user={user} />;
        })}
      </div>
    </div>
  );
}

export default Users;
