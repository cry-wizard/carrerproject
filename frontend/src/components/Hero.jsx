import React from 'react';

function Hero() {
  return (
    <div className="relative pt-36 pb-12 px-6 overflow-hidden bg-[#FDFDFF]">
      {/* Background soft glow to make the white cards below pop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 blur-[120px] -z-10 rounded-full" />

      <div className="text-center max-w-5xl mx-auto">
        
        {/* Refined Badge from Image */}
        <div className="inline-flex items-center gap-2 bg-[#F1F5F9] text-[#64748B] px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] mb-10 uppercase border border-white shadow-sm">
          <span className="w-2 h-2 bg-[#005FB8] rounded-full animate-pulse" />
          Discover Your Next Career Move
        </div>

        {/* Hero Title with exact Image Colors */}
        <h1 className="text-6xl md:text-[88px] font-black text-[#001D3D] leading-[1.05] tracking-[-0.04em]">
          Career <span className="text-[#0D62A0] relative">
            Opportunities
          </span>
        </h1>

        {/* Adjusted Subtext */}
        <p className="mt-8 text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
          Where talent learns, grows, and connects with opportunities at <br />
          <span >Centennial</span>.
        </p>

      </div>
    </div>
  );
}

export default Hero;