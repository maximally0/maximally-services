
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Accordion, AccordingTrigger, AccordionContent, AccordionItem } from './ui/accordion';
import { SEO } from './SEO';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  keyword: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  faqs: FAQItem[];
}

export const ServicePageTemplate = ({
  title,
  description,
  keyword,
  sections,
  faqs
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${title} | Maximally Chandigarh`}
        description={description}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-press-start text-4xl md:text-5xl text-maximally-dark mb-6">
            {title}
          </h1>
          <p className="font-jetbrains text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
          <Button 
            className="minecraft-border bg-maximally-blue hover:bg-maximally-dark text-white mt-8 px-8 py-6 text-lg font-jetbrains"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </Button>
        </motion.section>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <h2 className="font-press-start text-2xl text-maximally-dark mb-4">
              {section.title}
            </h2>
            <p className="font-jetbrains text-gray-600">
              {section.content}
            </p>
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="font-press-start text-2xl text-maximally-dark mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-jetbrains">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-jetbrains text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="font-press-start text-2xl mb-8">Ready to get started?</h2>
          <Button 
            className="minecraft-border bg-maximally-red hover:bg-maximally-dark text-white px-8 py-6 text-lg font-jetbrains"
            onClick={() => window.location.href = '/contact'}
          >
            Book a Free Consultation
          </Button>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
};
