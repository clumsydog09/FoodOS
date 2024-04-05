import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Order() {
  return (
    <div className="border-2 p-2 h-fit my-4 rounded">
      <p>order #</p>
      <p>date</p>
      <p>price</p>
    </div>
  );
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-screen bg-no-repeat bg-top ">
      <Navbar />
      <div className="flex w-[90%] h-[75%] mx-auto rounded overflow-hidden shadow-md">
        <div className="flex flex-col w-1/4 bg-blur2 py-4 pl-4 ">
          {/* User image */}
          <div className="p-4 mb-8 mr-4">
            <img
              src="https://i.pravatar.cc/"
              alt="User"
              className="w-48 h-48 rounded-full mx-auto mb-4 border-2 border-black "
            />
            <h1 className="font-semibold text-center">Aditya Verma</h1>
          </div>

          {/* Sidebar tabs */}
          <div className="flex flex-col">
            <button
              className={`py-2 px-4 mb-2 rounded-l-full ${
                activeTab === "profile"
                  ? "bg-amber-300 rounded-r-0"
                  : "bg-blur1 rounded-full mr-2  hover:bg-amber-400"
              }`}
              onClick={() => handleTabChange("profile")}
            >
              Profile
            </button>
            <button
              className={`py-2 px-4 mb-2 rounded-l-full ${
                activeTab === "orderHistory"
                  ? "bg-amber-300 rounded-r-0"
                  : "bg-blur1 rounded-full mr-2 hover:bg-amber-400"
              }`}
              onClick={() => handleTabChange("orderHistory")}
            >
              Order History
            </button>
          </div>

          {/* Signout button */}
          <Link
            to="/login"
            className="py-2 px-4 mt-auto mx-4 bg-red-500 hover:bg-red-600   text-white rounded text-center"
          >
            <button>Sign Out</button>
          </Link>
        </div>

        {/* Right side content */}
        <div className="flex-grow p-8 bg-white w-[75%]">
          {activeTab === "profile" && (
            <div className="flex flex-col ">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blur2 p-4 rounded shadow">
                  <h2 className="mb-4">Name</h2>
                  <p className="p-4 mb-2 bg-zinc-100">Aditya Verma</p>
                </div>
                <div className="bg-blur2 p-4 rounded shadow">
                  <h2 className="mb-4">Phone Number</h2>
                  <p className="p-4 mb-2 bg-zinc-100">9889420443</p>
                </div>
                <div className="bg-blur2 p-4 rounded shadow">
                  <h2 className="mb-4">Address</h2>
                  <p className="p-4 mb-2 bg-zinc-100">
                    G-33,Raptinage Phase-4, Chargawan, Gorakhpur, UP
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <Link to="/profile/edit">
                  <button className="py-1 px-6 mt-32 hover:bg-gray-400 bg-gray-300 rounded text-center">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === "orderHistory" && (
            <div className="bg-white p-4 rounded shadow h-full overflow-auto">
              {/* Display order history here */}
              <h2 className="border-b-2 p-2 mb-8 text-xl">Order History</h2>
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
