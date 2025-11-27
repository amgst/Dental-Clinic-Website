import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Check, Clock, DollarSign, AlertCircle } from "lucide-react";

interface ServiceDetailPageProps {
  serviceType: string;
}

export function ServiceDetailPage({ serviceType }: ServiceDetailPageProps) {
  const serviceData: Record<string, any> = {
    "complete-dentures": {
      title: "Complete Dentures",
      subtitle: "Full Upper or Lower Tooth Replacement",
      description: "Complete dentures are removable prosthetic devices designed to replace all teeth in the upper or lower jaw (or both). They consist of a gum-colored acrylic base that fits over your gums, with prosthetic teeth attached to create a natural-looking smile.",
      timeline: "4-8 weeks (3-6 appointments)",
      benefits: [
        "Restores full dental function for eating and speaking",
        "Natural-looking appearance customized to your face",
        "Improves facial structure and prevents sagging",
        "Boosts confidence and self-esteem",
        "Durable and long-lasting with proper care",
        "Can be adjusted or relined as needed"
      ],
      procedure: [
        {
          step: "Initial Consultation",
          description: "Dr. Khan examines your mouth, takes X-rays if needed, and discusses your goals and expectations. We'll explain the process and answer all your questions."
        },
        {
          step: "Impressions",
          description: "We take detailed impressions of your gums and jaw. These molds ensure your dentures will fit comfortably and securely."
        },
        {
          step: "Bite Registration",
          description: "We determine the correct relationship between your upper and lower jaws for proper alignment and function."
        },
        {
          step: "Try-In Appointment",
          description: "You'll try on a wax model of your dentures. This allows us to check the fit, appearance, and bite before finalizing the dentures."
        },
        {
          step: "Final Fitting",
          description: "Your completed dentures are fitted, and we make any final adjustments. You'll receive detailed care instructions."
        },
        {
          step: "Follow-Up Visits",
          description: "We schedule check-ups to ensure your dentures are comfortable and functioning properly. Minor adjustments can be made as needed."
        }
      ],
      aftercare: [
        "Remove and rinse dentures after eating",
        "Clean dentures daily with a soft brush and denture cleaner (not regular toothpaste)",
        "Soak dentures overnight in water or denture solution",
        "Rinse dentures before putting them back in your mouth",
        "Maintain good oral hygiene by cleaning your gums, tongue, and palate",
        "Handle dentures carefully to avoid dropping and breaking them",
        "Visit us regularly for check-ups and professional cleaning"
      ],
      faqs: [
        {
          question: "How long do complete dentures last?",
          answer: "With proper care, complete dentures typically last 5-10 years. However, they may need relining or adjustment as your mouth changes over time."
        },
        {
          question: "Will my dentures look natural?",
          answer: "Yes! We customize the shape, size, and color of your denture teeth to match your facial features and give you a natural-looking smile."
        },
        {
          question: "How long does it take to adjust to dentures?",
          answer: "Most patients adjust within 2-4 weeks. Initially, you may experience increased saliva production and minor speech changes, but these typically resolve quickly."
        },
        {
          question: "Can I eat normally with dentures?",
          answer: "Yes, but there's an adjustment period. Start with soft foods and gradually introduce harder foods. Avoid very sticky or hard foods that could damage or dislodge your dentures."
        },
        {
          question: "Do I need to use denture adhesive?",
          answer: "Well-fitting dentures often don't require adhesive. However, some patients prefer using a small amount for extra security, especially when eating."
        }
      ]
    },
    "partial-dentures": {
      title: "Partial Dentures",
      subtitle: "Acrylic & Metal-Framework Solutions",
      description: "Partial dentures are removable dental appliances that replace one or more missing teeth while you still have some natural teeth remaining. They fill gaps, restore function, and prevent your remaining teeth from shifting position.",
      timeline: "3-5 weeks (2-4 appointments)",
      benefits: [
        "Prevents remaining teeth from shifting",
        "Restores chewing ability and proper bite",
        "Improves speech clarity",
        "Maintains facial structure",
        "Cost-effective compared to dental implants",
        "Choice of acrylic or metal framework"
      ],
      procedure: [
        {
          step: "Examination & Planning",
          description: "We assess your remaining teeth, gum health, and determine the best type of partial denture for your needs (acrylic or metal framework)."
        },
        {
          step: "Impressions",
          description: "Precise impressions of your teeth and gums are taken to create a custom-fit partial denture."
        },
        {
          step: "Framework Try-In",
          description: "The metal or acrylic framework is tried in your mouth to ensure proper fit before adding the prosthetic teeth."
        },
        {
          step: "Final Fitting",
          description: "Your completed partial denture is placed, adjusted for comfort, and you'll learn how to insert and remove it properly."
        },
        {
          step: "Follow-Up",
          description: "We schedule a follow-up visit to make any necessary adjustments and ensure you're comfortable."
        }
      ],
      aftercare: [
        "Remove and clean after meals",
        "Brush your partial denture daily with denture cleaner",
        "Soak overnight in denture solution or water",
        "Continue brushing your natural teeth twice daily",
        "Use the clasps gently to avoid bending or breaking",
        "Store in a safe place when not wearing",
        "Visit regularly for check-ups"
      ],
      faqs: [
        {
          question: "What's the difference between acrylic and metal framework partial dentures?",
          answer: "Metal framework partials are stronger, thinner, and more durable. Acrylic partials are typically used as temporary solutions or when budget is a concern. Dr. Khan will recommend the best option for your situation."
        },
        {
          question: "Will people notice I'm wearing a partial denture?",
          answer: "Modern partial dentures are designed to be discreet. Metal clasps are placed to be as inconspicuous as possible, and the teeth match your natural ones."
        },
        {
          question: "Can I sleep with my partial denture in?",
          answer: "It's generally recommended to remove your partial denture at night to give your gums and remaining teeth a rest, and to prevent bacterial buildup."
        },
        {
          question: "How do I keep my remaining teeth healthy?",
          answer: "Continue your regular oral hygiene routine: brush twice daily, floss, and visit your dentist for regular check-ups and cleanings."
        }
      ]
    },
    "flexible-dentures": {
      title: "Flexible / Thermoplastic Partial Dentures",
      subtitle: "Comfortable, Metal-Free Alternative",
      description: "Flexible dentures are made from a lightweight, thin thermoplastic material (such as nylon) that adapts to the natural movement of your mouth. They're an excellent alternative to traditional partial dentures, especially for patients with metal allergies or those seeking a more comfortable, aesthetic option.",
      timeline: "2-4 weeks (2-3 appointments)",
      benefits: [
        "No visible metal clasps - more aesthetic",
        "Extremely comfortable and lightweight",
        "Biocompatible and hypoallergenic",
        "Flexible material adapts to mouth movement",
        "Stain and odor resistant",
        "Ideal for patients with metal sensitivities",
        "Less bulk than traditional partials"
      ],
      procedure: [
        {
          step: "Consultation",
          description: "Dr. Khan evaluates your suitability for flexible dentures and discusses the advantages and any limitations."
        },
        {
          step: "Impressions",
          description: "We take detailed impressions to create a precise, custom-fit flexible partial denture."
        },
        {
          step: "Try-In & Adjustments",
          description: "You try on your flexible denture. Since the material is softer, minimal adjustments are typically needed."
        },
        {
          step: "Final Delivery",
          description: "Your completed flexible denture is delivered with instructions on insertion, removal, and care."
        }
      ],
      aftercare: [
        "Clean daily with mild soap and warm water or specialized flexible denture cleaner",
        "Avoid hot water, which can warp the material",
        "Do not use abrasive cleaners or toothpaste",
        "Store in water when not wearing",
        "Handle gently despite their flexibility",
        "Regular dental check-ups to monitor fit"
      ],
      faqs: [
        {
          question: "Are flexible dentures as durable as traditional partials?",
          answer: "Flexible dentures are very durable but may not last as long as metal framework partials (typically 3-5 years). However, their comfort and aesthetics make them a popular choice."
        },
        {
          question: "Can flexible dentures be repaired if damaged?",
          answer: "Repairs are possible but more limited than with traditional dentures. Prevention through careful handling is key."
        },
        {
          question: "Do flexible dentures require special cleaning products?",
          answer: "Yes, use cleaners specifically designed for flexible dentures. Regular denture cleaners or toothpaste can damage the material."
        },
        {
          question: "Will my flexible denture become loose over time?",
          answer: "As with any denture, changes in your gums may affect fit. We can evaluate and recommend replacement or alternative solutions if needed."
        }
      ]
    },
    "immediate-dentures": {
      title: "Immediate Dentures",
      subtitle: "Same-Day Tooth Replacement",
      description: "Immediate dentures are placed in your mouth immediately after tooth extraction, so you never have to be without teeth. They serve as a temporary solution while your gums heal and can later be relined or replaced with permanent dentures.",
      timeline: "Fabricated before extractions, placed same day as tooth removal",
      benefits: [
        "No period without teeth",
        "Maintains your facial appearance during healing",
        "Protects extraction sites and aids healing",
        "Allows you to adjust gradually to wearing dentures",
        "Can continue work and social activities without interruption",
        "Can be relined or replaced with permanent dentures later"
      ],
      procedure: [
        {
          step: "Pre-Extraction Impressions",
          description: "Before your teeth are removed, we take impressions and measurements to fabricate your immediate dentures."
        },
        {
          step: "Denture Fabrication",
          description: "Your immediate dentures are made in our lab based on the impressions, designed to fit over your healing gums."
        },
        {
          step: "Tooth Extraction & Denture Placement",
          description: "On the day of extraction, your teeth are removed and the immediate dentures are placed right away."
        },
        {
          step: "Healing Period",
          description: "Your gums will heal and shrink over 6-8 months. During this time, you'll need periodic adjustments or relines."
        },
        {
          step: "Permanent Dentures",
          description: "Once healing is complete, we can reline your immediate dentures or create new permanent dentures for an optimal fit."
        }
      ],
      aftercare: [
        "Keep dentures in for the first 24 hours to control bleeding and swelling",
        "Follow all post-extraction care instructions",
        "Expect some initial discomfort and adjustment period",
        "Eat soft foods during the healing phase",
        "Attend all follow-up appointments for adjustments",
        "Clean gently during the initial healing period",
        "Expect that dentures will need relining as gums heal"
      ],
      faqs: [
        {
          question: "Why do immediate dentures need frequent adjustments?",
          answer: "After tooth extraction, your gums and bone will shrink and reshape as they heal. This causes the dentures to become loose, requiring relines or adjustments."
        },
        {
          question: "How long until I get my permanent dentures?",
          answer: "Typically 6-8 months after tooth extraction, once your gums have fully healed and stabilized."
        },
        {
          question: "Will immediate dentures fit as well as permanent ones?",
          answer: "Initially, the fit may not be as precise since they're made before extractions. However, with proper relines and adjustments, they function well during the healing period."
        },
        {
          question: "Can I eat normally with immediate dentures?",
          answer: "Start with soft foods and liquids. As you heal and adjust to the dentures, you can gradually introduce more foods. Avoid hard, sticky, or chewy foods initially."
        }
      ]
    },
    "repairs-relines": {
      title: "Denture Repairs & Relines",
      subtitle: "Expert Maintenance & Restoration",
      description: "Dentures can break, crack, or become loose over time due to wear, accidents, or changes in your mouth. We offer professional repair and relining services to restore your dentures to optimal condition and extend their lifespan.",
      timeline: "Same-day to 2 days depending on complexity",
      benefits: [
        "Quick turnaround - often same-day service",
        "Extends the life of your existing dentures",
        "More cost-effective than replacement",
        "Restores comfort and proper fit",
        "Emergency repair services available",
        "Professional workmanship and materials"
      ],
      procedure: [
        {
          step: "Repair Services",
          description: "Broken or cracked dentures: We repair fractures, replace broken teeth, and fix damaged clasps. Simple repairs can often be completed the same day."
        },
        {
          step: "Soft Relines",
          description: "A soft, pliable material is added to the tissue side of your denture to improve comfort. Ideal for patients with sensitive or sore gums. Lasts 1-2 years."
        },
        {
          step: "Hard Relines",
          description: "The entire tissue side is replaced with new acrylic for a precise fit. Recommended every 2-3 years as your mouth changes. Requires sending dentures to lab (1-2 days)."
        },
        {
          step: "Emergency Repairs",
          description: "We offer same-day emergency repairs for broken dentures so you're not left without teeth."
        }
      ],
      aftercare: [
        "Handle dentures carefully to prevent future breaks",
        "Don't attempt DIY repairs with household glues",
        "Clean dentures properly to prevent buildup",
        "Store safely when not wearing",
        "Have regular check-ups to catch issues early",
        "Consider relines every 2-3 years",
        "Replace dentures every 5-10 years"
      ],
      faqs: [
        {
          question: "Can all broken dentures be repaired?",
          answer: "Most breaks can be repaired, but severely damaged or very old dentures may be better replaced. Dr. Khan will assess and advise you."
        },
        {
          question: "Should I try to fix my denture myself?",
          answer: "No! Over-the-counter denture repair kits and household glues can cause further damage and may be toxic. Always have repairs done professionally."
        },
        {
          question: "How do I know if I need a reline?",
          answer: "Signs include: dentures slipping or moving when eating/talking, sore spots, difficulty chewing, food getting under dentures, or needing more adhesive."
        },
        {
          question: "How often should dentures be relined?",
          answer: "Generally every 2-3 years, as your gums and bone naturally change over time. Regular check-ups help determine the right timing."
        },
        {
          question: "Do you offer same-day relines?",
          answer: "We offer same-day soft relines. Hard relines typically require 1-2 days as they're done in our lab for optimal precision."
        }
      ]
    },
    "implant-supported": {
      title: "Implant-Supported Dentures",
      subtitle: "The Most Stable Denture Solution",
      description: "Implant-supported dentures are anchored to dental implants surgically placed in your jawbone. Unlike traditional dentures that rest on your gums, these dentures snap onto or are secured to implants, providing superior stability, comfort, and function.",
      timeline: "3-6 months total (includes implant placement and healing)",
      benefits: [
        "Maximum stability - no slipping or sliding",
        "Improved chewing power (70-80% of natural teeth)",
        "Prevents jawbone loss and preserves facial structure",
        "More natural feel and function",
        "No adhesives required",
        "Long-lasting solution (implants can last a lifetime)",
        "Increased confidence when eating and speaking",
        "Can be removable or fixed (permanent)"
      ],
      procedure: [
        {
          step: "Consultation & Planning",
          description: "Dr. Khan evaluates your bone density (via X-rays or CT scan) and overall health to determine if you're a candidate for implants. We discuss the number of implants needed (typically 2-6)."
        },
        {
          step: "Implant Placement",
          description: "Dental implants (titanium posts) are surgically placed into your jawbone. This is done by an oral surgeon or periodontist. You'll have temporary dentures during healing."
        },
        {
          step: "Healing Period",
          description: "The implants integrate with your jawbone over 3-6 months in a process called osseointegration. This creates a strong, stable foundation."
        },
        {
          step: "Abutment Placement",
          description: "Once healed, small connectors (abutments) are attached to the implants. These will hold your denture in place."
        },
        {
          step: "Denture Fabrication",
          description: "We create your custom denture designed to attach to the implants. This can be removable (snap-on) or fixed (permanent)."
        },
        {
          step: "Final Attachment",
          description: "Your implant-supported denture is attached to the implants and adjusted for perfect fit and function."
        }
      ],
      aftercare: [
        "Clean dentures daily and maintain excellent oral hygiene around implants",
        "Brush implant sites with a soft brush",
        "Remove snap-on dentures nightly for cleaning (if removable type)",
        "Use water flossers or special brushes around implants",
        "Attend regular dental check-ups and professional cleanings",
        "Avoid extremely hard foods that could stress implants",
        "Report any looseness or discomfort immediately"
      ],
      faqs: [
        {
          question: "How many implants do I need?",
          answer: "For a full arch, typically 2-4 implants for a removable denture, or 4-6 implants for a fixed (permanent) denture. Dr. Khan will recommend the best option for your case."
        },
        {
          question: "Am I a candidate for implant-supported dentures?",
          answer: "Most healthy adults are candidates. You need adequate jawbone density and healthy gums. Conditions like uncontrolled diabetes or heavy smoking may affect eligibility."
        },
        {
          question: "Is the surgery painful?",
          answer: "The procedure is done under local anesthesia (or sedation if preferred). Post-surgery discomfort is manageable with pain medication and typically resolves within a week."
        },
        {
          question: "What's the difference between removable and fixed implant dentures?",
          answer: "Removable (snap-on) dentures can be taken out for cleaning. Fixed dentures are permanently attached and can only be removed by a dentist. Fixed options feel most like natural teeth but require more implants."
        },
        {
          question: "How long do implant-supported dentures last?",
          answer: "The implants can last a lifetime with proper care. The denture itself may need replacement every 10-15 years due to normal wear."
        },
        {
          question: "Are implant-supported dentures worth the cost?",
          answer: "Many patients find them well worth the investment for the superior stability, function, and quality of life improvements they provide."
        }
      ]
    }
  };

  const service = serviceData[serviceType];

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-blue-900 mb-4">{service.title}</h1>
            <p className="text-xl text-blue-700 mb-6">{service.subtitle}</p>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg text-blue-900 mb-2">Timeline</h3>
                    <p className="text-gray-700">{service.timeline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg text-green-900 mb-2">Investment</h3>
                    <p className="text-gray-700">Contact us for a personalized quote and payment options</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-blue-900 mb-4 text-center">What to Expect</h2>
          <p className="text-center text-gray-600 mb-12">The step-by-step process for your treatment</p>
          <div className="space-y-6">
            {service.procedure.map((step: any, index: number) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-blue-900 mb-2">{step.step}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h2 className="text-3xl text-blue-900 mb-4">Aftercare & Maintenance</h2>
              <p className="text-gray-700 mb-6">Follow these guidelines to keep your dentures in excellent condition:</p>
            </div>
          </div>
          <ul className="space-y-3">
            {service.aftercare.map((tip: string, index: number) => (
              <li key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {service.faqs.map((faq: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free consultation with Dr. Khan to discuss {service.title.toLowerCase()} and create your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Book Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              Call +123-456-7890
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
