import React from "react";
import { Mail, Phone, MapPin, Code } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-card border-t border-border text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">S53 News</h2>

          <p className="mt-2 text-sm">
            Created by{" "}
            <span className="font-semibold text-foreground">
              Shreya Kumari
            </span>{" "}
            — 3rd year Computer Science Engineer.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <Mail size={16} className="inline-block mr-2 -mt-1" />
              <a
                href="mailto:shreya2302206@gmail.com"
                className="hover:underline text-muted-foreground"
              >
                shreya2302206@gmail.com
              </a>
            </p>

            <p>
              <Phone size={16} className="inline-block mr-2 -mt-1" />
              <span className="text-muted-foreground">
                +91 XXXXX XXXXX
              </span>
            </p>

            <p>
              <MapPin size={16} className="inline-block mr-2 -mt-1" />
              India
            </p>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} S53 News. All rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Content & Disclaimer
          </h3>

          <p className="mt-2 text-sm leading-relaxed">
            S53 News delivers real-time updates on technology, politics, and current affairs.
            Information is curated from multiple sources and intended for informational purposes only.
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-foreground mb-2">
              Quick Links
            </h4>

            <ul className="text-sm space-y-1">
              <li>
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/technology" className="hover:underline">Technology</a>
              </li>
              <li>
                <a href="/politics" className="hover:underline">Politics</a>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Code size={14} />
            <span>Built & maintained by Shreya — CSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
