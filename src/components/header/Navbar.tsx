import React from "react";
import SearchBar from "../ui/SearchBar";
import UserSpace from "../ui/UserSpace";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <img src="/fw_logo.png" alt="Logo" className="h-8" />
      <div className="flex justify-between space-x-4">
        <SearchBar />
        <UserSpace />
      </div>
    </div>
  );
};

export default Navbar;
