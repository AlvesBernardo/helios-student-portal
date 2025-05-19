
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      title: "Exclusive Events",
      description: "Access to members-only workshops, conferences, and networking opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-helios-gold">
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
      )
    },
    {
      title: "Skill Development",
      description: "Regular training sessions and resources to enhance your academic and professional skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-helios-gold">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      title: "Community Connection",
      description: "Join a vibrant community of like-minded individuals passionate about growth and innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-helios-gold">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Computer Science, Year 3",
      content: "Joining Helios was the best decision I made in my university journey. The connections and experiences have been invaluable."
    },
    {
      name: "Jamie Lee",
      role: "Business Administration, Year 2",
      content: "The mentorship program at Helios helped me secure my dream internship. I'm so grateful for this community!"
    },
    {
      name: "Taylor Reed",
      role: "Engineering, Year 4",
      content: "From networking events to skill workshops, Helios consistently delivers quality experiences for its members."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Why Join <span className="gold-gradient">Helios</span>?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits of being part of our vibrant student community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-texture opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Shine with Helios?</h2>
              <p className="text-muted-foreground mb-8">
                Join our community today and unlock a world of opportunities, connections, and growth.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-helios-gold hover:bg-helios-gold-dark text-white font-medium"
              >
                <Link to="/signup">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">What Our Members Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from students who have experienced the Helios difference
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-helios-gold/20 text-helios-gold flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M10 11h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1Z"></path>
                          <path d="M22 11h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1Z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
