import React from 'react';

export default function Content() {
  return (
    <div className="pt-20 bg-gradient-to-br from-purple-200 via-blue-300 to-teal-200 min-h-screen">
      {/* Page Container */}
      <div className="flex flex-col items-center p-8 space-y-12">
        {/* Title Section */}
        <div className="text-center max-w-3xl">
          <h2 className="text-gray-800 text-4xl font-bold mb-4">
            Welcome to Student Mental Health Support
          </h2>
          <p className="text-gray-700 text-lg">
            Your mental health matters. Explore resources, connect with professionals, and take charge of your well-being.
          </p>
        </div>

        {/* Image Section */}
       
        <div className="flex justify-center">
  <img
    src="https://img.freepik.com/free-vector/gradient-background-world-mental-health-day_23-2150708748.jpg?t=st=1733608446~exp=1733612046~hmac=fc5923f39ad6310ff9f352be2a7f0d2a6af7c458d23081ff24a64c4baed8afbc&w=996"
    alt="Mental Health Awareness"
    className="rounded-lg shadow-md w-full  max-w-xxl" // Increased max width to lg
  />
</div>

        

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Personalized Assessments
            </h3>
            <p className="text-gray-600">
              Get insights into your mental health through scientifically designed assessments tailored to your needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Counseling Services
            </h3>
            <p className="text-gray-600">
              Connect with professional counselors for one-on-one sessions to discuss and navigate your challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Self-Help Resources
            </h3>
            <p className="text-gray-600">
              Access tools, guides, and activities designed to help you manage stress and improve emotional well-being.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Group Workshops
            </h3>
            <p className="text-gray-600">
              Join workshops and group sessions to learn coping strategies and connect with peers in a supportive environment.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 Helpline Support
            </h3>
            <p className="text-gray-600">
              Our helpline is available round-the-clock to provide immediate assistance whenever you need it.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mindfulness Activities
            </h3>
            <p className="text-gray-600">
              Discover mindfulness exercises to enhance focus, reduce stress, and foster a sense of calm.
            </p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="text-center">
          <h3 className="text-gray-800 text-2xl font-semibold mb-4">Get Started</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition duration-300 text-center"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-500 transition duration-300 text-center"
            >
              User Login
            </a>
            <a
              href="/loginapprover"
              className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 text-center"
            >
              Health Checkup
            </a>
            <a
              href="/loginadmin"
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-500 transition duration-300 text-center"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
