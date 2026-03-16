{/* HERO BANNER - WITH BRAIN.JPG */}
<section 
  className="relative w-full h-[450px] overflow-hidden"
  style={{
    backgroundImage: `url('/public/images/aibm.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/40"></div>
  
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-between py-8">
    
    {/* Welcome text at top */}
    <div className="text-center mt-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Welcome to <span className="text-yellow-500">JobLynk</span>
      </h1>
      <p className="text-white/80 mt-2">Connect with India's Top Employers</p>
    </div>

    {/* BRAIN.JPG - 1" square at bottom */}
    <div className="mb-8">
      <img 
        src="/public/images/brain.jpg" 
        alt="Brain"
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border-4 border-yellow-500 shadow-2xl"
        style={{
          boxShadow: '0 10px 25px -5px rgba(255, 193, 7, 0.5)'
        }}
      />
    </div>

    {/* Optional: CTA Buttons - remove if you don't want them */}
    <div className="flex gap-4 mb-4">
      <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
        Get Started
      </button>
      <button className="border-2 border-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition">
        Learn More
      </button>
    </div>
  </div>
</section>
