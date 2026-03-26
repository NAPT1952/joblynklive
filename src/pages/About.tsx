import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Joblynk.live</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Connecting Talent with Opportunity – Faster, Smarter, Simpler.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* About Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Us</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-4">
            Joblynk.live helps job seekers prepare structured resumes, professional cover letters, and curated employer contact data. 
            Designed especially for <span className="font-semibold">hospitality, operations, management, and service professionals</span>, 
            we focus on simplicity, speed, and affordability with Pan-India reach.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            We believe that every job seeker deserves a fair chance to present themselves effectively to employers. 
            Our platform bridges the gap between talent and opportunity through ethical, technology-driven support.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="text-yellow-500 text-3xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Support Plan</h3>
              <p className="text-slate-600">Select the Starter (₹49) or Premium (₹99) pack based on your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="text-yellow-500 text-3xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Details</h3>
              <p className="text-slate-600">Fill in your professional information, job preferences, and requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="text-yellow-500 text-3xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Receive Job-Ready Documents</h3>
              <p className="text-slate-600">Get your structured resume, cover letter, and curated employer data within 24 hours.</p>
            </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-16 bg-white rounded-lg shadow-sm p-8 border border-slate-200">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Who This Is For</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Job seekers looking for structured resume and cover letter support</li>
            <li>Career switchers aiming to present transferable skills effectively</li>
            <li>Senior professionals seeking curated employer connections</li>
            <li>Employers searching for ready-to-apply candidates</li>
          </ul>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <p className="italic text-slate-600">"Got placed in a hotel chain in Pune within weeks. The resume format made a difference."</p>
              <p className="font-semibold mt-3 text-slate-800">— Rahul S.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <p className="italic text-slate-600">"Clear documentation and professional support helped me switch roles."</p>
              <p className="font-semibold mt-3 text-slate-800">— Meena K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <p className="italic text-slate-600">"Employer contacts shared were relevant and practical."</p>
              <p className="font-semibold mt-3 text-slate-800">— Arjun P.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Verified Employer</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Hospitality Partner</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Service Industry Recruiter</span>
          </div>
        </div>

        {/* Vision */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Vision</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            To become India's most trusted job-support platform, empowering millions of service professionals with affordable, high-quality career tools and direct employer access.
          </p>
        </div>

        {/* Image at the bottom */}
        <div className="mt-12 text-center">
          <img
            src="/interview2.jpg"
            alt="Indian executive interviewing candidate in a 5-star office"
            className="mx-auto rounded-lg shadow-xl max-w-full h-auto object-cover max-h-96 w-auto"
          />
          <p className="text-sm text-slate-500 mt-2">Bridging talent with opportunity – professional guidance for your career journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
