import React from "react";
import { Mail, Phone, MapPin, Code } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0b0b0c] border-t border-[#222] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            S53 News
          </h2>

          <p className="mt-3 text-sm leading-relaxed">
            Created by{" "}
            <span className="font-semibold text-white">
              Shreya Kumari
            </span>{" "}
            — 3rd Year Computer Science Engineering student.
          </p>

          {/* CONTACT */}
          <div className="mt-5 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:shreya2302206@gmail.com"
                className="hover:text-white transition"
              >
                shreya2302206@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} />
              <span>India</span>
            </p>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} S53 News. All rights reserved.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Content & Disclaimer
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            S53 News provides curated updates on technology, politics, and
            current affairs. Content is sourced from trusted platforms and is
            intended for informational purposes only.
          </p>

          {/* QUICK LINKS */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-white mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/politics" className="hover:text-white transition">
                  Politics
                </Link>
              </li>
            </ul>
          </div>

          {/* DEVELOPER TAG */}
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
            <Code size={14} />
            <span>Built & maintained by Shreya Kumari — CSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
