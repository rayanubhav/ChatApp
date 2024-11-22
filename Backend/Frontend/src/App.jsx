import React from "react";
import Left from "./home/left/left.jsx";
import Right from "./home/right/Right.jsx";
import Logout from "./home/left1/Logout.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { useAuth } from "./Context/AuthProvider.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
       <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>


            
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" replace /> : <Signup />}
        />
      </Routes>
      <Toaster/>

    </>
  );
}

export default App;
