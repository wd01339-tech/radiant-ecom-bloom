import { useState } from "react";
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function Shop() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Electronics", "Fashion", "Home & Garden", "Sports", "Beauty", "Books"
  ];

  const brands = [
    "TechPro", "StyleCraft", "HomeEssentials", "FitGear", "GlowUp", "BookWorm"
  ];

  const priceRanges = [
    { label: "Under $25", value: "0-25" },
    { label: "$25 - $50", value: "25-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $200", value: "100-200" },
    { label: "Over $200", value: "200+" }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$199.99",
      originalPrice: "$299.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 1247,
      category: "Electronics",
      brand: "TechPro",
      badges: ["Best Seller"],
      discount: "-33%",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$249.99",
      originalPrice: "$349.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 892,
      category: "Electronics", 
      brand: "FitGear",
      badges: ["New Arrival"],
      discount: "-29%",
      inStock: true
    },
    {
      id: 3,
      name: "Eco-Friendly Backpack",
      price: "$89.99",
      originalPrice: "$129.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 634,
      category: "Fashion",
      brand: "StyleCraft",
      badges: ["Eco-Friendly"],
      discount: "-31%",
      inStock: true
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: "$599.99",
      originalPrice: "$799.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 423,
      category: "Electronics",
      brand: "TechPro",
      badges: ["Pro Choice"],
      discount: "-25%",
      inStock: false
    },
    {
      id: 5,
      name: "Luxury Skincare Set",
      price: "$149.99",
      originalPrice: "$199.99",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 756,
      category: "Beauty",
      brand: "GlowUp",
      badges: ["Limited Edition"],
      discount: "-25%",
      inStock: true
    },
    {
      id: 6,
      name: "Modern Coffee Maker",
      price: "$179.99",
      originalPrice: "$229.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 543,
      category: "Home & Garden",
      brand: "HomeEssentials",
      badges: ["Customer Favorite"],
      discount: "-22%",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Shop Premium Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover quality products from trusted sellers worldwide
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-card rounded-xl p-6 shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>

            {/* Sort */}
            <Select>
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="px-3"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.value} className="flex items-center space-x-2">
                      <Checkbox id={range.value} />
                      <label
                        htmlFor={range.value}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label
                        htmlFor={brand}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-medium mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center gap-1 text-sm font-medium cursor-pointer"
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground">& up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} products
              </p>
            </div>

            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-4"
            }>
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={
                    viewMode === "grid" 
                      ? "card-product group" 
                      : "card-product group flex flex-col sm:flex-row"
                  }
                >
                  <div className={viewMode === "grid" ? "relative" : "relative sm:w-48"}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={
                        viewMode === "grid" 
                          ? "w-full h-64 object-cover" 
                          : "w-full h-48 sm:h-full object-cover"
                      }
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.badges.map((badge, index) => (
                        <Badge key={index} className="bg-accent text-accent-foreground text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    
                    <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                      {product.discount}
                    </Badge>

                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}

                    {/* Hover Actions */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex flex-col gap-2">
                        <Button size="icon" variant="secondary" className="w-8 h-8">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={viewMode === "grid" ? "p-6" : "p-6 flex-1"}>
                    <div className={viewMode === "list" ? "flex justify-between items-start" : ""}>
                      <div className={viewMode === "list" ? "flex-1" : ""}>
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
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.brand} • {product.category}
                        </p>
                      </div>

                      <div className={viewMode === "list" ? "text-right ml-4" : ""}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xl font-bold text-accent">
                            {product.price}
                          </span>
                          <span className="text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                        
                        <div className={viewMode === "list" ? "flex gap-2" : ""}>
                          <Button 
                            className="w-full btn-primary"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="btn-secondary px-8">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}