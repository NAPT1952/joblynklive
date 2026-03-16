import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mapsGrounding } from '../src/services/geminiService';

const Home: React.FC<{ addToast?: (msg: string, type?: 'info' | 'success') => void }> = ({ addToast }) => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);

  // Job Search State
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchLocation, setSearchLocation] = useState('All');
  const [searchSalary, setSearchSalary] = useState('All');
  const [searchExperience, setSearchExperience] = useState('All');
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [isFindingNearby, setIsFindingNearby] = useState(false);
  const [nearbyInfo, setNearbyInfo] = useState<string | null>(null);

  useEffect(() => {
    // Static job data for GitHub Pages (no backend)
    setJobs([
      { id: 1, title: "Front Office Manager", company: "Taj Hotels", location: "Mumbai", category: "Hospitality", salary: "₹35k-45k", salaryRange: "30k-50k", experience: "Mid", source: "Indeed India" },
      { id: 2, title: "Facility Supervisor", company: "Silverline", location: "Pune", category: "Services", salary: "₹25k-30k", salaryRange: "20k-30k", experience: "Junior", source: "Naukri" },
      { id: 3, title: "Executive Chef", company: "ITC Hotels", location: "Delhi", category: "Hospitality", salary: "₹50k-70k", salaryRange: "50k-100k", experience: "Senior", source: "LinkedIn" },
      { id: 4, title: "Operations Head", company: "Metro Ops", location: "Bangalore", category: "Operations", salary: "₹80k-120k", salaryRange: "50k-100k", experience: "Senior", source: "Indeed India" },
      { id: 5, title: "Guest Relations Associate", company: "Elite Stay", location: "Mumbai", category: "Hospitality", salary: "₹20k-28k", salaryRange: "20k-30k", experience: "Junior", source: "Naukri" },
      { id: 6, title: "Logistics Coordinator", company: "Urban Serve", location: "Hyderabad", category: "Operations", salary: "₹30k-40k", salaryRange: "30k-50k", experience: "Mid", source: "LinkedIn" },
    ]);
    setIsLoadingJobs(false);
  }, []);

  const handleFindNearby = () => {
    if (!navigator.geolocation) {
      if (addToast) addToast("Geolocation is not supported by your browser", "info");
      return;
 {/* HERO SECTION with AIBM Background and Brain Images */}
<section
  className="text-white py-24 px-6 relative overflow-hidden transition-colors duration-300"
  style={{
    backgroundImage: `url('/public/images/aibm.jpg')`,  // ← Changed from backgroundColor to backgroundImage
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* 9 Brain Images Grid */}
    <div className="grid grid-cols-3 md:grid-cols-9 gap-2 md:gap-4 mb-12">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-yellow-500/30 hover:border-yellow-500 transition-all transform hover:scale-105">
          <img 
            src="/public/images/brain.jpg" 
            alt={`Brain frame ${index + 1}`}
            className="w-full h-full object-cover"
          /><section className="text-white py-24 px-6 relative overflow-hidden transition-colors duration-300">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* 9 Brain Images Grid - THIS IS LINES 38-59 */}
    <div className="grid grid-cols-3 md:grid-cols-9 gap-2 md:gap-4 mb-12">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-yellow-500/30 hover:border-yellow-500 transition-all transform hover:scale-105">
          <img 
            src="/public/images/brain.jpg" 
            alt={`Brain frame ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>  {/* ← Grid closes here (line 59) */}

    {/* REST OF HERO CONTENT - Place AFTER line 59, BEFORE closing section */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Connect with India's <span className="text-yellow-500">Top Employers</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
          Elevate your career with Joblynk.live. We provide professional resumes and verified data to get you hired by the best brands in India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
          <Link to="/pay" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]">
            Get Started
          </Link>
          <Link to="/builder" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-slate-900 transition-all transform hover:-translate-y-1">
            Build Resume
          </Link>
        </div>
      </div>
      
      {/* Optional professional photo */}
      <div className="flex-1 relative hidden lg:block">
        <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
          alt="Indian Professional" 
          className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl relative z-10 border-4 border-slate-800"
        />
      </div>
    </div>
  </div>  {/* ← Closes max-w-6xl div */}
</section>  {/* ← Closes section */}
          
        </div>
      ))}
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Connect with India's <span className="text-yellow-500">Top Employers</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
          Elevate your career with Joblynk.live. We provide professional resumes and verified data to get you hired by the best brands in India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
          <Link to="/pay" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]">
            Get Started
          </Link>
          <Link to="/builder" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-slate-900 transition-all transform hover:-translate-y-1">
            Build Resume
          </Link>
        </div>
      </div>
      
      {/* Optional professional photo */}
      <div className="flex-1 relative hidden lg:block">
        <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
          alt="Indian Professional" 
          className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl relative z-10 border-4 border-slate-800"
        />
      </div>
    </div>
  </div>
</section>
          />
        </div>
      ))}
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Connect with India's <span className="text-yellow-500">Top Employers</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
          Elevate your career with Joblynk.live. We provide professional resumes and verified data to get you hired by the best brands in India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
          <Link to="/pay" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]">
            Get Started
          </Link>
          <Link to="/builder" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-slate-900 transition-all transform hover:-translate-y-1">
            Build Resume
          </Link>
        </div>
      </div>
      
      {/* Optional: You can keep the professional photo or remove it */}
      <div className="flex-1 relative hidden lg:block">
        <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
          alt="Indian Professional" 
          className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl relative z-10 border-4 border-slate-800"
        />
      </div>
    </div>
  </div>
</section>
    
    if (platform === 'email') {
      window.location.href = `mailto:?subject=Job Opportunity: ${job.title}&body=${encodeURIComponent(text + '\n' + url)}`;
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    }
  };

  const partners = [
    { name: "Grand Plaza", industry: "Hotels & Resorts", icon: "fa-hotel" },
    { name: "Azure Dining", industry: "Fine Dining", icon: "fa-utensils" },
    { name: "Silverline", industry: "Facility Management", icon: "fa-building-shield" },
    { name: "Metro Ops", industry: "Logistics", icon: "fa-truck-fast" },
    { name: "Elite Stay", industry: "Luxury Suites", icon: "fa-bell" },
    { name: "Urban Serve", industry: "Corporate Services", icon: "fa-briefcase" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setSubSuccess(true);
      setSubscriptionEmail('');
      setJobCategory('');
      if (addToast) addToast("Subscription successful! You will now receive alerts.", "success");
      setTimeout(() => setSubSuccess(false), 5000);
    }, 1500);
  };

  // Simulate Toast Notification for Job Alerts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (addToast) addToast("New Front Office role matches your alert in Mumbai!", "info");
    }, 8000);
    return () => clearTimeout(timer);
  }, [addToast]);

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="bg-slate-900 dark:bg-black text-white py-24 px-6 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-70"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Connect with India's <span className="text-yellow-500">Top Employers</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Elevate your career with Joblynk.live. We provide professional resumes and verified data to get you hired by the best brands in India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <Link to="/pay" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]">
                Get Started
              </Link>
              <Link to="/builder" className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-slate-900 transition-all transform hover:-translate-y-1">
                Build Resume
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Indian Professional" 
              className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl relative z-10 border-4 border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* ========== ₹49 & ₹99 PLANS ========== */}
      <section className="bg-white dark:bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sm font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-[0.3em] mb-3">
              Your Career, Engineered
            </h3>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Choose Your Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ₹49 Plan */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">₹49</span>
                  <span className="text-slate-500 dark:text-slate-500 text-sm ml-2">/ one‑time</span>
                </div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-600">
                  <i className="fa-solid fa-file-pen text-xl"></i>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mb-4">Resume + Cover Letter + 20+ Employer List</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>Custom‑built resume</strong> – tailored to your qualifications, experience, and target role</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>Professional cover letter</strong> – written to match your resume and the jobs you want</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>20+ targeted companies & job providers</strong> – hand‑picked based on your location, industry, and qualifications</span>
                </li>
              </ul>
              <Link
                to="/pay?plan=49"
                className="block w-full bg-yellow-500 text-slate-900 py-4 rounded-xl font-black text-center hover:bg-yellow-400 transition-all"
              >
                Choose ₹49 Plan
              </Link>
            </div>

            {/* ₹99 Plan (Most Popular) */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border-2 border-yellow-500 relative group">
              <div className="absolute -top-4 right-8 bg-yellow-500 text-slate-900 px-6 py-1 rounded-full font-black text-sm uppercase tracking-wider">
                Most Popular
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">₹99</span>
                  <span className="text-slate-500 dark:text-slate-500 text-sm ml-2">/ one‑time</span>
                </div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-600">
                  <i className="fa-solid fa-chart-line text-xl"></i>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white mb-4">Everything in ₹49 + Job Alerts & HR Contacts</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>All features of the ₹49 plan</strong> – custom resume, cover letter, 20+ employer list</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>Daily job updates</strong> – we scrape top job boards and send you fresh opportunities matching your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>HR manager contacts</strong> – get direct access to recruiters and decision‑makers in your industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-yellow-500 mt-1"></i>
                  <span className="text-slate-600 dark:text-slate-400"><strong>Priority support</strong> – we help you with follow‑ups and interview prep</span>
                </li>
              </ul>
              <Link
                to="/pay?plan=99"
                className="block w-full bg-yellow-500 text-slate-900 py-4 rounded-xl font-black text-center hover:bg-yellow-400 transition-all"
              >
                Choose ₹99 Plan
              </Link>
            </div>
          </div>

          <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
            🔒 Secure one‑time payment • No recurring fees • Instant access
          </p>
        </div>
      </section>

      {/* JOB SEARCH FILTER SECTION (unchanged) */}
      <section className="bg-white dark:bg-slate-900 py-16 px-6 transition-colors border-b border-slate-100 dark:border-slate-800">
        {/* ... (your existing job search filter code) ... */}
        {/* I'll keep it as-is – you already have the full code in your file, so just copy the rest from your original after this line */}
      </section>

      {/* ... the rest of your original file (PARTNER EMPLOYERS, JOB ALERT SUBSCRIPTION, FAQ, FINAL CTA) ... */}
    </div>
  );
};

export default Home;
