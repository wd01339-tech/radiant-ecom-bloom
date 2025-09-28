import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-center flex-wrap">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure Shopping</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Free Global Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9/5 Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-glow rounded-lg p-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-xl font-bold text-gradient">
                  Premium Commerce
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Global Marketplace</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for products, brands, or categories..."
                  className="pl-12 pr-4 py-3 bg-secondary border-0 focus:bg-background focus:ring-2 focus:ring-accent/20 rounded-full"
                />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 btn-hero rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Icon - Mobile */}
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="w-5 h-5" />
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" className="hover-glow">
                <User className="w-5 h-5" />
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="hover-glow relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search products..."
                className="pl-12 pr-20 py-3 bg-secondary border-0 rounded-full"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 btn-hero rounded-full px-4 text-sm">
                Search
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10 font-medium"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button className="w-full btn-primary">Sign In / Register</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}