import React from 'react';
// import Content from './Content';

export default function Navbar() {
  return (
    <>
      <header className="bg-[#476C7C] text-white fixed top-0 w-full z-50 flex justify-between items-center p-3 md:p-6">
        <div className="text-2xl font-bold">Health management system </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a className="hover:text-[#E2725B] transition-colors" href="/">Home</a>
            </li>
            <li>
              <a className="hover:text-[#E2725B] transition-colors" href="/signup">Signup</a>
            </li>
            <li>
              <a className="hover:text-[#E2725B] transition-colors" href="/login">Login</a>
            </li>
            
          </ul>
        </nav>
        <button className="md:hidden flex items-center" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>
    </>
  );
}
