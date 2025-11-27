import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";
import { TestimonialsPage } from "./components/TestimonialsPage";

type Page =
  | "home"
  | "about"
  | "services"
  | "faq"
  | "contact"
  | "testimonials"
  | "service-complete-dentures"
  | "service-partial-dentures"
  | "service-flexible-dentures"
  | "service-immediate-dentures"
  | "service-repairs-relines"
  | "service-implant-supported";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={setCurrentPage} />;
      case "service-complete-dentures":
        return (
          <ServiceDetailPage serviceType="complete-dentures" />
        );
      case "service-partial-dentures":
        return (
          <ServiceDetailPage serviceType="partial-dentures" />
        );
      case "service-flexible-dentures":
        return (
          <ServiceDetailPage serviceType="flexible-dentures" />
        );
      case "service-immediate-dentures":
        return (
          <ServiceDetailPage serviceType="immediate-dentures" />
        );
      case "service-repairs-relines":
        return (
          <ServiceDetailPage serviceType="repairs-relines" />
        );
      case "service-implant-supported":
        return (
          <ServiceDetailPage serviceType="implant-supported" />
        );
      case "faq":
        return <FAQPage />;
      case "contact":
        return <ContactPage />;
      case "testimonials":
        return <TestimonialsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}