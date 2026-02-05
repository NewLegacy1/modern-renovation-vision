 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const navItems = [
     { label: "Home", href: "#" },
     { label: "Services", href: "#services" },
     { label: "Projects", href: "#projects" },
     { label: "About", href: "#about" },
     { label: "Contact", href: "#contact" },
   ];
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/95 backdrop-blur-md shadow-soft"
           : "bg-transparent"
       }`}
     >
       <div className="container mx-auto px-4 lg:px-8">
         <div className="flex items-center justify-between h-20">
           {/* Logo */}
           <a href="#" className="flex items-center gap-2">
             <span className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
               isScrolled ? "text-foreground" : "text-primary-foreground"
             }`}>
               Modern<span className="text-gradient-accent">Touch</span>
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-8">
             {navItems.map((item) => (
               <a
                 key={item.label}
                 href={item.href}
                 className={`text-sm font-medium transition-colors hover:text-accent ${
                   isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
                 }`}
               >
                 {item.label}
               </a>
             ))}
           </nav>
 
           {/* CTA Buttons */}
           <div className="hidden lg:flex items-center gap-4">
             <a
               href="tel:9022938498"
               className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                 isScrolled ? "text-foreground" : "text-primary-foreground"
               }`}
             >
               <Phone className="w-4 h-4" />
               (902) 293-8498
             </a>
             <Button variant="accent" size="sm">
               Get Free Estimate
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className={`lg:hidden p-2 transition-colors ${
               isScrolled ? "text-foreground" : "text-primary-foreground"
             }`}
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="lg:hidden bg-background border-t border-border"
           >
             <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
               {navItems.map((item) => (
                 <a
                   key={item.label}
                   href={item.href}
                   className="text-foreground/80 font-medium py-2 hover:text-accent transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {item.label}
                 </a>
               ))}
               <div className="pt-4 border-t border-border flex flex-col gap-3">
                 <a href="tel:9022938498" className="flex items-center gap-2 text-foreground font-medium">
                   <Phone className="w-4 h-4" />
                   (902) 293-8498
                 </a>
                 <Button variant="accent" className="w-full">
                   Get Free Estimate
                 </Button>
               </div>
             </nav>
           </motion.div>
         )}
       </AnimatePresence>
     </header>
   );
 };
 
 export default Header;