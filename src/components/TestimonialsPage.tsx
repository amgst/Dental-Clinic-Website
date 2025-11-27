import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollAnimation, StaggerContainer, StaggerItem, ScaleIn } from "./animations/ScrollAnimation";

export function TestimonialsPage() {
  const testimonials = [
    {
      name: "Margaret S.",
      age: 68,
      service: "Complete Dentures",
      rating: 5,
      date: "November 2024",
      text: "Dr. Khan and his team changed my life. After years of being self-conscious about my smile, I finally have dentures that look natural and feel comfortable. The care and attention to detail were outstanding. I can eat my favorite foods again and smile with confidence. I can't recommend BrightSmile enough!",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Robert T.",
      age: 72,
      service: "Implant-Supported Dentures",
      rating: 5,
      date: "October 2024",
      text: "I was hesitant about getting implant-supported dentures, but Dr. Khan explained everything clearly and made me feel comfortable. The results exceeded my expectations. My dentures feel secure and stable - I can eat steak again! The investment was worth every penny for the quality of life improvement.",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Linda M.",
      age: 65,
      service: "Partial Dentures",
      rating: 5,
      date: "September 2024",
      text: "Getting partial dentures was the best decision I made. Dr. Khan took the time to ensure they fit perfectly and looked natural with my existing teeth. The staff is so friendly and professional. They made the whole process easy and comfortable. I'm so happy with my new smile!",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "James P.",
      age: 58,
      service: "Immediate Dentures",
      rating: 5,
      date: "August 2024",
      text: "I needed several teeth extracted and was worried about being without teeth. Dr. Khan's immediate denture solution was perfect - I had teeth the same day as my extractions! The follow-up care has been excellent, and now that they're fully healed, my permanent dentures fit beautifully.",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Patricia W.",
      age: 70,
      service: "Flexible Dentures",
      rating: 5,
      date: "July 2024",
      text: "The flexible dentures are so comfortable! I had tried traditional partial dentures before and found them uncomfortable. These are lightweight, look natural, and I barely notice I'm wearing them. Dr. Khan really listened to my concerns and found the perfect solution.",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "David H.",
      age: 63,
      service: "Denture Repair",
      rating: 5,
      date: "June 2024",
      text: "I broke my denture on a weekend and was panicking. I called Monday morning and they fit me in right away. Same-day repair! I was so relieved. The quality of the repair is excellent and the price was very reasonable. Great service when you need it most.",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Susan K.",
      age: 67,
      service: "Complete Dentures",
      rating: 5,
      date: "May 2024",
      text: "From the first consultation to the final fitting, everything was professional and caring. Dr. Khan explained each step, answered all my questions, and made sure I was comfortable. My dentures fit perfectly and look so natural that people don't even know they're not my real teeth!",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Thomas R.",
      age: 61,
      service: "Denture Reline",
      rating: 5,
      date: "April 2024",
      text: "My old dentures had become loose and uncomfortable. Dr. Khan relined them and they fit like new! The difference is amazing - no more slipping when I eat or talk. The service was quick and affordable. Highly recommend getting regular maintenance done here.",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Barbara L.",
      age: 69,
      service: "Partial Dentures",
      rating: 5,
      date: "March 2024",
      text: "I was nervous about getting partial dentures, but the team at BrightSmile made me feel so comfortable. They're patient, kind, and really care about getting the best results. My partials blend seamlessly with my natural teeth. I wish I'd done this sooner!",
      image: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMHBhdGllbnR8ZW58MXx8fHwxNzY0MTQxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Patients" },
    { number: "20+", label: "Years Experience" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">Patient Testimonials</h1>
              <p className="text-xl text-gray-700">
                Read what our patients have to say about their experience at BrightSmile Denture Clinic.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl lg:text-4xl text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">What Our Patients Say</h2>
              <p className="text-xl text-gray-600">
                Real stories from real patients who have restored their smiles with us.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="border-gray-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-blue-200 mb-4" />
                    
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.service}</p>
                        <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-900 mb-4">Before & After Gallery</h2>
            <p className="text-xl text-gray-600 mb-8">
              See the transformations we've helped our patients achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Before & After Photo</p>
                      <p className="text-sm text-gray-400">
                        [Placeholder for patient before/after images]
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Case #{item}</span>
                    <span className="text-blue-600">Complete Dentures</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm italic">
            Note: Before and after photos are displayed with patient consent. Results may vary.
          </p>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear directly from our patients about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-sm text-blue-800">Video Testimonial</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Patient Story #{item}</p>
                  <p className="text-sm text-gray-500">Coming soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to Start Your Smile Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied patients who have restored their confidence with BrightSmile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <a 
              href="tel:+1234567890"
              className="px-8 py-3 bg-blue-700 text-white border border-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Call +123-456-7890
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <h3 className="text-xl text-blue-900 mb-2">Certified Professionals</h3>
                <p className="text-gray-600">
                  Licensed prosthodontists with advanced training and certifications
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🏆
                </div>
                <h3 className="text-xl text-blue-900 mb-2">Award-Winning Care</h3>
                <p className="text-gray-600">
                  Recognized for excellence in patient care and denture quality
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  💯
                </div>
                <h3 className="text-xl text-blue-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  We stand behind our work with follow-up care and adjustments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}