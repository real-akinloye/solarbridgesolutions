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

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative orange corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00] transform rotate-45 translate-x-32 -translate-y-32 float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#FF8C00' }}>
            Testimonials
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central phone mockup placeholder - hidden on mobile to fix layout */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-primary rounded-3xl shadow-2xl bounce-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-3xl p-8 flex items-center justify-center">
              <p className="text-primary-foreground text-center font-semibold">Solar Installation</p>
            </div>
          </div>

          {/* Testimonial bubbles */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Left column */}
            <div className="space-y-8 md:space-y-16">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={testimonial.id} className="slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg max-w-sm hover-scale">
                    <p className="text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold" style={{ color: '#FF8C00' }}>{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="flex items-center">
              {testimonials.slice(2).map((testimonial) => (
                <div key={testimonial.id} className="w-full slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg max-w-sm ml-auto hover-scale">
                    <p className="text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-3 text-right">
                    <p className="font-bold" style={{ color: '#FF8C00' }}>{testimonial.name}</p>
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
