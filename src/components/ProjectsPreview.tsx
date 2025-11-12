import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import waBattery1 from "@/assets/WhatsApp Image 2025-11-01 at 8.42.57 AM (1).jpeg";
import waBattery3 from "@/assets/WhatsApp Image 2025-11-01 at 8.42.57 AM (3).jpeg";
import proj4 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.28 PM.jpeg";

export const ProjectsPreview = () => {
  const thumbs = [waBattery1, waBattery3, proj4];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Projects <span className="text-accent">Completed</span>
          </h2>
          <p className="text-muted-foreground text-lg">A glimpse of our recent installations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {thumbs.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-xl bg-secondary hover-scale fade-in-up anim-delay-${i * 100}`}>
              <img src={src} alt={`Project ${i + 1}`} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up anim-delay-400">
          <Link to="/projects-completed">
            <Button size="lg" variant="default" className="hover-scale glow">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;



