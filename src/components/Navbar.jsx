// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Serial Killers", path: "/serial-killers" },
    { name: "Cold Cases", path: "/cold-cases" },
    { name: "Court Judgments", path: "/court-judgments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Correct final order
  const articles = [
    { name: "Article 1 — M. Jaishankar", path: "/article/jaishankar" },
    { name: "Article 2 — Devendra Sharma", path: "/article/sharma" },
    {name: "Article 3 — John Wayne Gacy", path: "/article/gacy" },
    { name: "Article 4 — Chandrakant Jha", path: "/article/chandrakant-jha" },
    { name: "Article 5 — Jeffrey Dahmer", path: "/article/dahmer" },
  ];

  const isActive = (path) => location.pathname === path;
  const toggleMobile = () => setIsOpen((v) => !v);
  const toggleArticles = () => setArticlesOpen((v) => !v);

  const onArticleClick = () => {
    setArticlesOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#111] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Crime & Carnage" className="w-9 h-9 rounded-sm object-cover shadow-sm" />
          <span className="text-white font-bold text-lg">Crime &amp; Carnage</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">

          {/* HOME */}
          <Link to="/">
            <button className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive("/") ? "bg-[#a00000] text-white shadow-md" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}>
              Home
            </button>
          </Link>

          {/* ARTICLES DROPDOWN */}
          <div className="relative">
            <button
              onClick={toggleArticles}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
            >
              Articles
              {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {articlesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-[#0b0b0b] border border-[#222] rounded shadow-lg py-2 z-50">
                {articles.map((a) => (
                  <Link key={a.path} to={a.path} onClick={onArticleClick}>
                    <div className="px-4 py-2 cursor-pointer text-gray-200 text-sm hover:bg-[#1a1a1a] hover:text-white">
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${isActive(link.path) ? "bg-[#a00000] text-white shadow-md" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
              >
                {link.name}
              </button>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={toggleMobile}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-4 py-3 space-y-2">

          {/* HOME */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className={`block px-3 py-2 rounded-md ${isActive("/") ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}>
              Home
            </div>
          </Link>

          {/* ARTICLES DROPDOWN */}
          <button
            onClick={toggleArticles}
            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-sm 
              ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:bg-[#1a1a1a]"}`}
          >
            Articles
            {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {articlesOpen && (
            <div className="mt-2 space-y-1 pl-3">
              {articles.map((a) => (
                <Link key={a.path} to={a.path} onClick={onArticleClick}>
                  <div className="px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-[#1a1a1a]">
                    {a.name}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* REMAINING LINKS */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <div className={`block px-3 py-2 rounded-md text-sm font-medium 
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
