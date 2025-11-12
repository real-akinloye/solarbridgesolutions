import React from "react";
import { Navbar } from "@/components/NavbarClean";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import servicesVideo from "@/assets/services-video.mp4";
import heroImage from "@/assets/about-solar.jpg";
import heroImageAlt from "@/assets/hero-solar.jpg";

const Media = () => {
  const items = [
    {
      type: "video",
      title: "Services Overview",
      src: servicesVideo,
      poster: heroImage,
    },
    {
      type: "image",
      title: "Solar Installation",
      src: heroImageAlt,
    },
    {
      type: "image",
      title: "About Solar",
      src: heroImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-12 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Media</h1>
            <p className="text-lg opacity-90 mb-6">Photos and videos showcasing our projects and services.</p>
            <Button asChild>
              <a href="#gallery" className="text-lg">Browse gallery</a>
            </Button>
          </div>
        </div>
      </section>

      <main id="gallery" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((it, idx) => (
              <article key={idx} className="bg-card rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                {it.type === "video" ? (
                  <video
                    controls
                    src={it.src}
                    poster={it.poster}
                    className="w-full h-56 object-cover bg-black"
                  />
                ) : (
                  <img src={it.src} alt={it.title} className="w-full h-56 object-cover" />
                )}

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">High-quality visual highlights from our installations and services.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Media;
