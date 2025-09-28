import { useState } from "react";
import { Heart, ShoppingCart, Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 299.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 1247,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249.99,
      originalPrice: 349.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 892,
      inStock: true
    },
    {
      id: 3,
      name: "Professional Camera Lens",
      price: 599.99,
      originalPrice: 799.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 423,
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-accent" />
          <h1 className="text-3xl font-serif font-bold">My Wishlist</h1>
          <Badge variant="secondary">{wishlistItems.length} items</Badge>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">Save items you love to buy them later</p>
            <Link to="/shop">
              <Button className="btn-primary">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="card-product group relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-destructive"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  
                  {item.originalPrice && (
                    <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
                      -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({item.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-accent">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 btn-primary" 
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Notify Me"}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}