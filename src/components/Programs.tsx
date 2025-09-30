import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, BookOpen } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import rehabilitationImage from "@/assets/rehabilitation-support.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Homeless Youth Support",
      description: "Providing shelter, counseling, and life skills training to help young people build stable, independent lives.",
      features: ["Emergency shelter", "Mental health counseling", "Job training", "Life skills workshops"],
      image: educationImage,
    },
    {
      icon: Heart,
      title: "Rehabilitation Services",
      description: "Comprehensive addiction recovery programs with therapy, trauma support, and community reintegration.",
      features: ["Drug rehabilitation", "Trauma therapy", "Group counseling", "Family support"],
      image: rehabilitationImage,
    },
    {
      icon: BookOpen,
      title: "Tutoring & Education",
      description: "Educational support for homeless youth and prisoners to break cycles and create new opportunities.",
      features: ["GED preparation", "College readiness", "Vocational training", "Digital literacy"],
      image: educationImage,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support programs designed to address the root causes and provide 
            sustainable solutions for lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth border-0 bg-card">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={program.image} 
                  alt={`${program.title} program`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-light rounded-lg">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;