import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* HERO BANNER SECTION */}
      <section 
        className="relative w-full h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url('/public/images/aibm.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full py-12">
          
          {/* Top text */}
          <div className="text-center mt-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Welcome to <span className="text-yellow-500">JobLynk</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Connect with India's Top Employers
            </p>
          </div>

          {/* BRAIN.JPG AT CENTER BOTTOM */}
          <div className="mb-8">
            <img 
              src="/public/images/brain.jpg" 
              alt="Brain"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-yellow-500 shadow-2xl transform hover:scale-110 transition-transform duration-300"
              style={{
                boxShadow: '0 0 30px rgba(255, 193, 7, 0.5)'
              }}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8">
            <Link 
              to="/pay" 
              className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/builder" 
              className="border-2 border-yellow-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-slate-900 transition-all transform hover:-translate-y-1"
            >
              Build Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of your home page content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          {/* Add your other content here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
