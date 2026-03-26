import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const doctors = [
  { id: 1, name: "Dr. James Anderson", specialization: "General Medicine", experience: "15 Years", image: doctor1 },
  { id: 2, name: "Dr. Sarah Mitchell", specialization: "Cardiology", experience: "12 Years", image: doctor2 },
  { id: 3, name: "Dr. Rajesh Kumar", specialization: "Orthopedics", experience: "18 Years", image: doctor3 },
  { id: 4, name: "Dr. Emily Carter", specialization: "Pediatrics", experience: "10 Years", image: doctor4 },
  { id: 5, name: "Dr. Michael Chen", specialization: "Dental Care", experience: "8 Years", image: doctor1 },
  { id: 6, name: "Dr. Priya Sharma", specialization: "Emergency Care", experience: "14 Years", image: doctor2 },
];

export const services = [
  { title: "General Medicine", description: "Comprehensive primary care for all ages, including preventive health and chronic disease management.", icon: "Stethoscope" as const },
  { title: "Cardiology", description: "Advanced heart care with state-of-the-art diagnostics, interventional procedures, and rehabilitation.", icon: "Heart" as const },
  { title: "Orthopedics", description: "Expert bone and joint care including sports medicine, joint replacements, and fracture management.", icon: "Bone" as const },
  { title: "Pediatrics", description: "Specialized healthcare for infants, children, and adolescents with compassionate pediatricians.", icon: "Baby" as const },
  { title: "Dental Care", description: "Complete dental services from routine cleanings to advanced cosmetic and restorative dentistry.", icon: "Smile" as const },
  { title: "Emergency Care", description: "24/7 emergency department staffed with experienced physicians ready for any medical emergency.", icon: "Siren" as const },
];

export const testimonials = [
  { name: "Anita Desai", text: "The care I received at MedCare was exceptional. The doctors were attentive and the staff made me feel at home.", rating: 5 },
  { name: "Robert Williams", text: "From diagnosis to treatment, everything was seamless. I highly recommend MedCare for cardiac care.", rating: 5 },
  { name: "Fatima Al-Hassan", text: "The pediatric team took wonderful care of my daughter. They were patient, kind, and thorough.", rating: 5 },
  { name: "David Chen", text: "World-class orthopedic surgery. I was back on my feet in no time thanks to Dr. Kumar's expertise.", rating: 5 },
];

export const blogPosts = [
  { id: 1, title: "10 Tips for a Healthy Heart", excerpt: "Learn simple lifestyle changes that can significantly improve your cardiovascular health and longevity.", image: blog1, date: "March 15, 2026", category: "Cardiology" },
  { id: 2, title: "Understanding Heart Disease", excerpt: "A comprehensive guide to recognizing symptoms, risk factors, and prevention strategies for heart disease.", image: blog2, date: "March 10, 2026", category: "Cardiology" },
  { id: 3, title: "Mental Wellness in Modern Life", excerpt: "Practical strategies for managing stress, anxiety, and maintaining mental well-being in today's fast-paced world.", image: blog3, date: "March 5, 2026", category: "Wellness" },
];

export const specializations = ["All", "General Medicine", "Cardiology", "Orthopedics", "Pediatrics", "Dental Care", "Emergency Care"];
