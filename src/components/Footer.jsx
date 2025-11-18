import React from "react";
import { Mail, Phone, MapPin, Code } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-card border-t border-border text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Crime &amp; Carnage</h2>
          <p className="mt-2 text-sm">
            Created by <span className="font-semibold text-foreground">Arpit Dev Mishra</span> — 
            3rd year Mass Communication student.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <Mail size={16} className="inline-block mr-2 -mt-1" />
              <a href="mailto:devarpit04@gmail.com" className="hover:underline text-muted-foreground">
                devarpit04@gmail.com
              </a>
            </p>

            <p>
              <Phone size={16} className="inline-block mr-2 -mt-1" />
              <a href="tel:+917992405363" className="hover:underline text-muted-foreground">
                +91 79924 05363
              </a>
            </p>

            <p>
              <MapPin size={16} className="inline-block mr-2 -mt-1" />
              Ranchi, CUJ, India
            </p>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Crime &amp; Carnage. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Content &amp; Disclaimer</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Crime &amp; Carnage covers true-crime stories and may contain graphic descriptions. 
            Reader discretion advised. If you are sensitive to violent content, please use caution.
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-foreground mb-2">Quick links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/contribute" className="hover:underline">Contribute a tip</a></li>
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Code size={14} />
            <span>Built &amp; maintained by Arpit — CUJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
