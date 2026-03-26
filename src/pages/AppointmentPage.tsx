import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { doctors, services } from "@/data/constants";
import { CheckCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.department || !form.doctor || !form.date || !form.time) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Appointment booked successfully!" });
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  if (submitted) {
    return (
      <main className="section-padding">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="container-custom max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">Appointment Confirmed!</h2>
          <p className="mt-3 text-muted-foreground">Thank you, {form.name}. We'll send a confirmation to {form.email}. Our team will contact you shortly.</p>
          <Button className="mt-6 gradient-primary text-primary-foreground border-0" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "" }); }}>
            Book Another
          </Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main>
      <section className="gradient-primary text-primary-foreground section-padding text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Book an Appointment</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Schedule your visit with our expert doctors. We're here to help.</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 sm:p-8 card-shadow space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">Patient Details</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 234 567 890" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Department *</label>
                <Select onValueChange={(v) => update("department", v)}>
                  <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Doctor *</label>
                <Select onValueChange={(v) => update("doctor", v)}>
                  <SelectTrigger><SelectValue placeholder="Select doctor" /></SelectTrigger>
                  <SelectContent>
                    {doctors.map((d) => <SelectItem key={d.id} value={d.name}>{d.name} — {d.specialization}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Date *</label>
                <Input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Time *</label>
                <Input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message (Optional)</label>
              <Textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Any additional information..." rows={3} />
            </div>

            <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90 font-semibold">
              Confirm Appointment
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default AppointmentPage;
