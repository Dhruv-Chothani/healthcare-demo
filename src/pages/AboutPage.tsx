import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Target, Eye, Award, Building2, Microscope, HeartPulse } from "lucide-react";
import hospitalImg from "@/assets/hospital-building.jpg";
import heroImg from "@/assets/hero-doctors.jpg";

const achievements = [
  "NABH Accredited Hospital",
  "Best Multi-Specialty Hospital Award 2025",
  "ISO 9001:2015 Certified",
  "Center of Excellence for Cardiac Sciences",
];

const infrastructure = [
  { icon: HeartPulse, title: "Advanced ICU", desc: "50-bed ICU with latest monitoring systems" },
  { icon: Microscope, title: "Diagnostic Labs", desc: "Fully automated pathology & radiology" },
  { icon: Building2, title: "Modern OTs", desc: "12 modular operation theatres" },
];

const AboutPage = () => (
  <main>
    <section className="gradient-primary text-primary-foreground section-padding text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">About MedCare</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Three decades of excellence in healthcare, serving communities with compassion and cutting-edge medicine.</p>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          src={hospitalImg} alt="MedCare Hospital" loading="lazy" width={1280} height={720} className="rounded-2xl card-shadow w-full" />
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in 1995, MedCare Hospital has grown from a small community clinic into one of the region's most trusted multi-specialty hospitals. With over 200 doctors across 30+ specialties, we combine the warmth of personalized care with the power of advanced medical technology.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our commitment to patient-centered care, continuous innovation, and medical education has earned us numerous awards and the trust of over 50,000 patients annually.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-custom grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To provide accessible, affordable, and high-quality healthcare to every individual, leveraging the latest in medical science and technology." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted healthcare institution, recognized globally for clinical excellence, innovation, and compassionate patient care." },
        ].map(({ icon: Icon, title, text }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 card-shadow">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading badge="Infrastructure" title="World-Class Facilities" subtitle="Equipped with the latest medical technology for accurate diagnosis and effective treatment." />
        <div className="grid sm:grid-cols-3 gap-6">
          {infrastructure.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow text-center">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading badge="Recognition" title="Awards & Achievements" />
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <motion.li key={a} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 card-shadow">
                <Award className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-foreground">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          src={heroImg} alt="Our team" loading="lazy" width={1920} height={1080} className="rounded-2xl card-shadow w-full" />
      </div>
    </section>
  </main>
);

export default AboutPage;
