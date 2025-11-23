import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // mobile dropdown
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serial Killers", path: "/serial-killers" },
    { name: "Cold Cases", path: "/cold-cases" },
    { name: "Court Judgments", path: "/court-judgments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Dropdown stays OPEN until user clicks
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0c] border-b border-[#222] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Crime & Carnage" className="w-9 h-9 rounded" />
          <span className="text-white font-bold text-lg tracking-wide">Crime & Carnage</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">

          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    isActive(link.path)
                      ? "bg-[#a00000] text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                  }
                `}
              >
                {link.name}
              </button>
            </Link>
          ))}

          {/* DROPDOWN — ARTICLES */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-all
                ${
                  location.pathname.includes("/article")
                    ? "bg-[#a00000] text-white"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                }
              `}
            >
              Articles
              <ChevronDown size={16} />
            </button>

            {/* DESKTOP DROPDOWN */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#111] border border-[#333] rounded-lg shadow-xl py-2">
                {[
                  { name: "Article 1", path: "/article/jaishankar" },
                  { name: "Article 2", path: "/article/sharma" },
                  { name: "Article 3", path: "/article/chandrakant-jha" },
                  { name: "Article 4", path: "/article/gacy" },
                  { name: "Article 5", path: "/article/dahmer" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm rounded-md transition-all
                      ${
                        isActive(item.path)
                          ? "bg-[#a00000] text-white"
                          : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0b0c] border-t border-[#222] px-4 py-3 space-y-2">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium 
                ${
                  isActive(link.path)
                    ? "bg-[#a00000] text-white"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE DROPDOWN */}
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="w-full flex justify-between px-3 py-2 text-gray-300 rounded-md hover:bg-[#1a1a1a]"
          >
            Articles
            <ChevronDown size={18} className={`${isMobileDropdownOpen && "rotate-180"}`} />
          </button>

          {isMobileDropdownOpen && (
            <div className="pl-3 space-y-1">
              {[
                { name: "Article 1", path: "/article/jaishankar" },
                { name: "Article 2", path: "/article/sharma" },
                { name: "Article 3", path: "/article/chandrakant-jha" },
                { name: "Article 4", path: "/article/gacy" },
                { name: "Article 5", path: "/article/dahmer" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-sm
                    ${
                      isActive(item.path)
                        ? "bg-[#a00000] text-white"
                        : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
