import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [articlesOpen, setArticlesOpen] = useState(false); // mobile articles submenu
  const [desktopArticlesOpen, setDesktopArticlesOpen] = useState(false); // desktop click toggle
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serial Killers", path: "/serial-killers" },
    { name: "Cold Cases", path: "/cold-cases" },
    { name: "Court Judgments", path: "/court-judgments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Properly ordered articles as requested
  const articles = [
    { name: "M. Jaishankar", path: "/article/jaishankar" },
    { name: "Devendra Sharma", path: "/article/devendra-sharma" },
    { name: "John Wayne", path: "/article/john-wayne" },
    { name: "Chandrakant Jha", path: "/article/chandrakant-jha" },
    { name: "Dahmer", path: "/article/dahmer" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const isArticlesActive = () =>
    location.pathname.startsWith("/article") || location.pathname.startsWith("/case");

  // public path to logo (place logo.jpg in public/)
  const logoSrc = (process.env.PUBLIC_URL || "") + "/logo.jpg"; // fallback to /logo.jpg

  return (
    <nav className="sticky top-0 z-50 bg-[#111] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          {!logoError ? (
            <img
              src={logoSrc}
              alt="Crime & Carnage"
              className="w-9 h-9 rounded object-cover"
              onError={() => setLogoError(true)}
              aria-hidden={false}
            />
          ) : (
            // fallback — simple styled initials if image fails
            <div className="w-9 h-9 rounded bg-[#a00000] flex items-center justify-center text-white font-bold">
              CC
            </div>
          )}
          <span className="text-white font-bold text-lg">Crime &amp; Carnage</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.slice(0, 3).map((link) => (
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

          {/* ARTICLES - click to open/close (desktop). stays open until user clicks one of the article links */}
          <div className="relative">
            <button
              onClick={() => setDesktopArticlesOpen((s) => !s)}
              aria-expanded={desktopArticlesOpen}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200
                ${isArticlesActive() ? "bg-[#a00000] text-white shadow-md" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}
              `}
            >
              Articles
              <ChevronDown size={14} className="text-gray-200" />
            </button>

            {/* desktop dropdown menu — opens via click; will NOT auto-close on mouseleave */}
            {desktopArticlesOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#0f0f10] border border-[#222] rounded-md shadow-lg overflow-hidden">
                {articles.map((a) => (
                  <Link
                    key={a.path}
                    to={a.path}
                    onClick={() => {
                      // close dropdown only when clicking an article link
                      setDesktopArticlesOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    <div
                      className={`px-4 py-2 text-sm ${
                        isActive(a.path) ? "bg-[#a00000] text-white" : "text-gray-200 hover:bg-[#151515]"
                      }`}
                    >
                      {a.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => (
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
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-4 py-3 space-y-2">
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

          {/* Mobile Articles accordion */}
          <div>
            <button
              onClick={() => setArticlesOpen(!articlesOpen)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium
                ${isArticlesActive() ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"}
              `}
            >
              <span>Articles</span>
              <ChevronDown size={16} className={`${articlesOpen ? "rotate-180 transform" : ""}`} />
            </button>

            {articlesOpen && (
              <div className="mt-2 space-y-1 pl-3">
                {articles.map((a) => (
                  <Link
                    key={a.path}
                    to={a.path}
                    onClick={() => {
                      setIsOpen(false);
                      setArticlesOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(a.path) ? "bg-[#a00000] text-white" : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
