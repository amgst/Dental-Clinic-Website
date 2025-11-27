import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">BS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-white">BrightSmile</span>
                <span className="text-xs">Denture Clinic</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Restoring smiles with comfortable, natural-looking dentures. Your trusted partner in dental prosthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate("home")} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("about")} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("faq")} className="hover:text-blue-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("testimonials")} className="hover:text-blue-400 transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Smile Street, CityName, State/Province, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +123-456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@brightsmileclinic.com" className="hover:text-blue-400 transition-colors">
                  info@brightsmileclinic.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="pl-6">Saturday: 9:00 AM - 2:00 PM</li>
              <li className="pl-6">Sunday: Closed</li>
            </ul>
            <button 
              onClick={() => handleNavigate("contact")}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 BrightSmile Denture Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
