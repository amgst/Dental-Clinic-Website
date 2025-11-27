import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Check, Phone, Clock, Award, Heart, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollAnimation, StaggerContainer, StaggerItem, FadeIn, ScaleIn } from "./animations/ScrollAnimation";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      title: "Complete Dentures",
      description: "Full upper or lower dentures for complete tooth replacement",
      page: "service-complete-dentures"
    },
    {
      title: "Partial Dentures",
      description: "Acrylic and metal-framework solutions for missing teeth",
      page: "service-partial-dentures"
    },
    {
      title: "Flexible Dentures",
      description: "Comfortable thermoplastic partial dentures",
      page: "service-flexible-dentures"
    },
    {
      title: "Immediate Dentures",
      description: "Same-day denture placement after tooth extraction",
      page: "service-immediate-dentures"
    },
    {
      title: "Repairs & Relines",
      description: "Expert denture repair and relining services",
      page: "service-repairs-relines"
    },
    {
      title: "Implant-Supported",
      description: "Secure dentures anchored by dental implants",
      page: "service-implant-supported"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Over 20 years of experience in denture prosthodontics"
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Customized denture solutions tailored to your needs"
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Premium materials for natural-looking, durable dentures"
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Efficient fabrication and quick turnaround times"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl text-blue-900">
                  Restore Your Smile with Comfortable, Natural Dentures
                </h1>
                <p className="text-xl text-gray-700">
                  At BrightSmile Denture Clinic, we specialize in creating custom dentures that look natural, feel comfortable, and help you smile with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate("contact")}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Book a Consultation
                  </Button>
                  <Button 
                    onClick={() => onNavigate("services")}
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    View Services
                  </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+1234567890" className="hover:text-blue-600">
                      +123-456-7890
                    </a>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-700">Free Initial Consultation</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1612283105644-7ff66a3d5d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50dXJlcyUyMHNtaWxlfGVufDF8fHx8MTc2NDIzODY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Happy patient smiling with dentures"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">Why Choose BrightSmile?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine expertise, compassion, and cutting-edge technology to deliver exceptional denture care.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl text-blue-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">Our Denture Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive denture solutions to meet all your dental prosthetic needs.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card 
                  className="border-gray-200 hover:shadow-lg transition-all hover:border-blue-300 cursor-pointer"
                  onClick={() => onNavigate(service.page)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                        <span className="text-blue-600 text-sm mt-2 inline-block hover:underline">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="text-center mt-8">
              <Button 
                onClick={() => onNavigate("services")}
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View All Services
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606811801193-e318c9a87ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MjI3MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Ahmed Khan, Lead Prosthetist"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScaleIn>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl text-blue-900">Meet Dr. Ahmed Khan</h2>
                <p className="text-xl text-gray-700">
                  Lead Prosthetist at BrightSmile Denture Clinic
                </p>
                <p className="text-gray-600">
                  With over two decades of experience in denture prosthodontics, Dr. Khan is dedicated to helping patients regain their smile and confidence. His commitment to personalized care and attention to detail ensures that every patient receives dentures that not only look natural but feel comfortable and function perfectly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Certified Prosthodontist</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">20+ Years of Experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Thousands of Satisfied Patients</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => onNavigate("about")}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Learn More About Us
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4">
              Ready to Restore Your Smile?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards a confident, beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate("contact")}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Book Appointment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                onClick={() => window.location.href = "tel:+1234567890"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}