import { Card, CardContent } from "./ui/card";
import { Check, Award, Users, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollAnimation, StaggerContainer, StaggerItem, ScaleIn } from "./animations/ScrollAnimation";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities. We listen to your needs and work with you to achieve the best results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in denture fabrication, using premium materials and proven techniques."
    },
    {
      icon: Users,
      title: "Compassionate Service",
      description: "We understand the emotional journey of tooth loss. Our team provides empathetic, supportive care every step of the way."
    },
    {
      icon: Target,
      title: "Personalized Solutions",
      description: "No two patients are alike. We create custom denture solutions tailored to your unique needs and preferences."
    }
  ];

  const achievements = [
    "Over 20 years serving the community",
    "10,000+ satisfied patients",
    "Certified prosthodontic specialists",
    "State-of-the-art dental laboratory",
    "Same-day emergency repairs available",
    "Flexible payment plans offered"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">About BrightSmile Denture Clinic</h1>
              <p className="text-xl text-gray-700">
                Your trusted partner in restoring smiles and confidence for over two decades.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl text-blue-900">Our Story</h2>
                <p className="text-gray-700">
                  BrightSmile Denture Clinic was founded with a simple yet powerful mission: to help people regain their confidence through beautiful, comfortable, and functional dentures. What started as a small dental prosthetics practice has grown into a trusted community resource, serving thousands of patients over the years.
                </p>
                <p className="text-gray-700">
                  We understand that losing teeth can be a difficult experience, affecting not just your ability to eat and speak, but also your self-esteem and quality of life. That's why we're committed to providing compassionate, personalized care that goes beyond just fitting dentures – we're here to restore your smile and your confidence.
                </p>
                <p className="text-gray-700">
                  Our state-of-the-art facility combines traditional craftsmanship with modern technology, allowing us to create dentures that look natural, feel comfortable, and last for years to come.
                </p>
              </div>
            </ScrollAnimation>
            <ScaleIn delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzY0MjAyNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern BrightSmile clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Meet Dr. Khan */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="order-2 lg:order-1 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606811801193-e318c9a87ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MjI3MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Ahmed Khan, Lead Prosthetist"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScaleIn>
            <ScrollAnimation direction="right">
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl text-blue-900">Meet Dr. Ahmed Khan</h2>
                <p className="text-xl text-blue-700">Lead Prosthetist & Clinic Owner</p>
                <p className="text-gray-700">
                  Dr. Ahmed Khan is a certified prosthodontist with over 20 years of experience specializing in removable prosthodontics. After completing his dental degree, Dr. Khan pursued advanced training in prosthodontics, developing a passion for helping patients restore their smiles through custom denture solutions.
                </p>
                <p className="text-gray-700">
                  Known for his meticulous attention to detail and compassionate chairside manner, Dr. Khan has helped thousands of patients regain their confidence and quality of life. He believes in taking the time to understand each patient's unique needs, concerns, and goals, ensuring that every denture is perfectly tailored to the individual.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl text-blue-900">Qualifications & Expertise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Doctor of Dental Surgery (DDS)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Certificate in Prosthodontics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Member, American College of Prosthodontists</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">20+ years in denture prosthodontics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Continuing education in implant-supported dentures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at BrightSmile Denture Clinic.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl text-blue-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl text-white mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              "To provide exceptional denture care that restores not just teeth, but confidence, dignity, and quality of life. We are committed to treating every patient with compassion, respect, and the highest standard of professional care."
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">Why Patients Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has made us a trusted name in denture care.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Patient Testimonial Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xl text-gray-700 text-center italic mb-6">
                  "Dr. Khan and his team changed my life. After years of being self-conscious about my smile, I finally have dentures that look natural and feel comfortable. The care and attention to detail were outstanding. I can't recommend BrightSmile enough!"
                </p>
                <p className="text-center">
                  <span className="text-gray-900">— Margaret S.</span>
                  <span className="text-gray-500"> • Patient since 2022</span>
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}