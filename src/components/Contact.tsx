 import { motion } from "framer-motion";
 import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Contact = () => {
   return (
     <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
           {/* Left - CTA */}
           <div>
             <motion.span
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
             >
               Get Started Today
             </motion.span>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
             >
               Ready to Transform Your Space?
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-primary-foreground/80 text-lg mb-8 leading-relaxed"
             >
               Contact us today for a free, no-obligation estimate. We'll discuss your vision, 
               provide expert recommendations, and deliver a transparent quote with no hidden fees.
             </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
             >
               <Button variant="accent" size="lg" className="group">
                 Request Free Estimate
                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
             </motion.div>
           </div>
 
           {/* Right - Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-6"
           >
             <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                   <Phone className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                   <a href="tel:9022938498" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                     (902) 293-8498
                   </a>
                 </div>
               </div>
             </div>
 
             <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                   <Mail className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                   <a href="mailto:jeff@moderntouch.ca" className="text-primary-foreground/80 hover:text-accent transition-colors">
                     jeff@moderntouch.ca
                   </a>
                 </div>
               </div>
             </div>
 
             <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg mb-1">Service Areas</h3>
                   <p className="text-primary-foreground/80">
                     Halifax, Bedford, Dartmouth, Tantallon, Hammonds Plains & surrounding areas
                   </p>
                 </div>
               </div>
             </div>
 
             <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                   <Clock className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg mb-1">Hours</h3>
                   <p className="text-primary-foreground/80">
                     Monday - Friday: 8:00 AM - 6:00 PM<br />
                     Saturday: By Appointment
                   </p>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;