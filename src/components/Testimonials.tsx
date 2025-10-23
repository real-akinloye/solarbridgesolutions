const testimonials = [
  {
    id: 1,
    name: "Mrs. Bisi, Proprietor",
    company: "BrightMinds School",
    text: "Our classrooms are finally free from generator noise. Parents love the fact that we're creating a healthier, cleaner environment.",
    position: "top-left"
  },
  {
    id: 2,
    name: "Tunde",
    company: "Tech Hub Manager",
    text: "Since installing SolarBridge, we've had uninterrupted energy. The productivity boost has been amazing.",
    position: "bottom-left"
  },
  {
    id: 3,
    name: "Mr. Adewale, Manager",
    company: "MedCare Pharmacy",
    text: "SolarBridge helped us cut down fuel expenses drastically. For the first time in 3 years, our operational costs are down, and we're saving for the future. The savings are unbelievable.",
    position: "right"
  }
];

import React, { useEffect, useRef } from 'react';

export const Testimonials = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // trigger pulse on left items
      leftRefs.current.forEach((el, i) => {
        if (!el) return;
        el.classList.add('edge-pulse-active-left');
        setTimeout(() => el.classList.remove('edge-pulse-active-left'), 1100);
      });
      // trigger pulse on right items
      rightRefs.current.forEach((el, i) => {
        if (!el) return;
        el.classList.add('edge-pulse-active-right');
        setTimeout(() => el.classList.remove('edge-pulse-active-right'), 1100);
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const setLeftRef = (el: HTMLDivElement | null, index: number) => {
    if (!el) return;
    leftRefs.current[index] = el;
  };

  const setRightRef = (el: HTMLDivElement | null, index: number) => {
    if (!el) return;
    rightRefs.current[index] = el;
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative orange corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00] transform rotate-45 translate-x-32 -translate-y-32 float rotate-slow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bounce-in text-[#FF8C00]">
            Testimonials
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central phone mockup placeholder - hidden on mobile to fix layout */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-primary rounded-3xl shadow-2xl bounce-in glow anim-delay-300">
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-3xl p-8 flex items-center justify-center">
              <p className="text-primary-foreground text-center font-semibold">Solar Installation</p>
            </div>
          </div>

          {/* Testimonial bubbles */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Left column */}
            <div className="space-y-8 md:space-y-16">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div ref={(el) => setLeftRef(el, index)} key={testimonial.id} className={`slide-in-edge-left fade-in-up anim-delay-${Math.round(index * 250)}`}>
                  <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg max-w-sm hover-scale glow">
                    <p className="text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold text-[#FF8C00]">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="flex items-center">
              {testimonials.slice(2).map((testimonial, index) => (
                <div ref={(el) => setRightRef(el, index)} key={testimonial.id} className={`w-full slide-in-edge-right fade-in-up anim-delay-${Math.round((0.4 + index * 0.2) * 1000)}`}>
                  <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg max-w-sm ml-auto hover-scale glow">
                    <p className="text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-3 text-right">
                    <p className="font-bold text-[#FF8C00]">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
