// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);            // mobile menu
  const [articlesOpen, setArticlesOpen] = useState(false); // articles dropdown (stable until click)
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    // We'll render Articles as a dropdown below instead of a normal link
    { name: "Serial Killers", path: "/serial-killers" },
    { name: "Cold Cases", path: "/cold-cases" },
    { name: "Court Judgments", path: "/court-judgments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const articles = [
    { name: "Article 1 — Dahmer", path: "/article/dahmer" },
    { name: "Article 2 — Jaishankar", path: "/article/jaishankar" },
    { name: "Article 3 — Sharma", path: "/article/sharma" },
    { name: "Article 4 — Gacy", path: "/article/gacy" },
    { name: "Article 5 — Jha", path: "/article/chandrakant-jha" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobile = () => setIsOpen((v) => !v);
  const toggleArticles = () => setArticlesOpen((v) => !v);

  // Close articles dropdown when user clicks an article link
  const onArticleClick = () => {
    setArticlesOpen(false);
    setIsOpen(false); // also close mobile menu (if open)
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#111] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Crime & Carnage"
            className="w-9 h-9 rounded-sm object-cover shadow-sm"
          />
          <span className="text-white font-bold text-lg">Crime &amp; Carnage</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {/* Home */}
          <div className="flex items-center gap-1">
            <Link to="/">
              <button
                className={`nav-button ${isActive("/") ? "nav-pill" : ""}`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </button>
            </Link>
          </div>

          {/* Articles dropdown (second position) */}
          <div className="relative">
            <button
              onClick={toggleArticles}
              className={`flex items-center gap-2 nav-button ${articlesOpen ? "nav-pill" : ""}`}
              aria-expanded={articlesOpen}
              aria-haspopup="menu"
              type="button"
            >
              Articles
              {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {/* Dropdown panel - stays open until user clicks an article or toggles the button */}
            {articlesOpen && (
              <div
                className="absolute left-0 mt-2 w-64 bg-[#0b0b0b] border border-[#222] rounded shadow-soft py-2 z-50"
                role="menu"
                aria-label="Articles dropdown"
              >
                {articles.map((a) => (
                  <Link key={a.path} to={a.path} onClick={onArticleClick}>
                    <div
                      className={`px-4 py-2 text-sm text-gray-200 hover:bg-[#1a1a1a] hover:text-white cursor-pointer`}
                      role="menuitem"
                    >
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* rest of nav links */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    isActive(link.path)
                      ? "bg-[#a00000] text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                  }`}
              >
                {link.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobile}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-4 py-3 space-y-2">
          {/* Home */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive("/") ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}>
              Home
            </div>
          </Link>

          {/* Mobile: Articles dropdown - keep stable until article click */}
          <div>
            <button
              onClick={toggleArticles}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex justify-between items-center ${articlesOpen ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}
            >
              <span>Articles</span>
              {articlesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {articlesOpen && (
              <div className="mt-2 space-y-1 pl-3">
                {articles.map((a) => (
                  <Link key={a.path} to={a.path} onClick={onArticleClick}>
                    <div className="block px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-[#1a1a1a]">
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* other links */}
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <div className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive(link.path) ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}`}>
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
