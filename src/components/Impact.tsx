import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const stats = [
    { number: "250+", label: "Lives Transformed" },
    { number: "85%", label: "Success Rate" },
    { number: "50+", label: "Partner Organizations" },
    { number: "5", label: "Years of Service" },
  ];

  const testimonials = [
    {
      quote: "This program gave me hope when I had none. The counselors didn't just help me get clean - they helped me believe in myself again.",
      name: "Sarah M.",
      role: "Rehabilitation Program Graduate",
    },
    {
      quote: "Thanks to the tutoring program, I earned my GED and now I'm studying computer science in college. They changed my entire future.",
      name: "Marcus T.",
      role: "Education Program Participant",
    },
    {
      quote: "The youth shelter was my lifeline. They provided more than just a bed - they gave me the tools to build a life.",
      name: "Alex R.",
      role: "Former Homeless Youth",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every number represents a life changed, a family reunited, a future restored. 
            Here's the difference we're making together.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft border-0 bg-card">
              <CardContent className="p-6">
                <div className="text-accent text-4xl mb-4">"</div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;