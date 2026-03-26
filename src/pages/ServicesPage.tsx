import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/constants";
import { Stethoscope, Heart, Bone, Baby, Smile, Siren, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Stethoscope, Heart, Bone, Baby, Smile, Siren };

const details: Record<string, string[]> = {
  "General Medicine": ["Routine Health Checkups", "Chronic Disease Management", "Preventive Screenings", "Vaccination Programs"],
  "Cardiology": ["ECG & Echocardiography", "Angioplasty & Stenting", "Bypass Surgery", "Heart Failure Management"],
  "Orthopedics": ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Fracture Care"],
  "Pediatrics": ["Newborn Care", "Childhood Vaccinations", "Growth Monitoring", "Pediatric Surgery"],
  "Dental Care": ["Cosmetic Dentistry", "Root Canal", "Orthodontics", "Dental Implants"],
  "Emergency Care": ["Trauma Care", "Critical Care", "Ambulance Service", "Disaster Management"],
};

const ServicesPage = () => (
  <main>
    <section className="gradient-primary text-primary-foreground section-padding text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Comprehensive medical care across multiple specialties with state-of-the-art technology.</p>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-16">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          const bullets = details[s.title] || [];
          return (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/appointment" className="mt-5 inline-block">
                  <Button className="gradient-primary text-primary-foreground border-0 hover:opacity-90">Book Appointment</Button>
                </Link>
              </div>
              <div className={`bg-accent rounded-2xl p-12 flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Icon className="w-32 h-32 text-primary/20" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  </main>
);

export default ServicesPage;
