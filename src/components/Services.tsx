 import { motion } from "framer-motion";
 import { ChefHat, Bath, TreeDeciduous, Home, Hammer, Snowflake } from "lucide-react";
 import bathroomImage from "@/assets/bathroom-reno.jpg";
 import deckImage from "@/assets/deck-outdoor.jpg";
 import basementImage from "@/assets/basement-reno.jpg";
 
 const services = [
   {
     icon: ChefHat,
     title: "Kitchen Renovations",
     description: "Custom cabinetry, marble countertops, and modern appliances. Create the heart of your home.",
     image: null,
   },
   {
     icon: Bath,
     title: "Bathroom Remodels",
     description: "Spa-like retreats with premium fixtures, heated floors, and accessibility options.",
     image: bathroomImage,
   },
   {
     icon: TreeDeciduous,
     title: "Decks & Outdoor",
     description: "Custom decks, pergolas, patios, and fencing to extend your living space.",
     image: deckImage,
   },
   {
     icon: Home,
     title: "Basement Finishing",
     description: "Transform unused space into entertainment rooms, home offices, or rental suites.",
     image: basementImage,
   },
   {
     icon: Hammer,
     title: "New Construction",
     description: "From additions to complete new home builds, we handle projects of any scale.",
     image: null,
   },
   {
     icon: Snowflake,
     title: "Synthetic Ice Rinks",
     description: "Indoor and outdoor synthetic ice installations with custom boards and glass.",
     image: null,
   },
 ];
 
 const Services = () => {
   return (
     <section id="services" className="py-24 lg:py-32 bg-background">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.span
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block"
           >
             Our Expertise
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
           >
             Comprehensive Renovation Services
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg"
           >
             From concept to completion, our in-house team of skilled craftsmen handles every 
             aspect of your renovation with precision and care.
           </motion.p>
         </div>
 
         {/* Services Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
             >
               {/* Image or Gradient Background */}
               {service.image ? (
                 <div className="h-48 overflow-hidden">
                   <img
                     src={service.image}
                     alt={service.title}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
               ) : (
                 <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                   <service.icon className="w-16 h-16 text-accent/60" />
                 </div>
               )}
 
               {/* Content */}
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                     <service.icon className="w-5 h-5 text-accent" />
                   </div>
                   <h3 className="font-display text-xl font-semibold text-foreground">
                     {service.title}
                   </h3>
                 </div>
                 <p className="text-muted-foreground leading-relaxed">
                   {service.description}
                 </p>
               </div>
 
               {/* Hover Accent */}
               <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;