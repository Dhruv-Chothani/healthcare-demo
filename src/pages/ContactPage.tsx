import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, title: "Address", text: "123 Medical Center Drive, Healthcare City, HC 10001" },
  { icon: Phone, title: "Phone", text: "1800-123-456" },
  { icon: Mail, title: "Email", text: "info@medcare.com" },
  { icon: Clock, title: "Hours", text: "Mon – Sat: 8AM – 8PM" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent successfully!" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <main>
      <section className="gradient-primary text-primary-foreground section-padding text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">We're here to help. Reach out to us for any queries or assistance.</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <p className="font-display font-bold text-destructive text-lg">🚑 Emergency: 1800-911-000</p>
              <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden card-shadow h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019531374!2d-122.419!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA4LjQiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Hospital Location"
              />
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 card-shadow space-y-5 h-fit">
            <h2 className="font-display text-xl font-bold text-foreground">Send a Message</h2>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
              <Input value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="How can we help?" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
              <Textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Your message..." rows={5} />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90 font-semibold">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
