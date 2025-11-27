import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type Page = 
  | "home" 
  | "about" 
  | "services" 
  | "faq" 
  | "contact" 
  | "testimonials"
  | string;

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "FAQ", page: "faq" },
    { label: "Testimonials", page: "testimonials" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigate("home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">BS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-blue-900">BrightSmile</span>
              <span className="text-xs text-gray-600">Denture Clinic</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  currentPage === item.page ? "text-blue-600" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+1234567890"
              className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+123-456-7890</span>
            </a>
            <Button 
              onClick={() => handleNavigate("contact")}
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700"
            >
              Book Appointment
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`text-left px-4 py-2 hover:bg-gray-50 rounded-lg ${
                    currentPage === item.page ? "text-blue-600 bg-blue-50" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavigate("contact")}
                className="mx-4 bg-blue-600 hover:bg-blue-700"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
