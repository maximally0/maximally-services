
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const sections = [
  {
    title: "Custom AI Chatbot Development in Chandigarh",
    content: "Transform your customer service with AI-powered chatbots built specifically for your business needs. Our Chandigarh-based team specializes in developing intelligent conversational agents that handle customer queries 24/7."
  },
  {
    title: "Why Choose Maximally for Chatbot Development?",
    content: "We combine local expertise with global AI capabilities. Our chatbots are built using cutting-edge LLMs, designed to understand both English and regional languages, and seamlessly integrate with your existing systems."
  },
  {
    title: "Our Development Process",
    content: "We follow a systematic approach: requirement analysis, conversation flow design, AI model selection, development, testing, and continuous improvement. Every chatbot is customized to match your brand voice and business goals."
  }
];

const faqs = [
  {
    question: "How long does it take to develop a custom chatbot in Chandigarh?",
    answer: "Typically, we can deploy a basic chatbot within 2-3 weeks. More complex implementations with custom integrations may take 4-6 weeks."
  },
  {
    question: "What types of chatbots do you develop in Chandigarh?",
    answer: "We develop customer service bots, lead generation bots, booking assistants, and specialized AI agents for various business needs."
  },
  {
    question: "How much does chatbot development cost in Chandigarh?",
    answer: "Our chatbot solutions start from ₹49,500, with pricing varying based on complexity and features required."
  }
];

export default function ChatbotDevelopment() {
  return (
    <ServicePageTemplate
      title="AI Chatbot Development Services"
      description="Looking for custom chatbot development in Chandigarh? Maximally builds intelligent, conversion-focused chatbots that transform customer service and boost sales. Get started today!"
      keyword="chatbot development Chandigarh"
      sections={sections}
      faqs={faqs}
    />
  );
}
