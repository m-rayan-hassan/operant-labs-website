"use client";

import { useState } from "react";
import { phoneCountries } from "../lib/phoneCountries";
import { 
  Mail, Phone, Clock3, MapPin, MessageCircle, 
  Send, CheckCircle2, AlertCircle 
} from "lucide-react";
import { motion } from "motion/react";
import WorldMap from "../components/WorldMap";

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(
    phoneCountries.find((c) => c.code === "PK") ?? phoneCountries[0],
  );
  const [phone, setPhone] = useState("");
  
  // Consolidated Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handlePhoneChange = (value: string) => {
    // Clear error message if user starts fixing their phone number
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setStatusMessage("");
    }
    const digitsOnly = value.replace(/\D/g, "");
    setPhone(digitsOnly.slice(0, selectedCountry.length));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status on new submission attempt
    setSubmitStatus("idle");
    setStatusMessage("");

    if (phone && phone.length !== selectedCountry.length) {
      setSubmitStatus("error");
      setStatusMessage(`Please enter a valid ${selectedCountry.label} phone number with exactly ${selectedCountry.length} digits.`);
      return;
    }

    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // REPLACE THIS with your actual Web3Forms Access Key for info@operantlabs.io
    formData.append("access_key", "e09ca89b-6aed-4332-8d80-7d1e18da3776");
    formData.append("subject", "New Lead from Operant Labs Website");
    formData.append("from_name", "Operant Labs Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        
        // Clean up the form
        form.reset(); 
        setPhone(""); 
        
        // Auto-hide the success message after 5 seconds so they can submit again if they want
        setTimeout(() => {
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 5000);

      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow pt-24 pb-0 relative z-10">
      <div className="min-h-screen pt-32 pb-8">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="section-number justify-center mb-6">Transformation &amp; Engineering</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl italic mb-6 leading-tight tracking-tight">
              Ready to Scale Your{" "}
              <span className="text-electric-cyan">AI Capabilities?</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Partner with Operant Labs to assess AI opportunities, design scalable architectures, and deploy specialized engineering teams to turn your transformation strategies into production systems.
            </p>
          </motion.div>
        </section>

        {/* 2. Main Contact Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20">
            
            {/* Left Column: Contact Info & Offices */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col space-y-12"
            >
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-4">
                  Let's Build the Future Together
                </h2>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  Every successful transformation starts with a strategic conversation. Whether you're exploring AI readiness, planning complex enterprise architectures, or scaling forward-deployed engineering teams, our experts are ready to assist.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Address", value: "info@operantlabs.io", href: "mailto:info@operantlabs.io" },
                  { icon: Phone, label: "Cell Number", value: "+92 310 0004256", href: "tel:+923100004256" },
                  { icon: Phone, label: "Phone Support", value: "+44 7723 346951", href: "tel:+447723346951" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+92 310 0004256", href: "https://wa.me/923100004256" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+44 7723 346951", href: "https://wa.me/447723346951" },
                  { icon: Clock3, label: "Business Hours", value: "Monday to Friday, 9:00 AM – 6:00 PM", href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-surface-dim border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-electric-cyan/50 group-hover:bg-electric-cyan/5 transition-all duration-300 shadow-sm">
                      <item.icon size={18} className="text-foreground group-hover:text-electric-cyan transition-colors" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[11px] uppercase tracking-widest text-on-surface-variant font-semibold mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} target={item.label === "WhatsApp" ? "_blank" : "_self"} rel="noreferrer" className="text-sm text-foreground hover:text-electric-cyan transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-widest text-on-surface-variant font-semibold mb-4">Our Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 xl:grid-cols-2">
                  <div className="glass-card p-5 bg-surface/30 hover:bg-surface/60 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-electric-cyan" />
                      <span className="text-[12px] font-bold text-foreground uppercase tracking-wider">UK Office</span>
                    </div>
                    <p className="text-[13px] text-on-surface-variant font-light leading-relaxed">
                      Office 1212, 182 to 184 High Street, North Area 1/1, East Ham, London, United Kingdom
                    </p>
                  </div>
                  <div className="glass-card p-5 bg-surface/30 hover:bg-surface/60 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-electric-cyan" />
                      <span className="text-[12px] font-bold text-foreground uppercase tracking-wider">Pakistan Office</span>
                    </div>
                    <p className="text-[13px] text-on-surface-variant font-light leading-relaxed">
                      Gate No. 4, National Aerospace Science and Technology Park, Industrial Innovative Enclave, Alpha 17, Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Glassmorphic Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-foreground mb-8">
                    Request a Technical Assessment
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* NEW: Elegant Inline Success or Error Message */}
                    {submitStatus !== "idle" && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl flex items-start gap-3 text-sm border ${
                          submitStatus === "success" 
                            ? "bg-electric-cyan/10 border-electric-cyan/30 text-electric-cyan" 
                            : "bg-red-500/10 border-red-500/30 text-red-400"
                        }`}
                      >
                        {submitStatus === "success" ? (
                          <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        )}
                        <p>{statusMessage}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">First Name *</label>
                        <input type="text" name="First Name" required className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Last Name *</label>
                        <input type="text" name="Last Name" required className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Organization *</label>
                        <input type="text" name="Organization" required className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Role / Title</label>
                        <input type="text" name="Role" className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all" placeholder="CTO, VP of Engineering..." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Corporate Email *</label>
                      <input type="email" name="Email" required className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all" placeholder="johndoe@company.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <select 
                          name="Country Code"
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const country = phoneCountries.find((c) => c.code === e.target.value);
                            if (country) {
                              setSelectedCountry(country);
                              setPhone((prev) => prev.slice(0, country.length));
                              setSubmitStatus("idle"); // Clear any previous errors on change
                            }
                          }}
                          className="sm:w-64 w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all appearance-none cursor-pointer"
                        >
                          {phoneCountries.map((country) => (
                            <option key={country.code} value={country.code} className="bg-background text-foreground">
                              {country.label} ({country.dial})
                            </option>
                          ))}
                        </select>

                        <input
                          type="tel"
                          name="Phone Number"
                          inputMode="numeric"
                          value={phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          maxLength={selectedCountry.length}
                          className={`flex-1 bg-surface-dim border rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-1 transition-all ${
                            submitStatus === "error" && statusMessage.includes("phone") 
                              ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" 
                              : "border-border-subtle focus:border-electric-cyan focus:ring-electric-cyan"
                          }`}
                          placeholder={`Enter ${selectedCountry.length}-digit number`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Engagement Type</label>
                        <select name="Engagement Type" className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all appearance-none cursor-pointer">
                          <option className="bg-background text-foreground">AI Strategy &amp; Assessment</option>
                          <option className="bg-background text-foreground">Technical AI Due Diligence</option>
                          <option className="bg-background text-foreground">Solution Architecture &amp; Pilot</option>
                          <option className="bg-background text-foreground">Forward-Deployed Engineering</option>
                          <option className="bg-background text-foreground">Custom AI Systems</option>
                          <option className="bg-background text-foreground">Managed AI Operations</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">AI Maturity Level</label>
                        <select name="AI Maturity Level" className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all appearance-none cursor-pointer">
                          <option className="bg-background text-foreground">Exploring opportunities</option>
                          <option className="bg-background text-foreground">Have isolated proofs-of-concept</option>
                          <option className="bg-background text-foreground">Scaling existing AI solutions</option>
                          <option className="bg-background text-foreground">Enterprise-wide AI deployment</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Expected Timeline</label>
                        <select name="Expected Timeline" className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all appearance-none cursor-pointer">
                          <option className="bg-background text-foreground">Immediate (1-2 months)</option>
                          <option className="bg-background text-foreground">Short-term (3-6 months)</option>
                          <option className="bg-background text-foreground">Long-term (6+ months)</option>
                          <option className="bg-background text-foreground">Just exploring</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">Project Summary (Optional)</label>
                      <textarea
                        name="Project Summary"
                        rows={3}
                        className="w-full bg-surface-dim border border-border-subtle rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all resize-none"
                        placeholder="Describe your current systems, constraints, and target outcomes..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-solid w-full py-4 rounded-xl flex items-center justify-center gap-2 text-[12px] font-semibold tracking-widest uppercase shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Discuss an AI Transformation"} 
                      {!isSubmitting && <Send size={16} />}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <WorldMap />
      </div>
    </main>
  );
}