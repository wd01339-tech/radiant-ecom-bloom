import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "Electronics", href: "/category/electronics" },
      { name: "Fashion", href: "/category/fashion" },
      { name: "Home & Garden", href: "/category/home-garden" },
      { name: "Sports & Outdoor", href: "/category/sports" },
      { name: "Beauty & Health", href: "/category/beauty" },
      { name: "Books & Media", href: "/category/books" }
    ],
    customer: [
      { name: "My Account", href: "/account" },
      { name: "Order Tracking", href: "/orders" },
      { name: "Wishlist", href: "/wishlist" },
      { name: "Customer Reviews", href: "/reviews" },
      { name: "Help Center", href: "/help" },
      { name: "Return Policy", href: "/returns" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press & Media", href: "/press" },
      { name: "Investor Relations", href: "/investors" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Partner With Us", href: "/partners" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR Compliance", href: "/gdpr" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "Site Map", href: "/sitemap" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-2xl">P</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold">Premium Commerce</h2>
                <p className="text-sm text-primary-foreground/80">Global Marketplace</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Discover premium products from trusted sellers worldwide. We're committed to providing 
              secure, reliable shopping experiences with verified quality and fast global shipping.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">+1 (555) PREMIUM</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">support@premium-commerce.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm">Global Headquarters, New York</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 text-primary-foreground hover:text-accent transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {footerLinks.customer.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges & Features */}
      <div className="border-t border-primary-light">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium">Secure Shopping</span>
              <span className="text-xs text-primary-foreground/70">SSL Protected</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium">Free Shipping</span>
              <span className="text-xs text-primary-foreground/70">Orders Over $50</span>
            </div>
            <div className="flex flex-col items-center">
              <RefreshCw className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium">Easy Returns</span>
              <span className="text-xs text-primary-foreground/70">30-Day Policy</span>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium">Secure Payment</span>
              <span className="text-xs text-primary-foreground/70">Multiple Options</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-primary-light bg-primary-light/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to get special offers, exclusive deals, and product updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/80">
                © {currentYear} Premium Commerce. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">We Accept:</span>
              <div className="flex items-center gap-3">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white/10 px-3 py-1 rounded text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}