// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const location = useLocation();

  // ✅ UPDATED NAV LINKS
  const navLinks = [
    { name: "Politics", path: "/politics" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
    { name: "Contact", path: "/contact" },
  ];

  // Articles (kept as requested)
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

  const onArticleClick = () => {
    setArticlesOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0c] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ✅ LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo1.png"
            alt="S53 News"
            className="w-10 h-10 object-contain"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            S53 News
          </span>
        </Link>

        {/* ✅ DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2">

          {/* HOME */}
          <Link to="/">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition
              ${isActive("/") ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
            >
              Home
            </button>
          </Link>

          {/* ARTICLES DROPDOWN */}
          <div className="relative">
            <button
              onClick={toggleArticles}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
              ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
            >
              Articles
              {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {articlesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-[#0b0b0b] border border-[#222] rounded shadow-lg py-2 z-50">
                {articles.map((a) => (
                  <Link key={a.path} to={a.path} onClick={onArticleClick}>
                    <div className="px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a1a] hover:text-white cursor-pointer">
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* UPDATED LINKS */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                ${isActive(link.path) ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
              >
                {link.name}
              </button>
            </Link>
          ))}
        </div>

        {/* ✅ MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={toggleMobile}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-4 py-3 space-y-2">

          {/* HOME */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className={`px-3 py-2 rounded-md ${isActive("/") ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}>
              Home
            </div>
          </Link>

          {/* ARTICLES */}
          <button
            onClick={toggleArticles}
            className={`w-full flex justify-between items-center px-3 py-2 rounded-md
              ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}
          >
            Articles
            {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {articlesOpen && (
            <div className="pl-3 space-y-1">
              {articles.map((a) => (
                <Link key={a.path} to={a.path} onClick={onArticleClick}>
                  <div className="px-3 py-2 text-sm text-gray-200 hover:bg-[#1a1a1a] rounded">
                    {a.name}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* UPDATED LINKS */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <div className={`px-3 py-2 rounded-md text-sm
                ${isActive(link.path) ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}>
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
