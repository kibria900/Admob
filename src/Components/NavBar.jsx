import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/admob.svg";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [navSidebarOpen, setNavSidebarOpen] = useState(false);

  const toggleNavSidebar = () => {
    setNavSidebarOpen(!navSidebarOpen);
  };

  const getNavLinkClass = (isActive) => {
    return isActive ? "text-blue-600 font-bold" : "text-gray-700";
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-gray-100 shadow-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Menu Icon */}
          <button onClick={toggleNavSidebar} className="text-gray-700 hover:text-black transition">
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <img src={Logo} alt="logo" className="h-8" />

          {/* Nav Items (stay on top navbar) */}
          <nav>
            <ul className="flex gap-x-6 text-sm font-medium">
              <li><NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink></li>
              <li><NavLink to="/Apps" className={({ isActive }) => getNavLinkClass(isActive)}>Apps</NavLink></li>
              <li><NavLink to="/Reports" className={({ isActive }) => getNavLinkClass(isActive)}>Reports</NavLink></li>
              <li><NavLink to="/Mediation" className={({ isActive }) => getNavLinkClass(isActive)}>Mediation</NavLink></li>
              <li><NavLink to="/Campaigns" className={({ isActive }) => getNavLinkClass(isActive)}>Campaigns</NavLink></li>
              <li><NavLink to="/Policy" className={({ isActive }) => getNavLinkClass(isActive)}>Policy Center</NavLink></li>
              <li><NavLink to="/Help" className={({ isActive }) => getNavLinkClass(isActive)}>Help</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* Search and other controls */}
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          <select className="text-sm rounded-md px-2 py-1 bg-gray-200">
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
          <button className="py-1 px-3 bg-amber-100 hover:bg-amber-800 text-amber-700 hover:text-white font-medium rounded text-sm">
            Log In
          </button>
          <button className="py-1 px-3 bg-white text-red-600 hover:bg-black hover:text-white font-medium rounded text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Sidebar (Nav Items Only – toggleable copy) */}
      <div className="relative">
        <div className={`fixed top-[60px] left-0 w-64 h-full bg-gray-400 text-white p-5 shadow-lg transition-transform duration-300 z-50 ${navSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <h2 className="text-lg font-semibold mb-6 border-b pb-2">Menu</h2>
          <ul className="space-y-4 text-sm">
            <li><NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink></li>
            <li><NavLink to="/Apps" className={({ isActive }) => getNavLinkClass(isActive)}>Apps</NavLink></li>
            <li><NavLink to="/Reports" className={({ isActive }) => getNavLinkClass(isActive)}>Reports</NavLink></li>
            <li><NavLink to="/Mediation" className={({ isActive }) => getNavLinkClass(isActive)}>Mediation</NavLink></li>
            <li><NavLink to="/Campaigns" className={({ isActive }) => getNavLinkClass(isActive)}>Campaigns</NavLink></li>
            <li><NavLink to="/Policy" className={({ isActive }) => getNavLinkClass(isActive)}>Policy Center</NavLink></li>
            <li><NavLink to="/Help" className={({ isActive }) => getNavLinkClass(isActive)}>Help</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
