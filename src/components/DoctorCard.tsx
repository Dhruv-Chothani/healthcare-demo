import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  doctor: { id: number; name: string; specialization: string; experience: string; image: string };
  index: number;
}

const DoctorCard = ({ doctor, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={doctor.image}
        alt={doctor.name}
        loading="lazy"
        width={512}
        height={640}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display text-lg font-bold text-foreground">{doctor.name}</h3>
      <p className="text-sm text-primary font-medium">{doctor.specialization}</p>
      <p className="text-xs text-muted-foreground mt-1">{doctor.experience} Experience</p>
      <Link to="/appointment" className="mt-3 block">
        <Button size="sm" className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90">
          Book Appointment
        </Button>
      </Link>
    </div>
  </motion.div>
);

export default DoctorCard;
