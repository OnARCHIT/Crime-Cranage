// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Search } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Politics", path: "/politics" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
    { name: "Contact", path: "/contact" },
  ];

  const articles = [
    { name: "Devendra Sharma", path: "/article/jaishankar" },
    { name: "John Wayne Gacy", path: "/article/sharma" },
    { name: "Chandrakant Jha", path: "/article/gacy" },
    { name: "Jeffrey Dahmer", path: "/article/jha" },
    { name: "M. Jaishankar", path: "/article/dahmer" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobile = () => setIsOpen((v) => !v);
  const toggleArticles = () => setArticlesOpen((v) => !v);

  const closeAll = () => {
    setIsOpen(false);
    setArticlesOpen(false);
  };

  // 🔍 SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setArticlesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0c]/95 backdrop-blur border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo1.png" alt="NewsX AI" className="w-10 h-10 object-contain" />
          <span className="text-white font-bold text-lg tracking-wide">
            NewsX <span className="text-[#a00000]">AI</span>
          </span>
        </Link>

        {/* 🔍 SEARCH BAR (DESKTOP) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-[#111] border border-[#222] rounded-md px-3 py-1 w-[250px]">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm text-white w-full"
          />
        </form>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2">

          <Link to="/">
            <button className={`px-4 py-2 rounded-md text-sm font-medium
              ${isActive("/") ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}>
              Home
            </button>
          </Link>

          {/* ARTICLES */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleArticles}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
              ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}
            >
              Articles
              {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {articlesOpen && (
              <div className="absolute mt-2 w-64 bg-[#0b0b0b] border border-[#222] rounded shadow-xl py-2">
                {articles.map((a) => (
                  <Link key={a.path} to={a.path}>
                    <div className="px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a1a]">
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <button className={`px-4 py-2 rounded-md text-sm font-medium
                ${isActive(link.path) ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}>
                {link.name}
              </button>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={toggleMobile}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#111] px-4 py-3 space-y-2">

          {/* SEARCH MOBILE */}
          <form onSubmit={handleSearch} className="flex items-center bg-[#0b0b0c] border border-[#222] rounded px-3 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white outline-none w-full"
            />
          </form>

          <Link to="/">
            <div className="px-3 py-2 text-gray-300 hover:bg-[#1a1a1a]">Home</div>
          </Link>

          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <div className="px-3 py-2 text-gray-300 hover:bg-[#1a1a1a]">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
