import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { ScrollAnimation, StaggerContainer, StaggerItem, FadeIn } from "./animations/ScrollAnimation";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
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
              <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700">
                Ready to restore your smile? Get in touch to book your free consultation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg text-blue-900 mb-2">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    +123-456-7890
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg text-blue-900 mb-2">Email</h3>
                  <a 
                    href="mailto:info@brightsmileclinic.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors break-all"
                  >
                    info@brightsmileclinic.com
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg text-blue-900 mb-2">Address</h3>
                  <p className="text-gray-700 text-sm">
                    123 Smile Street<br />
                    CityName, State/Province<br />
                    Country
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg text-blue-900 mb-2">Hours</h3>
                  <p className="text-gray-700 text-sm">
                    Mon-Fri: 9AM - 6PM<br />
                    Sat: 9AM - 2PM<br />
                    Sun: Closed
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-blue-900 mb-4">Book an Appointment</h2>
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
                  <Label htmlFor="preferredDate">Preferred Appointment Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
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
                  <Send className="w-4 h-4 mr-2" />
                  Send Appointment Request
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by BrightSmile Denture Clinic regarding your appointment.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-blue-900 mb-4">Visit Us</h2>
                <p className="text-gray-600 mb-6">
                  We're conveniently located in the heart of the city with easy access and parking available.
                </p>
                
                {/* Map Placeholder */}
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden border border-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">
                        123 Smile Street<br />
                        CityName, State/Province<br />
                        Country
                      </p>
                      <p className="text-sm text-gray-500 mt-4">
                        Map integration placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="space-y-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-green-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-700 text-sm">
                      Your first consultation is completely free with no obligation. Come meet Dr. Khan and discuss your options.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-blue-900 mb-2">Emergency Services</h3>
                    <p className="text-gray-700 text-sm">
                      Need urgent denture repair? Call us for same-day emergency services. We understand denture problems can't always wait.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-purple-900 mb-2">Parking & Accessibility</h3>
                    <p className="text-gray-700 text-sm">
                      Free parking available on-site. Our clinic is wheelchair accessible with ground-floor access.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl text-blue-900 mb-6 text-center">Getting to Our Clinic</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚗
                </div>
                <h3 className="text-xl text-blue-900 mb-3">By Car</h3>
                <p className="text-gray-600 text-sm">
                  Free parking available. Located just off Main Street with easy highway access.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚌
                </div>
                <h3 className="text-xl text-blue-900 mb-3">Public Transit</h3>
                <p className="text-gray-600 text-sm">
                  Bus routes 12, 45, and 78 stop within two blocks. Metro station 5 minutes walk.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ♿
                </div>
                <h3 className="text-xl text-blue-900 mb-3">Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Wheelchair accessible entrance, elevator, and treatment rooms available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}