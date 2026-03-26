import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <span className="font-bold text-lg">M</span>
            </div>
            <span className="font-display text-xl font-bold">MedCare</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Providing world-class healthcare services with compassion, innovation, and excellence since 1995.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            {["About Us", "Services", "Doctors", "Appointment", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`} className="hover:opacity-100 transition-opacity">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            {["General Medicine", "Cardiology", "Orthopedics", "Pediatrics", "Dental Care", "Emergency Care"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:opacity-100 transition-opacity">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 123 Medical Center Drive, Healthcare City, HC 10001</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> 1800-123-456</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@medcare.com</li>
          </ul>
          <div className="mt-4 p-3 rounded-lg bg-destructive/20 border border-destructive/30">
            <p className="text-xs font-semibold">🚑 Emergency: 1800-911-000</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5 text-center text-xs opacity-50">
      © {new Date().getFullYear()} MedCare Hospital. All rights reserved.
    </div>
  </footer>
);

export default Footer;
