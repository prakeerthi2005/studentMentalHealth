import React from 'react';
import Header from './Header';

export default function MentalHealthServices() {
  return (
    <div>
      <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-purple-200 via-blue-300 to-teal-200 text-gray-800">
        <Header />
        <section className="py-16 text-center">
          <h2 className="text-4xl font-semibold text-[#4A4E69] uppercase mb-10">
            Student Mental Health Services
          </h2>

          {/* Image in the middle, smaller size */}
          <div className="mb-10">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-world-mental-health-day-background_23-2149633820.jpg?t=st=1733611144~exp=1733614744~hmac=ef41b37245e3b808523c8ce69c74b905de2265f61e4091da1c1c75f7d44ecc3c&w=996"
              alt="Mental Health Support"
              className="mx-auto rounded-sm shadow-sm w-3/4 md:w-1/2" // Adjust width here
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Personalized Assessments",
              "Counseling Services",
              "Self-Help Resources",
              "Mindfulness Activities",
            ].map((service, index) => (
              <div
                key={index}
                className="w-56 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-[#4A4E69] mb-4">
                  {service}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service === "Personalized Assessments"
                    ? "Discover insights about your mental health with tailored assessments."
                    : service === "Counseling Services"
                    ? "Connect with licensed professionals for guidance and support."
                    : service === "Self-Help Resources"
                    ? "Access tools, articles, and activities to support your well-being."
                    : "Engage in mindfulness exercises to find peace and reduce stress."}
                </p>
                <button className="bg-[#4A4E69] text-white py-2 px-4 rounded hover:bg-teal-700 transition">
                  <a href="userloandetails">Learn More</a>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
