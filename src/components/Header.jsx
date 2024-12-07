import React from 'react'

export default function Header() {
    const username = localStorage.getItem('username');

  return (
    <div>
      <header className="bg-[#476C7C] text-white p-2 flex justify-between items-center flex-wrap">
                <div className="text-2xl font-bold">Student Mental Health Support</div>
                <nav>
                    <ul className="flex gap-5 list-none p-0 m-0">
                        <li><a href="/home" className="text-white hover:text-[#E2725B]">Home</a></li>
                        <li><a href="/" className="text-white hover:text-[#E2725B]">Dashboard</a></li>
                        <li><a href="/detailsGot" className="text-white hover:text-[#E2725B]">Importance</a></li>
                        <li><a href="/userloandetails" className="text-white hover:text-[#E2725B]">Document Upload</a></li>
                    </ul>
                </nav>
                <div className="flex space-x-2">
                    <button className="py-2 px-3 rounded bg-[#FFF2D7] text-[#004a99] cursor-pointer transition-all duration-300 transform hover:bg-[#F98866] hover:scale-110 hover:text-white">
                        {username}
                    </button>
                    <button className="py-2 px-3 rounded bg-[#FFF2D7] text-[#004a99] cursor-pointer transition-all duration-300 transform hover:bg-[#F98866] hover:scale-110 hover:text-white">
                        <a href="/login" className="text-[#004a99] no-underline hover:text-white">
                            Logout
                        </a>
                    </button>
                </div>
            </header>
    </div>
  )
}
