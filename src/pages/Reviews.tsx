import { useState } from "react";
import { Star, ThumbsUp, Verified, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");

  const reviewStats = {
    totalReviews: 47832,
    averageRating: 4.8,
    ratingBreakdown: [
      { stars: 5, count: 32456, percentage: 68 },
      { stars: 4, count: 9566, percentage: 20 },
      { stars: 3, count: 3827, percentage: 8 },
      { stars: 2, count: 1434, percentage: 3 },
      { stars: 1, count: 549, percentage: 1 },
    ]
  };

  const featuredReviews = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      customerLocation: "New York, USA",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      helpful: 342,
      productName: "Premium Wireless Headphones",
      productImage: "/api/placeholder/80/80",
      title: "Exceptional Quality and Service",
      review: "I've been shopping with Premium Commerce for over two years now, and they consistently exceed my expectations. The headphones I ordered arrived in perfect condition, exactly as described. The sound quality is incredible, and the customer service team went above and beyond when I had a question about the warranty. The packaging was also eco-friendly, which I really appreciate. Highly recommend this platform!",
      pros: ["Fast shipping", "Quality packaging", "Excellent sound"],
      cons: ["Price could be lower"]
    },
    {
      id: 2,
      customerName: "Miguel Rodriguez", 
      customerLocation: "Madrid, Spain",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      date: "2024-01-12",
      verified: true,
      helpful: 287,
      productName: "Smart Fitness Watch",
      productImage: "/api/placeholder/80/80",
      title: "Perfect for International Shipping",
      review: "As someone living in Europe, I was initially concerned about shipping times and customs. However, Premium Commerce made the entire process seamless. My fitness watch arrived within 5 days, and all customs were handled automatically. The product works perfectly, and the health tracking features are very accurate. The app integration is smooth, and battery life exceeds expectations.",
      pros: ["Fast international shipping", "Accurate tracking", "Great battery life"],
      cons: ["Setup instructions could be clearer"]
    },
    {
      id: 3,
      customerName: "Emma Chen",
      customerLocation: "Singapore",
      avatar: "/api/placeholder/64/64",
      rating: 4,
      date: "2024-01-10",
      verified: true,
      helpful: 156,
      productName: "Eco-Friendly Backpack",
      productImage: "/api/placeholder/80/80",
      title: "Great Product, Minor Issues",
      review: "The backpack quality is outstanding - clearly built to last with sustainable materials. I love the thoughtful design and the multiple compartments. However, one of the zippers was slightly stiff initially, though it has loosened up with use. Customer service was responsive when I reached out. Overall very satisfied with the purchase and the company's environmental commitment.",
      pros: ["Sustainable materials", "Thoughtful design", "Durable construction"],
      cons: ["Zipper was initially stiff", "Could use more color options"]
    },
    {
      id: 4,
      customerName: "James Wilson",
      customerLocation: "Toronto, Canada", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      date: "2024-01-08",
      verified: true,
      helpful: 203,
      productName: "Professional Camera Lens",
      productImage: "/api/placeholder/80/80",
      title: "Professional Grade Equipment",
      review: "As a professional photographer, I'm very particular about my equipment. This lens exceeded my expectations in terms of sharpness and build quality. The autofocus is lightning fast, and the image stabilization works incredibly well. Premium Commerce's authentication process gave me confidence I was getting a genuine product. The return policy is also very photographer-friendly.",
      pros: ["Authentic products", "Professional quality", "Fast autofocus"],
      cons: ["Premium pricing", "Heavy weight"]
    }
  ];

  const categories = [
    "All Categories", "Electronics", "Fashion", "Home & Garden", "Sports", "Beauty", "Books"
  ];

  const renderStars = (rating: number, size: string = "w-5 h-5") => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Real feedback from our global community of satisfied customers. 
              Every review is verified and helps us maintain our high standards.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Overall Rating Summary */}
        <div className="card-premium mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rating Overview */}
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-accent mb-2">
                {reviewStats.averageRating}
              </div>
              <div className="mb-3">
                {renderStars(Math.floor(reviewStats.averageRating), "w-6 h-6")}
              </div>
              <p className="text-muted-foreground text-lg">
                Based on {reviewStats.totalReviews.toLocaleString()} verified reviews
              </p>
              <div className="mt-4">
                <Badge className="bg-success text-success-foreground">
                  <Verified className="w-4 h-4 mr-1" />
                  All Reviews Verified
                </Badge>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                {reviewStats.ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <Progress value={item.percentage} className="flex-1" />
                    <div className="text-sm text-muted-foreground w-20 text-right">
                      {item.count.toLocaleString()} ({item.percentage}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-xl p-6 shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {featuredReviews.map((review) => (
            <div key={review.id} className="card-premium">
              {/* Review Header */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={review.avatar}
                    alt={review.customerName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{review.customerName}</h4>
                      {review.verified && (
                        <Verified className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.customerLocation}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(review.rating, "w-4 h-4")}
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{review.productName}</p>
                    <Badge variant="outline" className="text-xs">
                      Verified Purchase
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">{review.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {review.review}
                </p>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {review.pros.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-success mb-2">Pros:</h5>
                      <ul className="space-y-1">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {review.cons.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-destructive mb-2">Cons:</h5>
                      <ul className="space-y-1">
                        {review.cons.map((con, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    Share
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Was this review helpful?
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-secondary px-8">
            Load More Reviews
          </Button>
        </div>

        {/* Review Guidelines */}
        <div className="mt-20 card-premium">
          <h3 className="text-2xl font-bold mb-6">Review Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-success">We Encourage:</h4>
              <ul className="space-y-2">
                {[
                  "Honest, detailed feedback about your experience",
                  "Specific details about product quality and performance",
                  "Constructive criticism that helps other shoppers",
                  "Photos of products in use (when possible)",
                  "Information about shipping and customer service"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-destructive">Please Avoid:</h4>
              <ul className="space-y-2">
                {[
                  "Profanity, discriminatory language, or personal attacks",
                  "Reviews about shipping delays beyond our control",
                  "Promotional content or advertising other products",
                  "Reviews primarily about competitor comparisons",
                  "Duplicate reviews for the same product"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}