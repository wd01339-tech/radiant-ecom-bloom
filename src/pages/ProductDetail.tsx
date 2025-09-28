import { useState } from "react";
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Share2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Midnight Black");

  const images = [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600"
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = ["Midnight Black", "Pearl White", "Ocean Blue", "Rose Gold"];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely love these headphones! The sound quality is incredible and they're so comfortable.",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      date: "1 month ago",
      comment: "Great value for money. Battery life could be better but overall very satisfied.",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
              <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
                Best Seller
              </Badge>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-accent"
                      : "border-transparent hover:border-accent/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">Electronics</Badge>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Premium Wireless Headphones
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  4.8 (1,247 reviews)
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-accent">$199.99</span>
                <span className="text-xl text-muted-foreground line-through">$299.99</span>
                <Badge className="bg-success text-success-foreground">33% OFF</Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Experience premium audio quality with our latest wireless headphones. 
              Featuring advanced noise cancellation, 40-hour battery life, and premium comfort 
              designed for all-day wear.
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[80px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className="min-w-[120px]"
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 btn-primary text-lg py-3">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="p-3">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="p-3">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-accent" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Immerse yourself in studio-quality sound with our Premium Wireless Headphones. 
                  Engineered with precision and crafted for comfort, these headphones deliver 
                  an exceptional audio experience that brings your music to life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're commuting, working, or relaxing at home, the advanced noise 
                  cancellation technology ensures you can focus on what matters most - your audio.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Driver Size</span>
                      <span>40mm</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Frequency Response</span>
                      <span>20Hz - 20kHz</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Battery Life</span>
                      <span>40 hours</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Charging Time</span>
                      <span>2 hours</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connectivity</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Bluetooth Version</span>
                      <span>5.2</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Range</span>
                      <span>10 meters</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Codecs</span>
                      <span>SBC, AAC, aptX</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button className="btn-secondary">Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="card-premium">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                          <span className="font-semibold text-accent-foreground">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}