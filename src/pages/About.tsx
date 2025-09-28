import { Globe, Users, Award, TrendingUp, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const stats = [
    { number: "2M+", label: "Happy Customers", icon: Users },
    { number: "50K+", label: "Premium Products", icon: Award },
    { number: "180+", label: "Countries Served", icon: Globe },
    { number: "4.9/5", label: "Customer Rating", icon: TrendingUp },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/api/placeholder/300/400",
      description: "Visionary leader with 15+ years in global e-commerce"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/400",
      description: "Tech innovator focused on secure, scalable platforms"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      image: "/api/placeholder/300/400",
      description: "Customer advocate ensuring exceptional shopping experiences"
    },
    {
      name: "David Kim",
      role: "Head of Global Operations",
      image: "/api/placeholder/300/400",
      description: "Operations expert managing worldwide logistics"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize customer safety with bank-level security, verified sellers, and transparent policies."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction at the center."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "We believe premium products should be accessible to everyone, everywhere in the world."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards through rigorous seller verification and product quality checks."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Connecting the World Through
              <span className="text-accent"> Premium Commerce</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We're building the world's most trusted marketplace where quality meets accessibility, 
              and every purchase supports verified sellers committed to excellence.
            </p>
            <Button className="btn-hero text-lg px-8 py-4">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2020 with a simple mission: to make premium products accessible to everyone, everywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">From Vision to Global Reality</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  What started as a small team's vision to democratize access to premium products has grown 
                  into a global marketplace serving millions of customers across 180+ countries.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe that geography should never be a barrier to accessing quality. Through our 
                  platform, we've empowered thousands of sellers worldwide to reach global audiences while 
                  maintaining the highest standards of quality and service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to innovate with advanced security measures, AI-powered 
                  recommendations, and sustainable shipping practices, all while keeping our 
                  customer-first philosophy at the heart of everything we do.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-accent rounded-2xl p-8 text-accent-foreground">
                  <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                  <p className="mb-6">
                    To create a global marketplace where trust, quality, and accessibility converge, 
                    empowering both sellers and customers to thrive in the digital economy.
                  </p>
                  <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                  <p>
                    A world where premium products are accessible to everyone, supported by 
                    technology that prioritizes security, sustainability, and human connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-premium">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced leaders from diverse backgrounds, united by a passion for innovation and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-premium text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Whether you're a seller looking to reach global customers or a shopper seeking premium products, 
              we'd love to have you as part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Start Selling Today
              </Button>
              <Button variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                Explore Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}