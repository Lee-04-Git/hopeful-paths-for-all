import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every person with empathy, understanding that everyone deserves respect and support."
    },
    {
      icon: Shield,
      title: "Dignity",
      description: "We believe in the inherent worth of every individual and work to restore dignity through our programs."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "We provide tools and resources that enable people to rebuild their lives and achieve independence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hope Foundation was born from a simple but powerful belief: every person deserves 
                a second chance. Founded in 2019, we started as a small community initiative to 
                help homeless youth in our local area.
              </p>
              <p>
                As we witnessed the complex challenges facing vulnerable populations, we expanded 
                our mission to include comprehensive rehabilitation services and educational support. 
                Today, we serve hundreds of individuals annually through our integrated approach 
                to healing and empowerment.
              </p>
              <p>
                Our work is guided by the understanding that sustainable change requires addressing 
                root causes, not just symptoms. Through therapy, education, and practical support, 
                we help people rebuild their lives from the ground up.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Our Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="shadow-soft border-0 bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-light rounded-lg flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <Card className="shadow-soft border-0 bg-background">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To support homeless youth, prisoners, and individuals struggling with addiction 
                through comprehensive rehabilitation, therapy, and educational programs that 
                restore dignity and create pathways to independence.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-background">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every person has the chance to rebuild their life with dignity, 
                education, and hope—where past circumstances don't define future possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;