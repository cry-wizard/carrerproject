import React, { useState, useEffect, useRef } from "react";
import { Search, Briefcase, Filter, ChevronDown } from "lucide-react";

function SearchBar() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const searchRef = useRef(null);

  // Close dropdowns when clicking anywhere outside the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setCategoryOpen(false);
        setTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center -mt-10 relative z-30 px-4" ref={searchRef}>
      <div className="bg-white border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-3xl p-3 flex flex-col md:flex-row items-center gap-3 w-full max-w-5xl">
        
        {/* Search Input Group */}
        <div className="flex-1 flex items-center gap-4 px-6 w-full group">
          <Search className="w-5 h-5 text-gray-300 group-focus-within:text-[#005FB8] transition-colors" />
          <input
            placeholder="Search by role, company, or location..."
            className="w-full bg-transparent py-4 outline-none text-gray-600 placeholder:text-gray-300 text-[15px] font-medium"
          />
        </div>

        {/* Separator (Hidden on mobile) */}
        <div className="hidden md:block w-[1px] h-8 bg-gray-100 mx-1" />

        {/* Categories Dropdown */}
        <div className="relative w-full md:w-auto">
          <button 
            onClick={() => { setCategoryOpen(!categoryOpen); setTypeOpen(false); }}
            className={`flex items-center justify-between gap-6 px-7 py-4 rounded-[2rem] border transition-all w-full md:min-w-[200px] text-[14px] font-semibold tracking-tight ${
              categoryOpen ? 'border-[#005FB8] bg-blue-50/30 text-[#005FB8]' : 'border-gray-100 text-gray-500 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className={`w-4 h-4 ${categoryOpen ? 'text-[#005FB8]' : 'text-gray-300'}`} />
              <span>All Categories</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${categoryOpen ? 'rotate-180 text-[#005FB8]' : 'text-gray-300'}`} />
          </button>

          {categoryOpen && (
            <div className="absolute top-[110%] left-0 w-full min-w-[220px] bg-white border border-gray-100 rounded-[1.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.08)] py-3 z-50 animate-in fade-in slide-in-from-top-2">
              {['Design', 'Development', 'Marketing', 'Sales', 'Product'].map((item) => (
                <button key={item} className="w-full text-left px-6 py-2.5 hover:bg-gray-50 hover:text-[#005FB8] text-[14px] font-medium text-gray-600 transition-colors">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Job Type Dropdown */}
        <div className="relative w-full md:w-auto">
          <button 
            onClick={() => { setTypeOpen(!typeOpen); setCategoryOpen(false); }}
            className={`flex items-center justify-between gap-6 px-7 py-4 rounded-[2rem] border transition-all w-full md:min-w-[180px] text-[14px] font-semibold tracking-tight ${
              typeOpen ? 'border-[#005FB8] bg-blue-50/30 text-[#005FB8]' : 'border-gray-100 text-gray-500 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Filter className={`w-4 h-4 ${typeOpen ? 'text-[#005FB8]' : 'text-gray-300'}`} />
              <span>All Types</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${typeOpen ? 'rotate-180 text-[#005FB8]' : 'text-gray-300'}`} />
          </button>

          {typeOpen && (
            <div className="absolute top-[110%] right-0 w-full min-w-[200px] bg-white border border-gray-100 rounded-[1.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.08)] py-3 z-50 animate-in fade-in slide-in-from-top-2">
              {['Full Time', 'Part Time', 'Contract', 'Internship', 'Remote'].map((item) => (
                <button key={item} className="w-full text-left px-6 py-2.5 hover:bg-gray-50 hover:text-[#005FB8] text-[14px] font-medium text-gray-600 transition-colors">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;