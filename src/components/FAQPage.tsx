import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent } from "./ui/card";
import { Search, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

export function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What types of dentures do you offer?",
          answer: "We offer a comprehensive range of denture solutions including complete dentures (full upper/lower), partial dentures (acrylic and metal-framework), flexible thermoplastic dentures, immediate dentures, implant-supported dentures, and denture repair/reline services. Each type is designed for specific needs and circumstances."
        },
        {
          question: "How do I know which type of denture is right for me?",
          answer: "During your free consultation, Dr. Khan will examine your mouth, discuss your needs and lifestyle, and recommend the best solution for you. Factors we consider include how many teeth you're missing, your jawbone health, budget, and personal preferences."
        },
        {
          question: "How long does it take to get dentures?",
          answer: "The timeline varies by denture type: Complete dentures typically take 4-8 weeks (3-6 appointments), partial dentures 3-5 weeks (2-4 appointments), and flexible dentures 2-4 weeks (2-3 appointments). Immediate dentures are placed the same day as tooth extraction, while implant-supported dentures take 3-6 months due to healing time."
        },
        {
          question: "Are dentures covered by insurance?",
          answer: "Many dental insurance plans provide partial coverage for dentures. Coverage varies by plan, but typically ranges from 50-80% after meeting your deductible. We'll work with your insurance company and can provide detailed cost estimates. We also offer flexible payment plans."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We understand that dentures are an investment in your health and confidence. We offer flexible payment plans to make treatment affordable. Contact our office to discuss options that work for your budget."
        }
      ]
    },
    {
      category: "Denture Care & Maintenance",
      icon: HelpCircle,
      faqs: [
        {
          question: "How do I care for my dentures?",
          answer: "Daily care includes: (1) Remove and rinse after eating, (2) Brush daily with a soft denture brush and denture cleaner (not regular toothpaste), (3) Soak overnight in water or denture solution, (4) Rinse before putting back in your mouth, (5) Clean your gums, tongue, and palate daily, (6) Handle carefully to avoid dropping."
        },
        {
          question: "How long do dentures last?",
          answer: "With proper care, dentures typically last 5-10 years. However, they may need relining every 2-3 years as your gums and jawbone naturally change over time. Implant-supported dentures can last 10-15 years or longer, with the implants themselves potentially lasting a lifetime."
        },
        {
          question: "Can dentures be repaired if they break?",
          answer: "Yes! We offer professional denture repair services for breaks, cracks, and damaged clasps. Many repairs can be completed the same day. Never attempt DIY repairs with household glues, as this can cause further damage and may be toxic."
        },
        {
          question: "When should I have my dentures relined?",
          answer: "You should consider a reline if you notice: dentures slipping or moving when eating/talking, sore spots on gums, difficulty chewing, food getting under dentures, or needing more adhesive than usual. We generally recommend relining every 2-3 years."
        },
        {
          question: "Can I sleep with my dentures in?",
          answer: "It's generally recommended to remove dentures at night to give your gums a rest and prevent bacterial buildup. However, some patients with implant-supported dentures may wear them 24/7. Follow Dr. Khan's specific recommendations for your situation."
        },
        {
          question: "What cleaning products should I use?",
          answer: "Use a soft denture brush and denture-specific cleaners. Avoid regular toothpaste (too abrasive), bleach (can weaken dentures), and hot water (can warp acrylic). For flexible dentures, use cleaners specifically designed for thermoplastic materials."
        }
      ]
    },
    {
      category: "Living with Dentures",
      icon: HelpCircle,
      faqs: [
        {
          question: "How long does it take to adjust to dentures?",
          answer: "Most patients adjust within 2-4 weeks, though it can take up to a few months to feel completely comfortable. Initial challenges may include increased saliva production, minor speech changes, and getting used to eating with dentures. These typically resolve with time and practice."
        },
        {
          question: "Will dentures change how I speak?",
          answer: "You may experience slight speech changes initially, particularly with 's' and 'f' sounds. This is temporary. Practice reading aloud, speaking slowly, and your speech will return to normal within a few weeks as you adjust to your dentures."
        },
        {
          question: "Can I eat normally with dentures?",
          answer: "Yes, but there's an adjustment period. Start with soft foods cut into small pieces, chew slowly using both sides of your mouth, and gradually introduce harder foods. Avoid very sticky foods (caramel, gum), extremely hard foods (hard candy, nuts), and foods that require biting with front teeth initially."
        },
        {
          question: "Will my dentures look natural?",
          answer: "Absolutely! Modern dentures are highly customizable. We match the size, shape, and color of teeth to your facial features, skin tone, and preferences. The goal is a natural-looking smile that enhances your appearance and looks like your own teeth."
        },
        {
          question: "Do I need to use denture adhesive?",
          answer: "Well-fitting dentures often don't require adhesive. However, some patients prefer using a small amount for extra security when eating or for added confidence. If you find yourself using large amounts of adhesive, your dentures may need relining or adjustment."
        },
        {
          question: "Can I kiss and smile normally with dentures?",
          answer: "Yes! Once you're adjusted to your dentures, you can kiss, smile, laugh, and show affection normally. Properly fitted dentures stay securely in place during normal activities. Many patients report increased confidence in social situations."
        }
      ]
    },
    {
      category: "Health & Medical Concerns",
      icon: HelpCircle,
      faqs: [
        {
          question: "Are there any health conditions that affect denture treatment?",
          answer: "Certain conditions may affect treatment planning, including uncontrolled diabetes, osteoporosis, or medications that affect bone healing (for implant-supported dentures). Be sure to inform Dr. Khan of all medical conditions and medications during your consultation."
        },
        {
          question: "Will I experience pain with dentures?",
          answer: "New dentures may cause minor discomfort initially as you adjust. Sore spots can develop and are easily addressed with adjustments. With immediate dentures, some post-extraction discomfort is normal. Most pain issues are resolved quickly with proper fitting and adjustments."
        },
        {
          question: "Can dentures prevent bone loss?",
          answer: "Traditional dentures don't prevent jawbone loss, which naturally occurs after tooth loss. However, implant-supported dentures do help preserve jawbone by stimulating the bone, similar to natural tooth roots. This is one of their key advantages."
        },
        {
          question: "What if I have sensitive gums?",
          answer: "We can accommodate sensitive gums with soft reline materials that provide extra cushioning. Flexible dentures are also a good option for patients with sensitive tissues. Proper fit and regular adjustments help minimize gum irritation."
        },
        {
          question: "Can I get dentures if I still have some natural teeth?",
          answer: "Yes! Partial dentures are designed for patients with some remaining natural teeth. They fill the gaps left by missing teeth while preserving your healthy natural teeth. We can also discuss options if you need some teeth extracted."
        }
      ]
    },
    {
      category: "Appointments & Process",
      icon: HelpCircle,
      faqs: [
        {
          question: "How often should I visit for check-ups?",
          answer: "We recommend check-ups every 6-12 months to ensure your dentures fit properly, check for wear, and monitor your oral health. More frequent visits may be needed during the first year or if you experience any issues."
        },
        {
          question: "What happens during the first consultation?",
          answer: "During your free consultation, Dr. Khan will examine your mouth, take X-rays if needed, discuss your goals and concerns, explain your options, and create a personalized treatment plan. You'll have plenty of time to ask questions and understand the entire process."
        },
        {
          question: "Do you offer emergency denture services?",
          answer: "Yes! We understand denture emergencies happen. We offer same-day emergency repair services for broken dentures. Contact us immediately if you have a denture emergency, and we'll do our best to accommodate you quickly."
        },
        {
          question: "Can I bring someone with me to appointments?",
          answer: "Absolutely! We encourage patients to bring a family member or friend for support, especially for the initial consultation or major appointments. They can help you remember information and provide emotional support."
        },
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring: your insurance card (if applicable), a list of current medications, relevant medical history, existing dentures (if you have them), and any questions you'd like to ask. We'll take care of the rest!"
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Find answers to common questions about dentures, our services, and what to expect.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-gray-300 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No results found for "{searchTerm}"</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse all categories below.</p>
            </div>
          )}

          {filteredCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl text-blue-900">{category.category}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${catIndex}-${index}`}
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg text-blue-900 hover:text-blue-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8 text-center">
              <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl text-blue-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Can't find the answer you're looking for? Our friendly team is here to help. Contact us or schedule a free consultation to get personalized answers to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Call +123-456-7890
                </a>
                <a 
                  href="mailto:info@brightsmileclinic.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">Quick Denture Care Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🦷
                </div>
                <h3 className="text-xl text-blue-900 mb-3">Clean Daily</h3>
                <p className="text-gray-600">
                  Brush your dentures daily with a soft brush and denture cleaner to prevent staining and odor.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💧
                </div>
                <h3 className="text-xl text-blue-900 mb-3">Keep Moist</h3>
                <p className="text-gray-600">
                  Soak dentures overnight in water or denture solution to prevent them from drying out and warping.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  👨‍⚕️
                </div>
                <h3 className="text-xl text-blue-900 mb-3">Regular Check-Ups</h3>
                <p className="text-gray-600">
                  Visit us every 6-12 months to ensure proper fit and catch any issues early.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
