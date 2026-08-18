import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, CalendarCheck, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";

export function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    toast.success("Appointment request sent! We'll contact you within 24 hours to confirm your appointment.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">Book an Appointment</h1>
              <p className="text-xl text-gray-700">
                Schedule your free consultation and take the first step towards a confident smile.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Appointment Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div>
              <h2 className="text-3xl text-blue-900 mb-4">Request Your Appointment</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you within 24 hours to confirm your appointment. All consultations are free!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+123-456-7890"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferred Appointment Date *</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service of Interest</Label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g. Complete Dentures, Implant-Supported Dentures"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message / Questions</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your denture needs or any questions you have..."
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Request Appointment
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by BrightSmile Denture Clinic regarding your appointment.
                </p>
              </form>
            </div>

            {/* Booking Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-blue-900 mb-4">What to Expect</h2>
                <p className="text-gray-600 mb-6">
                  Your first visit includes a free, no-obligation consultation with Dr. Khan to discuss your options and create a personalized treatment plan.
                </p>
              </div>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-lg text-green-900 mb-2">Free Consultation</h3>
                        <p className="text-gray-700 text-sm">
                          Your first consultation is completely free with no obligation. Come meet Dr. Khan and discuss your options.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="text-lg text-blue-900 mb-2">Emergency Services</h3>
                        <p className="text-gray-700 text-sm">
                          Need urgent denture repair? Call us for same-day emergency services. We understand denture problems can't always wait.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="border-purple-200 bg-purple-50">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="text-lg text-purple-900 mb-2">Opening Hours</h3>
                        <p className="text-gray-700 text-sm">
                          Mon-Fri: 9AM - 6PM<br />
                          Sat: 9AM - 2PM<br />
                          Sun: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>

              <Card className="border-blue-200">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700 mb-3">Prefer to talk to someone directly?</p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    +123-456-7890
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
