import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: "service-complete-dentures",
      title: "Complete Dentures",
      subtitle: "Full Upper or Lower Dentures",
      description: "Complete dentures are removable prosthetic devices designed to replace all teeth in the upper or lower jaw. They restore your ability to eat, speak, and smile with confidence.",
      whoItsFor: "Patients who have lost all their natural teeth in one or both jaws",
      benefits: [
        "Restores full dental function",
        "Natural-looking appearance",
        "Improves facial structure and appearance",
        "Custom-fitted for comfort",
        "Improves speech and chewing ability"
      ],
      timeline: "3-6 appointments over 4-8 weeks"
    },
    {
      id: "service-partial-dentures",
      title: "Partial Dentures",
      subtitle: "Acrylic & Metal-Framework Solutions",
      description: "Partial dentures fill the gaps left by missing teeth and are held in place by clasps that attach to your remaining natural teeth. We offer both acrylic and metal-framework options.",
      whoItsFor: "Patients with some remaining natural teeth",
      benefits: [
        "Prevents remaining teeth from shifting",
        "Restores chewing and speaking function",
        "Maintains facial shape",
        "Cost-effective tooth replacement",
        "Durable metal or flexible acrylic options"
      ],
      timeline: "2-4 appointments over 3-5 weeks"
    },
    {
      id: "service-flexible-dentures",
      title: "Flexible / Thermoplastic Partial Dentures",
      subtitle: "Comfortable & Metal-Free",
      description: "Flexible dentures are made from a lightweight, thermoplastic material that adapts to the natural movement of your mouth. They're an excellent alternative to traditional partial dentures.",
      whoItsFor: "Patients seeking a comfortable, aesthetic partial denture solution",
      benefits: [
        "No visible metal clasps",
        "Lightweight and comfortable",
        "Biocompatible material",
        "Stain-resistant",
        "Ideal for patients with metal allergies"
      ],
      timeline: "2-3 appointments over 2-4 weeks"
    },
    {
      id: "service-immediate-dentures",
      title: "Immediate Dentures",
      subtitle: "Same-Day Tooth Replacement",
      description: "Immediate dentures are placed on the same day as tooth extraction, ensuring you never have to be without teeth. They serve as a temporary solution while your gums heal before permanent dentures.",
      whoItsFor: "Patients requiring tooth extractions who want immediate replacement",
      benefits: [
        "No waiting period without teeth",
        "Maintains facial appearance during healing",
        "Protects extraction sites",
        "Allows gradual adjustment to dentures",
        "Can be relined or replaced with permanent dentures"
      ],
      timeline: "Fabricated before extractions, placed same day"
    },
    {
      id: "service-repairs-relines",
      title: "Denture Repairs & Relines",
      subtitle: "Expert Maintenance Services",
      description: "Dentures can break or become loose over time. We offer professional repair services for broken dentures and relining to improve fit as your mouth changes.",
      whoItsFor: "Patients with damaged or ill-fitting existing dentures",
      benefits: [
        "Quick turnaround for repairs",
        "Extends the life of your dentures",
        "Improves comfort and fit",
        "Cost-effective maintenance",
        "Same-day emergency repairs available"
      ],
      timeline: "Same-day to 2 days depending on repair complexity"
    },
    {
      id: "service-implant-supported",
      title: "Implant-Supported Dentures",
      subtitle: "Secure & Stable Solution",
      description: "Implant-supported dentures are anchored to dental implants surgically placed in your jawbone. They offer superior stability and function compared to traditional dentures.",
      whoItsFor: "Patients seeking the most stable and long-lasting denture solution",
      benefits: [
        "Maximum stability - no slipping",
        "Improved chewing power",
        "Prevents bone loss",
        "More natural feel",
        "Long-lasting solution",
        "No adhesives required"
      ],
      timeline: "Multiple stages over 3-6 months (includes implant placement and healing)"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">Our Denture Services</h1>
              <p className="text-xl text-gray-700">
                Comprehensive denture solutions tailored to your unique needs. From complete dentures to specialized repairs, we're here to restore your smile.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} direction={index % 2 === 0 ? "left" : "right"} delay={0.1}>
                <Card 
                  className={`border-gray-200 overflow-hidden hover:shadow-xl transition-shadow ${ index % 2 === 0 ? "" : "bg-gray-50"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-5 gap-8 p-8">
                      <div className="lg:col-span-3 space-y-6">
                        <div>
                          <h2 className="text-3xl text-blue-900 mb-2">{service.title}</h2>
                          <p className="text-lg text-blue-600">{service.subtitle}</p>
                        </div>
                        
                        <p className="text-gray-700">{service.description}</p>
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="text-blue-900">Who it's for:</span> {service.whoItsFor}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span><span className="text-blue-900">Timeline:</span> {service.timeline}</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => onNavigate(service.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                          <h3 className="text-lg text-blue-900 mb-4 flex items-center">
                            <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />
                            Key Benefits
                          </h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-blue-600 mt-0.5">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">Our Denture Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A step-by-step approach to ensure your dentures fit perfectly and look natural.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We assess your oral health, discuss your needs, and create a customized treatment plan."
              },
              {
                step: "02",
                title: "Impressions & Measurements",
                description: "Precise impressions and measurements ensure a perfect fit and natural appearance."
              },
              {
                step: "03",
                title: "Try-In & Adjustments",
                description: "You'll try on your dentures so we can make any necessary adjustments for comfort and aesthetics."
              },
              {
                step: "04",
                title: "Final Fitting & Aftercare",
                description: "We deliver your finished dentures with care instructions and schedule follow-up appointments."
              }
            ].map((step, index) => (
              <StaggerItem key={index}>
                <Card className="border-gray-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-xl text-blue-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl text-white mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with Dr. Khan to discuss your needs and explore your options.
            </p>
            <Button 
              onClick={() => onNavigate("contact")}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Book Free Consultation
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}