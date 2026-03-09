import { useState, useEffect } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for dynamic shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 transition-all duration-300">
      <div
        className={`w-full max-w-6xl bg-white/90 backdrop-blur-md border border-gray-100 rounded-[1.5rem] px-8 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-gray-200"
            : "shadow-sm"
        }`}
      >
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer group">
          <div className="bg-white p-1 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img
              src="https://centennialinfotech.com/img/logo.png"
              className="w-9 h-9 object-contain"
              alt="Centennial Infotech Logo"
            />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-[#001D3D] whitespace-nowrap hidden sm:block">
            Centennial <span className="text-[#0D62A0]">Infotech</span>
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-end gap-5">
          <a
            href="/jobs"
            className="relative text-[#0D62A0] font-bold text-[15px] group"
          >
            Jobs
            <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#0D62A0] rounded-full"></span>
          </a>
          <a
            href="/login"
            className="hidden lg:block text-gray-500 font-bold text-[15px] hover:text-[#001D3D] transition-colors"
          >
            Login
          </a>

          <button
            className="group flex items-center gap-2 bg-[#0D62A0] text-white px-7 py-2.5 rounded-xl font-bold text-[14px]
            hover:bg-[#001D3D] active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(13,98,160,0.2)]"
          >
            Join Now
            <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:rotate-45" />
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-gray-600 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
