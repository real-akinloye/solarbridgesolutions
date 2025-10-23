import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/solar-installation.jpg";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-accent">Solar Bridge Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted partner in renewable energy solutions across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Leading Solar Energy Provider 
              </h2>
              <p className="text-lg text-muted-foreground">
                Solar Bridge Solutions has grown to become one of the most recognized and trusted solar energy brands in Nigeria.
              </p>
              <p className="text-lg text-muted-foreground">
                With a strong focus on sales and after-sales support, we have built a robust network of over 12 service centers across Nigeria—ensuring fast, efficient, and professional assistance for our customers nationwide.
              </p>
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </div>

            <div className="relative hover-scale">
              <img 
                src={aboutImage} 
                alt="Solar Bridge Solutions - Professional solar installation team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values (animated) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-4 animate-fade-in slide-in-bottom anim-delay-100">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To free Nigerian businesses from fuel dependency.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in slide-in-bottom anim-delay-200">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A Nigeria where every business is powered by safe, sustainable energy.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in slide-in-bottom anim-delay-300">
              <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">We stand for:</p>
              <ul className="space-y-3 mt-2">
                {[
                  "Innovation",
                  "Reliability",
                  "Safety",
                  "Affordability",
                  "Sustainability",
                ].map((val, i) => (
                  <li key={val} className={`flex items-center gap-3 text-muted-foreground anim-delay-${i * 75}`}>
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Solar Bridge?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Installation",
                description: "Professional installation by certified technicians ensuring optimal performance"
              },
              {
                title: "Quality Products",
                description: "Premium solar panels, inverters, and batteries with industry-leading warranties"
              },
              {
                title: "After-Sales Support",
                description: "12 service centers nationwide providing fast and reliable maintenance"
              },
              {
                title: "Custom Solutions",
                description: "Tailored solar systems designed to meet your specific energy needs"
              },
              {
                title: "Competitive Pricing",
                description: "Affordable solutions with flexible payment options to fit your budget"
              },
              {
                title: "Proven Track Record",
                description: "Years of experience serving thousands of satisfied customers across Nigeria"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover-scale">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (integrated with Formspree) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-2">Get in touch</h2>
            <p className="text-muted-foreground mb-6">Have a project or question? Send us a message and we'll get back to you.</p>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("message", message);

      const res = await fetch("https://formspree.io/f/mqaygqry", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      {status === "success" && (
        <div className="p-3 bg-green-50 border border-green-200 rounded flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <p className="font-semibold text-green-700">Message sent</p>
            <p className="text-sm text-green-700/90">Thanks for contacting us. We'll reply shortly.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700">
          Something went wrong. Please try again later.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-muted-foreground">Full name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-input text-foreground"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground">Email address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-input text-foreground"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground">Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-input text-foreground min-h-[120px]"
          placeholder="Tell us about your project"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </Button>
        <span className="text-sm text-muted-foreground">We typically reply within 24 hours.</span>
      </div>
    </form>
  );
};

export default About;
