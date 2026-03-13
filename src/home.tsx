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
    }

    setIsFindingNearby(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const result = await mapsGrounding("Find hospitality and service jobs near my current location. List at least 3 places.", latitude, longitude);
        setNearbyInfo(result.text);
        if (addToast) addToast("Found nearby opportunities!", "success");
      } catch (e) {
        console.error(e);
        if (addToast) addToast("Failed to find nearby jobs", "info");
      } finally {
        setIsFindingNearby(false);
      }
    }, (error) => {
      console.error(error);
      if (addToast) addToast("Please enable location access", "info");
      setIsFindingNearby(false);
    });
  };

  const filteredJobs = jobs.filter(job => 
    (searchCategory === 'All' || job.category === searchCategory) &&
    (searchLocation === 'All' || job.location === searchLocation) &&
    (searchSalary === 'All' || job.salaryRange === searchSalary) &&
    (searchExperience === 'All' || job.experience === searchExperience)
  );

  const handleShare = (job: any, platform: 'email' | 'whatsapp') => {
    const text = `Check out this job: ${job.title} at ${job.company} in ${job.location}. Apply now on Joblynk.live!`;
    const url = window.location.href;
    
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

    {/* Optional trust badge */}
    <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
      🔒 Secure one‑time payment • No recurring fees • Instant access
    </p>
  </div>
</section>
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

      {/* JOB SEARCH FILTER SECTION */}
      <section className="bg-white dark:bg-slate-900 py-16 px-6 transition-colors border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2rem] shadow-xl mb-16 -mt-32 relative z-20 border border-slate-200 dark:border-slate-800">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                <select 
                  value={searchCategory} 
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Operations">Operations</option>
                  <option value="Services">Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
                <select 
                  value={searchLocation} 
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                >
                  <option value="All">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Salary Range</label>
                <select 
                  value={searchSalary} 
                  onChange={(e) => setSearchSalary(e.target.value)}
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                >
                  <option value="All">Any Salary</option>
                  <option value="20k-30k">₹20k - ₹30k</option>
                  <option value="30k-50k">₹30k - ₹50k</option>
                  <option value="50k-100k">₹50k - ₹100k</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Experience</label>
                <select 
                  value={searchExperience} 
                  onChange={(e) => setSearchExperience(e.target.value)}
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                >
                  <option value="All">Any Experience</option>
                  <option value="Junior">Junior (0-2 yrs)</option>
                  <option value="Mid">Mid (2-5 yrs)</option>
                  <option value="Senior">Senior (5+ yrs)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-full bg-slate-900 dark:bg-yellow-500 dark:text-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all">
                  Filter
                </button>
                <button 
                  onClick={handleFindNearby}
                  disabled={isFindingNearby}
                  className="w-full bg-blue-500 text-white py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
                >
                  {isFindingNearby ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-location-crosshairs"></i>}
                  Find Jobs Near Me
                </button>
              </div>
            </div>

            {nearbyInfo && (
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl animate-fade-in">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest text-xs flex items-center gap-2">
                    <i className="fa-solid fa-map-pin"></i> Nearby Opportunities (AI Powered)
                  </h4>
                  <button onClick={() => setNearbyInfo(null)} className="text-blue-400 hover:text-blue-600">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {nearbyInfo}
                </div>
              </div>
            )}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Openings</h3>
            <p className="text-slate-500">Real-time opportunities from our verified partners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingJobs ? (
              <div className="col-span-full flex justify-center py-12">
                <i className="fa-solid fa-spinner animate-spin text-4xl text-yellow-500"></i>
              </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-yellow-500 shadow-sm">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <span className="bg-yellow-500/10 text-yellow-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{job.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-yellow-600 transition-colors">{job.title}</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">{job.company} • {job.location}</p>
                  {job.source && (
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Source: {job.source}</p>
                  )}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white">{job.salary}</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleShare(job, 'whatsapp')}
                        className="text-green-500 hover:scale-110 transition-transform"
                        title="Share on WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                      </button>
                      <button 
                        onClick={() => handleShare(job, 'email')}
                        className="text-blue-500 hover:scale-110 transition-transform"
                        title="Share via Email"
                      >
                        <i className="fa-solid fa-envelope text-lg"></i>
                      </button>
                      <Link to="/pay" className="text-yellow-600 dark:text-yellow-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Apply Now <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-slate-500">
                No jobs found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PARTNER EMPLOYERS SECTION */}
      <section className="bg-slate-50 dark:bg-slate-950 py-24 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-sm font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-[0.3em] mb-3">Network Strength</h3>
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white">Our Partner Employers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-yellow-500/50 transition-all group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-yellow-500 text-xl group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${partner.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{partner.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{partner.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB ALERT SUBSCRIPTION SECTION */}
      <section className="py-24 px-6 bg-yellow-500 dark:bg-yellow-600 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <i className="fa-solid fa-bell-on text-9xl text-white"></i>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-yellow-500 text-sm font-black uppercase tracking-[0.3em] mb-3">Stay Ahead</h3>
                <h2 className="text-4xl font-bold text-white mb-6">Never Miss an Opportunity</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Subscribe to instant alerts. Get notified the moment a job matching your criteria is posted.
                </p>
              </div>

              <div className="md:col-span-3">
                {subSuccess ? (
                  <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-3xl text-center animate-bounce-short">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Subscription Active!</h4>
                    <p className="text-slate-400">You're all set. We'll alert you as soon as we find a match.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="sub-email" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          id="sub-email"
                          required
                          value={subscriptionEmail}
                          onChange={(e) => setSubscriptionEmail(e.target.value)}
                          placeholder="your@email.com" 
                          className="w-full p-4 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-2xl text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="sub-category" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Job Category</label>
                        <select 
                          id="sub-category"
                          required
                          value={jobCategory}
                          onChange={(e) => setJobCategory(e.target.value)}
                          className="w-full p-4 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-2xl text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none"
                        >
                          <option value="" disabled>Select Role</option>
                          <option value="Hotels">Hotels & Hospitality</option>
                          <option value="Operations">Operations</option>
                          <option value="Management">Management</option>
                          <option value="Services">Facility Services</option>
                        </select>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubscribing}
                      className="w-full bg-yellow-500 text-slate-900 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      {isSubscribing ? (
                        <i className="fa-solid fa-spinner animate-spin"></i>
                      ) : (
                        <>
                          <i className="fa-solid fa-bell"></i>
                          Get Job Alerts
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white dark:bg-slate-900 py-24 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-[0.3em] mb-3">Support Center</h3>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "How do I apply for a job?", a: "Simply click 'Apply Now' on any job listing. You'll be guided to our pay portal to finalize your professional resume and submit your application." },
              { q: "What are the resume plans?", a: "We offer a basic plan for ₹49 and a premium plan for ₹99. Premium includes advanced formatting and priority employer visibility." },
              { q: "Is my data secure?", a: "Yes, we use industry-standard encryption and secure payment gateways like Razorpay to protect your information." },
              { q: "How often are jobs updated?", a: "Our system automatically scrapes top job portals every 5 minutes to ensure you see the latest opportunities." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 text-xs font-black">Q</span>
                  {faq.q}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 pl-11 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 dark:bg-black text-white py-24 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold mb-8 text-white">Who This Is For</h3>
                <ul className="space-y-6">
                    {[
                        "Job seekers looking for a professional edge",
                        "Career switchers entering hospitality/services",
                        "Senior professionals needing structured data",
                        "Employers seeking pre-screened ready candidates"
                    ].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 justify-center md:justify-start">
                            <div className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                <i className="fa-solid fa-check text-yellow-500 text-xs"></i>
                            </div>
                            <span className="text-slate-300 text-lg">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 bg-slate-800 dark:bg-slate-900 p-10 rounded-3xl border border-slate-700 shadow-2xl">
                <h4 className="text-2xl font-bold mb-4 text-yellow-500">Ready to Lynx?</h4>
                <p className="text-slate-400 mb-8 text-lg">Join thousands of professionals already using Joblynk.live to find their next big opportunity.</p>
                <Link to="/pay" className="block w-full bg-yellow-500 text-slate-900 py-4 rounded-xl font-black text-center hover:bg-yellow-400 transition-all text-xl shadow-xl">
                    Start Your Application
                </Link>
                <p className="text-center mt-6 text-slate-500 text-xs uppercase tracking-widest font-bold">Secure payment via Razorpay</p>
            </div>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-short {
          animation: bounce-short 0.5s ease-in-out 1;
        }
      `}} />
    </div>
  );
};

export default Home;
