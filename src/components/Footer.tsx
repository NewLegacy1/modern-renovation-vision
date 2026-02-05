 import { Phone, Mail, Facebook, Instagram } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-foreground text-background py-12 lg:py-16">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
           {/* Brand */}
           <div className="lg:col-span-2">
             <span className="font-display text-2xl font-semibold text-background mb-4 block">
               Modern<span className="text-accent">Touch</span>
             </span>
             <p className="text-background/70 max-w-md leading-relaxed">
               Halifax's trusted renovation company for over 20 years. We bring your vision 
               to life with quality craftsmanship and transparent communication.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-semibold text-background mb-4">Services</h4>
             <ul className="space-y-2">
               <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">Kitchen Renovations</a></li>
               <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">Bathroom Remodels</a></li>
               <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">Decks & Outdoor</a></li>
               <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">Basement Finishing</a></li>
               <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">New Construction</a></li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-semibold text-background mb-4">Contact</h4>
             <ul className="space-y-3">
               <li>
                 <a href="tel:9022938498" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                   <Phone className="w-4 h-4" />
                   (902) 293-8498
                 </a>
               </li>
               <li>
                 <a href="mailto:jeff@moderntouch.ca" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                   <Mail className="w-4 h-4" />
                   jeff@moderntouch.ca
                 </a>
               </li>
             </ul>
             <div className="flex gap-4 mt-6">
               <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
             </div>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-background/60 text-sm">
             © {new Date().getFullYear()} Modern Touch Renovations Inc. All rights reserved.
           </p>
           <div className="flex gap-6 text-sm">
             <a href="#" className="text-background/60 hover:text-accent transition-colors">Privacy Policy</a>
             <a href="#" className="text-background/60 hover:text-accent transition-colors">Terms of Service</a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;