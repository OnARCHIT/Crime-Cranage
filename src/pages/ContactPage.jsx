// src/pages/ContactPage.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Copy } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const leftRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(leftRef.current, { opacity: 10, x: -80, duration: 0.9, ease: "power3.out" });
    gsap.from(formRef.current, { opacity: 10, x: 80, duration: 0.9, ease: "power3.out", delay: 0.12 });
  }, []);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill required fields (name, email, message).");
      return;
    }

    setSending(true);
    try {
      // TODO: send to backend API here. This is a UI-only placeholder.
      await new Promise((r) => setTimeout(r, 900));
      toast.success("Message sent — we will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  };

  const copyToClipboard = async (text, label = "Copied") => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} to clipboard`);
    } catch {
      toast.error("Unable to copy");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO / HEADER */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.80), rgba(0,0,0,0.92)), url('/Arpit.png')",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Badge className="bg-[hsl(var(--primary))] text-primary-foreground mb-4 px-4 py-1">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a story tip, feedback or inquiry? Reach the editorial desk — your lead could be the next big
            investigation.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Info / author */}
          <div ref={leftRef} className="space-y-8">
            {/* Editorial Team / Banner */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-56 sm:h-64 md:h-48 lg:h-56">
                <img
                  src="/Arpit.png"
                  alt="Editorial team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardHeader className="-mt-20 relative z-10 px-6 pb-0">
                <CardTitle className="text-2xl md:text-3xl text-foreground font-bold">
                  Editorial Team
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Crime Journalists & Investigators
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-4 text-muted-foreground">
                <p>
                  Our team consists of experienced crime reporters, forensic analysts and legal researchers
                  dedicated to accurate, well-sourced investigative stories from India and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground font-bold">Contact Information</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Email row */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">devarpit04@gmail.com</p>
                    <div className="mt-2 flex gap-2">
                      <a
                        className="text-sm px-3 py-1 rounded-md bg-muted/10 hover:bg-muted transition"
                        href="mailto:devarpit04@gmail.com"
                      >
                        Email Now
                      </a>
                      <button
                        onClick={() => copyToClipboard("devarpit04@gmail.com", "Email")}
                        className="text-sm px-3 py-1 rounded-md bg-muted/10 hover:bg-muted transition inline-flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" /> Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone row */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 79924 05363</p>
                    <div className="mt-2 flex gap-2">
                      <a className="text-sm px-3 py-1 rounded-md bg-muted/10 hover:bg-muted transition" href="tel:+917992405363">
                        Call
                      </a>
                      <button
                        onClick={() => copyToClipboard("+91 79924 05363", "Phone")}
                        className="text-sm px-3 py-1 rounded-md bg-muted/10 hover:bg-muted transition inline-flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" /> Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Office row */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold">Office</p>
                    <p className="text-sm text-muted-foreground">Manatu, Ranchi, Jharkhand — 835222</p>
                    <p className="text-sm text-muted-foreground mt-1">Open Mon–Fri, 10am–6pm IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <div className="rounded-lg border border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/6 p-4">
              <p className="font-semibold text-foreground mb-1">⏱ Quick Response Time</p>
              <p className="text-sm text-muted-foreground">
                We typically reply within 24–48 hours. For urgent tips, put <strong>URGENT</strong> in the subject.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div ref={formRef}>
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-foreground font-bold">Send Us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill in the form below and we will respond as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0b0b0c] text-foreground placeholder:text-muted-foreground border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0b0b0c] text-foreground placeholder:text-muted-foreground border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-[#0b0b0c] text-foreground placeholder:text-muted-foreground border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#0b0b0c] text-foreground placeholder:text-muted-foreground border-border"
                    />
                  </div>

                  {/* optional file upload (client-only) */}
                  <div>
                    <Label className="text-foreground">Attachment (optional)</Label>
                    <input
                      type="file"
                      accept=".png,.jpg,.pdf,.docx"
                      className="w-full text-sm text-muted-foreground mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB. Backend required to receive files.</p>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-[hsl(var(--primary))] hover:bg-red-700 text-primary-foreground"
                      disabled={sending}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
