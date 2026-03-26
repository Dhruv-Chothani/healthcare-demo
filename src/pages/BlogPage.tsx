import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/constants";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const BlogPage = () => (
  <main>
    <section className="gradient-primary text-primary-foreground section-padding text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container-custom">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Health Blog</h1>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Stay informed with the latest health tips, medical insights, and wellness advice from our experts.</p>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" width={640} height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2.5 py-1 bg-accent rounded-full text-accent-foreground font-medium">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-3 hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default BlogPage;
