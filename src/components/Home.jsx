import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import Header from './Header';

const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <div className="h-full flex flex-col bg-[#E7E8D1] text-gray-800">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                <section 
                    className="flex flex-col justify-center items-center text-center h-[88vh] bg-[#E7E8D1] text-white p-5 gap-4"
                    role="main"
                >
                    <h1 className="text-black text-2xl font-semibold">
                        {username 
                            ? `Welcome, ${username}!` 
                            : "Welcome to the Health Management System"}
                    </h1>
                    <Link 
                        to="/Loantypes" 
                        className="bg-[#e3867d] text-white py-3 px-5 rounded-lg transition-transform transform hover:bg-[#004a99] hover:scale-105 shadow-md"
                    >
                        Get Started
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#476C7C] text-white p-6 text-center">
                <nav className="flex flex-col md:flex-row justify-center gap-4" role="navigation">
                    <Link to="/privacy-policy" className="hover:text-[#e3867d]">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-[#e3867d]">Terms and Conditions</Link>
                    <Link to="/sitemap" className="hover:text-[#e3867d]">Sitemap</Link>
                    <a href="https://facebook.com" className="hover:text-[#e3867d]" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" className="hover:text-[#e3867d]" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" className="hover:text-[#e3867d]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </footer>
        </div>
    );
};

export default Home;
