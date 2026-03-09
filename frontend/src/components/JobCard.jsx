import { MapPin, Building2, ChevronRight } from "lucide-react";

function JobCard({ job }) {
  // Determine currency based on data or default to $
  const currency = job.location?.country?.toLowerCase() === 'india' || job.company?.toLowerCase().includes('centennial') ? '₹' : '$';

  return (
    <div className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 
      shadow-[0_10px_40px_rgba(0,0,0,0.03)] 
      hover:shadow-[0_30px_60px_rgba(13,98,160,0.12)] 
      hover:border-[#0D62A0]/30 hover:-translate-y-2 
      transition-all duration-500 ease-out flex flex-col h-full relative overflow-hidden">
      
      {/* Top Section: Icon & Badge */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl text-[#0D62A0] group-hover:scale-110 transition-transform duration-500">
          <Building2 className="w-6 h-6" />
        </div>
        <span className="bg-[#F1F5F9] text-[#64748B] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest transition-colors group-hover:bg-blue-50 group-hover:text-[#0D62A0]">
          {job.jobType || "Full Time"}
        </span>
      </div>

      {/* Title & Company */}
      <div className="space-y-2">
        <h2 className="text-xl font-extrabold text-[#001D3D] leading-tight group-hover:text-[#0D62A0] transition-colors duration-300">
          {job.title}
        </h2>
        <p className="text-[#0D62A0] text-xs font-black uppercase tracking-widest">
          {job.company}
        </p>
      </div>

      {/* Details Section */}
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
          <MapPin className="w-4 h-4 text-gray-300 group-hover:text-[#0D62A0] transition-colors" />
          <span>{job.location?.country} • {job.location?.type}</span>
        </div>
        <div className="text-[#1E293B] text-sm font-bold flex items-center gap-1">
           {currency} {job.compensation?.min?.toLocaleString()} - {job.compensation?.max?.toLocaleString()} 
           <span className="text-gray-400 font-medium text-xs ml-1">/ Monthly</span>
        </div>
      </div>

      {/* View Details Button */}
      <button className="w-full mt-auto pt-10">
        <div className="w-full py-4 bg-[#F8FAFC] group-hover:bg-[#0D62A0] text-[#64748B] group-hover:text-white rounded-2xl font-bold text-[11px] tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
          VIEW DETAILS <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </button>

    </div>
  );
}

export default JobCard;