import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Phone, Stethoscope, Heart, Bone, Baby, Smile, Siren, ChevronRight, Shield, Clock, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import heroImg from "@/assets/hero-doctors.jpg";
import { doctors, services, testimonials } from "@/data/constants";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = { Stethoscope, Heart, Bone, Baby, Smile, Siren };

const HomePage = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <img src={heroImg} alt="Medical team" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative container-custom section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Trusted by 50,000+ Patients
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              World-class medical care with compassion. Experience the difference with our expert doctors and modern facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/appointment">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "Expert Doctors", sub: "Board Certified" },
              { icon: Clock, label: "24/7 Emergency", sub: "Always Available" },
              { icon: Award, label: "30+ Years", sub: "Of Excellence" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs opacity-70">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading badge="Our Services" title="Comprehensive Healthcare" subtitle="We offer a wide range of medical services to meet all your healthcare needs." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
                  <Link to="/services" className="inline-flex items-center text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">About MedCare</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">A Legacy of Healing & Innovation</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For over three decades, MedCare Hospital has been at the forefront of medical excellence. Our state-of-the-art facilities, combined with a team of world-renowned specialists, ensure that every patient receives the highest standard of care.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[["200+", "Expert Doctors"], ["50K+", "Happy Patients"], ["30+", "Specialties"], ["24/7", "Emergency Care"]].map(([num, label]) => (
                <div key={label} className="bg-muted rounded-xl p-4">
                  <p className="text-2xl font-bold gradient-text">{num}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-6 inline-block">
              <Button className="gradient-primary text-primary-foreground border-0 hover:opacity-90">Learn More About Us</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative">
            <img src={heroImg} alt="Our hospital team" loading="lazy" width={1920} height={1080} className="rounded-2xl card-shadow w-full" />
          </motion.div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading badge="Our Experts" title="Meet Our Top Doctors" subtitle="Highly qualified and experienced specialists dedicated to your well-being." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.slice(0, 4).map((d, i) => <DoctorCard key={d.id} doctor={d} index={i} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/doctors"><Button variant="outline" className="border-primary text-primary hover:bg-accent">View All Doctors</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="What Our Patients Say" />
          <div className="max-w-2xl mx-auto text-center">
            <motion.div key={testimonialIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-2xl p-8 card-shadow">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-lg italic leading-relaxed">"{testimonials[testimonialIdx].text}"</p>
              <p className="mt-4 font-semibold text-foreground">{testimonials[testimonialIdx].name}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-destructive text-destructive-foreground py-6">
        <div className="container-custom px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8 animate-pulse-slow" />
            <div>
              <p className="font-display text-xl font-bold">Emergency? Call Now</p>
              <p className="text-sm opacity-80">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <a href="tel:+1800911000" className="text-2xl font-bold hover:underline">1800-911-000</a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
