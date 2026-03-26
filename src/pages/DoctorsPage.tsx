import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import { doctors, specializations } from "@/data/constants";

const DoctorsPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? doctors : doctors.filter((d) => d.specialization === filter);

  return (
    <main>
      <section className="gradient-primary text-primary-foreground section-padding text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Our Doctors</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Meet our team of highly qualified and experienced medical professionals.</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {specializations.map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === s ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
                }`}>
                {s}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d, i) => <DoctorCard key={d.id} doctor={d} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No doctors found for this specialization.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default DoctorsPage;
