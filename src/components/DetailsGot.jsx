import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DetailsGot() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state || {};

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            navigate("/content", { replace: true }); // Redirect to the content page
        };

        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton); // Clean up the event listener
        };
    }, [navigate]);

    return (
        <div className="bg-[#F0F4F8] min-h-screen flex items-center justify-center px-6">
            <div className="max-w-screen-lg mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#2C3E50] mb-6">
                    Why Mental Health Matters
                </h2>
                <p className="text-lg text-[#7F8C8D] leading-relaxed mb-12">
                    Mental health plays a critical role in how we think, feel, and behave. 
                    Here are some reasons why prioritizing mental health is essential.
                </p>
                {/* The rest of your component */}
            </div>
        </div>
    );
}
