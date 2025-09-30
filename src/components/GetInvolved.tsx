import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Users, Building } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      icon: HandHeart,
      title: "Donate",
      description: "Your contribution directly funds our programs and helps us reach more people in need.",
      action: "Make a Donation",
      highlight: true,
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our community of volunteers and make a hands-on difference in someone's life.",
      action: "Volunteer Today",
      highlight: false,
    },
    {
      icon: Building,
      title: "Partner",
      description: "Organizations and businesses can partner with us to expand our reach and impact.",
      action: "Learn About Partnerships",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we can create lasting change. Whether through donations, volunteering, 
            or partnerships, your involvement makes a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className={`shadow-soft border-0 bg-background ${way.highlight ? 'ring-2 ring-accent' : ''}`}>
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-primary-light rounded-full mb-4">
                  <way.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{way.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {way.description}
                </p>
                
                <Button 
                  variant={way.highlight ? "hero" : "default"} 
                  className="w-full"
                >
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Have questions about getting involved?
          </p>
          <Button variant="outline" size="lg" className="bg-background hover:bg-muted">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;