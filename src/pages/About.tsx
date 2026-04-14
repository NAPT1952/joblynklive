import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          Welcome to Joblynk Live - Connecting Talent with Opportunity.
        </p>
        <p className="text-lg mb-4">
          We're dedicated to helping professionals find their dream jobs and companies find the perfect talent.
        </p>
      </div>
    </div>
  );
};

export default About;
