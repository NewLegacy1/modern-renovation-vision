 import { motion } from "framer-motion";
 import { ArrowRight, Star, Shield, Clock } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroImage from "@/assets/hero-kitchen.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="Modern kitchen renovation"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-hero" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
         <div className="max-w-4xl">
           {/* Badge */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
           >
             <Star className="w-4 h-4 text-accent fill-accent" />
             <span className="text-primary-foreground/90 text-sm font-medium">
               20+ Years of Excellence in Halifax
             </span>
           </motion.div>
 
           {/* Headline */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-[1.1] mb-6"
           >
             Transform Your Space
             <br />
             <span className="text-gradient-accent">With Modern Touch</span>
           </motion.h1>
 
           {/* Subtitle */}
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
           >
             Halifax's premier renovation company. From stunning kitchens to luxurious 
             bathrooms, custom decks to complete home transformations — we bring your vision to life.
           </motion.p>
 
           {/* CTAs */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 mb-12"
           >
             <Button variant="accent" size="lg" className="group">
               Get Your Free Estimate
               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button variant="hero" size="lg">
               View Our Projects
             </Button>
           </motion.div>
 
           {/* Trust Indicators */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="flex flex-wrap gap-6 md:gap-10"
           >
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                 <Shield className="w-5 h-5 text-accent" />
               </div>
               <div>
                 <p className="text-primary-foreground font-semibold text-sm">Fully Insured</p>
                 <p className="text-primary-foreground/60 text-xs">Licensed Contractor</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                 <Star className="w-5 h-5 text-accent fill-accent" />
               </div>
               <div>
                 <p className="text-primary-foreground font-semibold text-sm">5-Star Rated</p>
                 <p className="text-primary-foreground/60 text-xs">100+ Happy Clients</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                 <Clock className="w-5 h-5 text-accent" />
               </div>
               <div>
                 <p className="text-primary-foreground font-semibold text-sm">On-Time Delivery</p>
                 <p className="text-primary-foreground/60 text-xs">Accurate Estimates</p>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 0.5 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
           className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
         >
           <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
         </motion.div>
       </motion.div>
     </section>
   );
 };
 
 export default Hero;