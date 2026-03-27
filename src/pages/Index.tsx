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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Effects */}
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Medical team" 
            width={1920} 
            height={1080} 
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm transform transition-transform duration-1000" 
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>
        
        {/* Content Container */}
        <div className="relative container-custom section-padding text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                  Trusted by 50,000+ Patients
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white/95 max-w-4xl mx-auto leading-tight mb-6"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your Health,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Our Priority
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed font-light"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              World-class medical care with compassion. Experience the difference with our expert doctors and modern facilities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/appointment">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/60 text-white font-bold px-10 py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: Shield, label: "Expert Doctors", sub: "Board Certified" },
              { icon: Clock, label: "24/7 Emergency", sub: "Always Available" },
              { icon: Award, label: "30+ Years", sub: "Of Excellence" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <motion.div 
                key={label} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-white/90 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
                <p className="font-bold text-lg mb-1">{label}</p>
                <p className="text-white/70 text-sm font-medium">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
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
