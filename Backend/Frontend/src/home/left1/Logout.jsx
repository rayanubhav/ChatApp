import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";

function Logout() {
  const [loading,setLoading]=useState(false);
  const handleLogout=async()=>{
    setLoading(true);
    try {
      const res=await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  }
  return (
    <>
      <div className="w-[5%]  bg-slate-900 text-white flex flex-col justify-end">
        <div className="p-3 align-bottom">
          <button >
            <FiLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 " 
              onClick={handleLogout}
            />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout;
