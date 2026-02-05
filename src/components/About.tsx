 import { motion } from "framer-motion";
 import { CheckCircle2 } from "lucide-react";
 
 const features = [
   "20+ years of industry experience",
   "All work done by in-house contractors",
   "Accurate estimates — no hidden fees",
   "Full access to electrical, plumbing, HVAC",
   "Progress photos throughout construction",
   "Serving Halifax, Bedford, Dartmouth & beyond",
 ];
 
 const About = () => {
   return (
     <section id="about" className="py-24 lg:py-32 bg-secondary">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Content */}
           <div>
             <motion.span
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
             >
               Why Choose Us
             </motion.span>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
             >
               Building Trust Through Quality Craftsmanship
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-muted-foreground text-lg mb-8 leading-relaxed"
             >
               Modern Touch Renovations has been transforming homes across Nova Scotia for over 
               two decades. Owner Jeff Densmore and our dedicated team are committed to delivering 
               exceptional results with complete transparency — from your first consultation to 
               the final walkthrough.
             </motion.p>
 
             {/* Features List */}
             <motion.ul
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="grid sm:grid-cols-2 gap-4"
             >
               {features.map((feature, index) => (
                 <motion.li
                   key={feature}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + index * 0.05 }}
                   className="flex items-start gap-3"
                 >
                   <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                   <span className="text-foreground font-medium">{feature}</span>
                 </motion.li>
               ))}
             </motion.ul>
           </div>
 
           {/* Stats Cards */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="grid grid-cols-2 gap-4 lg:gap-6"
           >
             <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft text-center">
               <span className="font-display text-4xl lg:text-5xl font-bold text-gradient-accent">20+</span>
               <p className="text-muted-foreground mt-2 font-medium">Years Experience</p>
             </div>
             <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft text-center">
               <span className="font-display text-4xl lg:text-5xl font-bold text-gradient-accent">500+</span>
               <p className="text-muted-foreground mt-2 font-medium">Projects Completed</p>
             </div>
             <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft text-center">
               <span className="font-display text-4xl lg:text-5xl font-bold text-gradient-accent">100%</span>
               <p className="text-muted-foreground mt-2 font-medium">Client Satisfaction</p>
             </div>
             <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft text-center">
               <span className="font-display text-4xl lg:text-5xl font-bold text-gradient-accent">12+</span>
               <p className="text-muted-foreground mt-2 font-medium">Years in Business</p>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;