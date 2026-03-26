import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ badge, title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
