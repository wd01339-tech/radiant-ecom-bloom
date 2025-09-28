import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "normal"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const offices = [
    {
      city: "New York (HQ)",
      address: "123 Premium Plaza, Manhattan, NY 10001",
      phone: "+1 (555) 123-PREMIUM",
      email: "ny@premium-commerce.com",
      hours: "Mon-Fri: 9AM-8PM EST",
      isHq: true
    },
    {
      city: "London",
      address: "456 Commerce Street, London EC1A 1BB, UK",
      phone: "+44 20 7123 4567",
      email: "london@premium-commerce.com",
      hours: "Mon-Fri: 9AM-6PM GMT"
    },
    {
      city: "Singapore",
      address: "789 Marina Bay Drive, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@premium-commerce.com",
      hours: "Mon-Fri: 9AM-6PM SGT"
    },
    {
      city: "Sydney",
      address: "321 Harbour Bridge Road, Sydney NSW 2000",
      phone: "+61 2 1234 5678",
      email: "sydney@premium-commerce.com",
      hours: "Mon-Fri: 9AM-6PM AEST"
    }
  ];

  const supportOptions = [
    {
      title: "General Inquiry",
      description: "Questions about our services, partnerships, or general information",
      icon: MessageCircle,
      email: "hello@premium-commerce.com",
      response: "24 hours"
    },
    {
      title: "Customer Support",
      description: "Order issues, returns, refunds, and account assistance",
      icon: Phone,
      email: "support@premium-commerce.com", 
      response: "2-4 hours"
    },
    {
      title: "Technical Support",
      description: "Website issues, payment problems, and technical difficulties",
      icon: Mail,
      email: "tech@premium-commerce.com",
      response: "4-6 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We're here to help with any questions, concerns, or feedback. 
              Reach out to our global team for personalized support.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-premium">
              <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium mb-2">
                      Priority Level
                    </label>
                    <Select 
                      value={formData.priority} 
                      onValueChange={(value) => handleInputChange("priority", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="btn-primary w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Support Options */}
            <div className="card-premium">
              <h3 className="text-xl font-bold mb-4">Support Options</h3>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="text-accent font-medium">{option.email}</span>
                          <span className="text-muted-foreground">Response: {option.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card-premium">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">24/7 Support Hotline</p>
                    <p className="text-sm text-muted-foreground">+1 (555) PREMIUM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-sm text-muted-foreground">hello@premium-commerce.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Sun: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Global Offices</h2>
            <p className="text-muted-foreground text-lg">
              Visit us at one of our worldwide locations or connect with local teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className={`card-premium ${office.isHq ? 'ring-2 ring-accent/20' : ''}`}>
                {office.isHq && (
                  <div className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                    Headquarters
                  </div>
                )}
                <h3 className="font-bold text-lg mb-3">{office.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-accent">{office.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map */}
        <section className="mt-20">
          <div className="card-premium">
            <h3 className="text-2xl font-bold mb-6">Find Us on the Map</h3>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map integration would be implemented here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Google Maps API integration for office locations
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}