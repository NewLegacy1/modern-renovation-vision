 import { motion } from "framer-motion";
 import { Star, Quote } from "lucide-react";
 
 const testimonials = [
   {
     name: "Sarah Mitchell",
     location: "Halifax, NS",
     rating: 5,
     text: "Modern Touch completely transformed our dated kitchen into a stunning modern space. Jeff and his team were professional, punctual, and the quality exceeded our expectations. Highly recommend!",
   },
   {
     name: "David Chen",
     location: "Bedford, NS",
     rating: 5,
     text: "We hired them for a complete basement renovation and couldn't be happier. The communication was excellent throughout, and they finished on time and on budget. Our new entertainment room is perfect.",
   },
   {
     name: "Jennifer Thompson",
     location: "Dartmouth, NS",
     rating: 5,
     text: "The bathroom renovation was exactly what we envisioned. The attention to detail and craftsmanship is outstanding. They kept us informed every step of the way with progress photos.",
   },
 ];
 
 const Testimonials = () => {
   return (
     <section id="testimonials" className="py-24 lg:py-32 bg-background">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.span
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
           >
             Client Reviews
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
           >
             What Our Clients Say
           </motion.h2>
         </div>
 
         {/* Testimonials Grid */}
         <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={testimonial.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-card rounded-2xl p-8 shadow-soft relative"
             >
               {/* Quote Icon */}
               <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
 
               {/* Stars */}
               <div className="flex gap-1 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                 ))}
               </div>
 
               {/* Review Text */}
               <p className="text-foreground leading-relaxed mb-6">
                 "{testimonial.text}"
               </p>
 
               {/* Author */}
               <div className="border-t border-border pt-4">
                 <p className="font-semibold text-foreground">{testimonial.name}</p>
                 <p className="text-muted-foreground text-sm">{testimonial.location}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;