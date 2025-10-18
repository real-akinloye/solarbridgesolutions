import servicesImage from "@/assets/services-showcase.png";

export const ServicesShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative hover-scale">
          <img 
            src={servicesImage} 
            alt="Solar Bridge Solutions - Comprehensive solar energy services showcase"
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
