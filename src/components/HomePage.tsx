import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, Shield, Truck, Globe, ArrowRight, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const categories = [
    { name: "Electronics", image: "🔌", count: "2,847 products" },
    { name: "Fashion", image: "👕", count: "5,234 products" },
    { name: "Home & Garden", image: "🏠", count: "3,156 products" },
    { name: "Sports", image: "⚽", count: "1,892 products" },
    { name: "Beauty", image: "💄", count: "2,456 products" },
    { name: "Books", image: "📚", count: "4,123 products" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$199.99",
      originalPrice: "$299.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 1247,
      badge: "Best Seller",
      discount: "-33%"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$249.99",
      originalPrice: "$349.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 892,
      badge: "New Arrival",
      discount: "-29%"
    },
    {
      id: 3,
      name: "Eco-Friendly Backpack",
      price: "$89.99",
      originalPrice: "$129.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 634,
      badge: "Eco-Friendly",
      discount: "-31%"
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: "$599.99",
      originalPrice: "$799.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 423,
      badge: "Pro Choice",
      discount: "-25%"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Outstanding quality and fast shipping! The products exceeded my expectations.",
      avatar: "/api/placeholder/64/64",
      verified: true
    },
    {
      name: "Miguel Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      comment: "Excellent customer service and authentic products. Highly recommend!",
      avatar: "/api/placeholder/64/64",
      verified: true
    },
    {
      name: "Emma Chen",
      location: "Singapore",
      rating: 5,
      comment: "Best shopping experience online. Secure payments and reliable delivery.",
      avatar: "/api/placeholder/64/64",
      verified: true
    },
  ];

  const trustStats = [
    { number: "2M+", label: "Happy Customers" },
    { number: "50K+", label: "Products" },
    { number: "180+", label: "Countries" },
    { number: "4.9/5", label: "Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-card">
        <div className="container mx-auto px-4">
          <HeroSlider />
          
          {/* Hero Search */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/70 w-6 h-6" />
              <Input
                placeholder="Search for products, brands, or categories..."
                className="pl-14 pr-32 py-4 text-lg bg-white text-gray-900 border-0 rounded-xl"
              />
              <Link to="/shop">
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-hero">
                  Search Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Link to="/shop">
              <Button className="btn-hero text-lg px-8 py-4">
                Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" className="text-primary border-primary/30 hover:bg-primary/10 text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium products across various categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="card-premium text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{category.image}</div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/shop">
              <Button className="btn-secondary">
                View All Categories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Hand-picked premium products with verified quality
              </p>
            </div>
            <Link to="/shop">
              <Button className="btn-primary mt-4 md:mt-0">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-product group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                    {product.discount}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-accent">
                      {product.price}
                    </span>
                    <span className="text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <Link to="/product/1">
                    <Button className="w-full btn-primary">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join millions of satisfied customers worldwide who trust our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Check className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews">
              <Button className="btn-secondary">
                Read All Reviews <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Shop with Complete Confidence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                <p className="text-muted-foreground">
                  Bank-level security with SSL encryption and fraud protection
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free worldwide shipping with tracking and insurance included
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Serving customers in 180+ countries with local support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Updated with Premium Deals
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, new product announcements, and shopping tips delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            Unsubscribe anytime. No spam, we promise.
          </p>
        </div>
      </section>
    </div>
  );
}