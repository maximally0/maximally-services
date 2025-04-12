import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight, Package, Star, Globe, Instagram, Search, Target, FileText, Video, Zap, Trophy, Repeat, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface PricingItem {
  name: string;
  priceUSD: string;
  priceINR: string;
  description?: string;
}

interface PricingCategory {
  icon: React.ReactNode;
  title: string;
  items: PricingItem[];
  color: string;
  bgColor: string;
}

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('packages');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  // Exchange rate (approximate): 1 USD = 75 INR
  const exchangeRate = 75;

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'INR' : 'USD');
  };

  // Formatted price helper function
  const formatPrice = (usdPrice: number, currency: 'USD' | 'INR') => {
    if (currency === 'USD') {
      return `$${usdPrice}`;
    } else {
      const inrPrice = Math.round(usdPrice * exchangeRate);
      return `₹${inrPrice}`;
    }
  };

  const deliveryInfo = {
  title: "Delivery & Terms",
  items: [
    { name: "Standard Delivery Time", description: "3-5 business days for most deliverables" },
    { name: "Content Calendar", description: "Delivered within 7 days of onboarding" },
    { name: "Revisions", description: "Each asset includes up to 2 revisions" }
  ]
};

const categories: Record<string, PricingCategory> = {
    branding: {
      icon: <Star size={24} />,
      title: '🧠 Branding',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: [
        { name: 'Logo Design', priceUSD: '$29', priceINR: '₹1,999' },
        { name: 'Brand Kit (logo, fonts, colors)', priceUSD: '$69', priceINR: '₹4,999' },
        { name: 'Business Card / Letterhead Design', priceUSD: '$15', priceINR: '₹999' },
        { name: 'Social Media Branding Pack', priceUSD: '$29', priceINR: '₹1,999' }
      ]
    },
    websites: {
      icon: <Globe size={24} />,
      title: '🌐 Website Design',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: [
        { name: '1-Page Landing Website', priceUSD: '$69', priceINR: '₹4,999' },
        { name: '5-Page Business Website', priceUSD: '$139', priceINR: '₹9,999' },
        { 
          name: 'Basic E-commerce Website', 
          description: 'Includes up to 5 products, basic payment gateway setup, responsive design',
          priceUSD: '$239', 
          priceINR: '₹17,999' 
        },
        { name: 'Website Maintenance (Monthly)', priceUSD: '$15/month', priceINR: '₹999/month' }
      ]
    },
    social: {
      icon: <Instagram size={24} />,
      title: '📱 Social Media',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      items: [
        { name: 'Social Media Management (12 posts/month)', priceUSD: '$69/month', priceINR: '₹4,999/month' },
        { name: 'Reel Creation (4/month)', priceUSD: '$39/month', priceINR: '₹2,999/month' },
        { name: 'Instagram / Facebook Ads Management', priceUSD: '$59/month', priceINR: '₹3,999/month' },
        { name: 'Influencer Setup (per campaign)', priceUSD: '$29', priceINR: '₹1,999' }
      ]
    },
    seo: {
      icon: <Search size={24} />,
      title: '🔍 SEO',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      items: [
        { name: 'Basic SEO + Setup', priceUSD: '$39/month', priceINR: '₹2,999/month' },
        { name: 'Blog Strategy + 4 Articles', priceUSD: '$59/month', priceINR: '₹3,999/month' },
        { name: 'Google My Business Optimization', priceUSD: '$19', priceINR: '₹1,499' }
      ]
    },
    ads: {
      icon: <Target size={24} />,
      title: '📢 Paid Ads',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      items: [
        { name: 'Google Ads Management', priceUSD: '$59/month', priceINR: '₹3,999/month' },
        { name: 'Meta (FB/IG) Ads Management', priceUSD: '$49/month', priceINR: '₹3,499/month' },
        { name: 'Landing Page for Ad Campaigns', priceUSD: '$39', priceINR: '₹2,999' }
      ]
    },
    content: {
      icon: <FileText size={24} />,
      title: '✍️ Content Marketing',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      items: [
        { name: 'Blog Article (800–1000 words)', priceUSD: '$7', priceINR: '₹499' },
        { name: 'Email Copy (1 campaign)', priceUSD: '$9', priceINR: '₹599' },
        { name: 'Monthly Content Calendar', priceUSD: '$15', priceINR: '₹999' }
      ]
    },
    video: {
      icon: <Video size={24} />,
      title: '🎬 Video Content',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      items: [
        { 
          name: 'Template-Based Explainer (60 sec)', 
          description: 'Includes template animation and professional voiceover',
          priceUSD: '$99', 
          priceINR: '₹6,999' 
        },
        { 
          name: 'Custom Explainer Video', 
          description: 'Custom animation with 2 revisions',
          priceUSD: '$139', 
          priceINR: '₹9,999' 
        },
        { name: 'Product Demo / Promo Video', priceUSD: '$59', priceINR: '₹3,999' },
        { 
          name: 'Reels / Shorts (each)', 
          description: 'Client provides footage. Includes captions and 1 revision',
          priceUSD: '$15', 
          priceINR: '₹999' 
        }
      ]
    },
    influencer: {
      icon: <Star size={24} />,
      title: '🌟 Influencer Marketing',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: [
        { 
          name: 'Campaign Setup', 
          description: 'Covers discovery, outreach, and briefing for up to 3 micro-influencers',
          priceUSD: '$39', 
          priceINR: '₹2,999' 
        }
      ]
    },
    addons: {
      icon: <Zap size={24} />,
      title: '⚡ Add-Ons',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      items: [
        { name: 'Extra Reel', priceUSD: '$15', priceINR: '₹999' },
        { name: 'Extra Blog', priceUSD: '$7', priceINR: '₹499' },
        { name: 'Email Campaign', priceUSD: '$9', priceINR: '₹599' }
      ]
    },
    ai_consultancy: {
      icon: <Brain size={24} />,
      title: '🤖 AI Consultancy',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: [
        { 
          name: 'AI Integration Consultation',
          description: 'We help businesses integrate AI into their workflows, from automating tasks to leveraging AI for smarter decision-making',
          priceUSD: '$50',
          priceINR: '₹3,750'
        }
      ]
    },
    brand_consultancy: {
      icon: <Star size={24} />,
      title: '✨ Brand Consultancy',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: [
        {
          name: 'Brand Strategy Consultation',
          description: 'We guide startups and businesses through brand strategy, including naming, positioning, visual identity, and go-to-market storytelling',
          priceUSD: '$50',
          priceINR: '₹3,750'
        }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const packageCards = [
    {
      title: "Starter Kit",
      priceUSD: "$79",
      priceINR: "₹5,999",
      features: [
        "8 social media posts",
        "2 reels",
        "1 blog article",
        "1 email copy",
        "1 ad creative",
        "Basic SEO setup",
        "Monthly analytics report",
        "2 revisions per deliverable"
      ],
      color: "border-blue-400",
      bgColor: "bg-blue-50",
      btnColor: "bg-maximally-blue"
    },
    {
      title: "Growth Kit",
      priceUSD: "$199",
      priceINR: "₹14,999",
      popular: true,
      features: [
        "12 social media posts",
        "4 reels",
        "Complete ad management:",
        "• Ad copywriting",
        "• Target audience setup",
        "• Basic A/B testing",
        "• Weekly optimization",
        "2 blog articles",
        "SEO optimization",
        "Content calendar",
        "Bi-weekly reporting",
        "(Ad spend not included)"
      ],
      color: "border-red-400",
      bgColor: "bg-red-50",
      btnColor: "bg-maximally-red"
    },
    {
      title: "Full Stack Marketing",
      priceUSD: "$349",
      priceINR: "₹24,999",
      features: [
        "Full social media management",
        "Google & Meta ad management",
        "4 blog articles",
        "Complete SEO service",
        "Website maintenance & updates",
        "Branding support",
        "Custom analytics dashboard",
        "24-hour response time on business days",
        "Dedicated account manager"
      ],
      color: "border-purple-400",
      bgColor: "bg-purple-50",
      btnColor: "bg-maximally-dark"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <motion.div 
        className="pt-32 pb-20 px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="relative inline-block">
              <Badge 
                variant="outline" 
                className="absolute -top-8 left-1/2 -translate-x-1/2 border-maximally-blue text-maximally-blue minecraft-border"
              >
                AI x Marketing
              </Badge>
              <h1 className="font-press-start text-4xl md:text-5xl text-maximally-dark mb-6">
                Digital Marketing<br/>
                <span className="text-maximally-blue">Services That</span><br/>
                <span className="text-maximally-red">Convert.</span>
              </h1>
            </div>
            <p className="font-jetbrains text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Future-proof marketing solutions powered by AI. Built for brands that want to move fast and break records.
            </p>

            {/* Currency Toggle */}
            <div className="flex justify-center items-center mb-4">
              <Button 
                onClick={toggleCurrency}
                variant="outline"
                className="flex items-center gap-2 font-jetbrains text-sm px-4 py-2 border-2 border-maximally-dark hover:bg-maximally-blue hover:text-white"
              >
                <Repeat size={16} />
                {currency === 'USD' ? 'Switch to ₹ INR' : 'Switch to $ USD'}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={itemVariants}
          >
            {packageCards.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`pixel-card relative ${pkg.bgColor} overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-maximally-red text-white py-2 px-4 font-jetbrains rounded-none">
                      POPULAR
                    </Badge>
                  </div>
                )}

                <div className="p-8 bg-white bg-opacity-90">
                  <h3 className="font-press-start text-lg mb-4">{pkg.title}</h3>
                  <div className="mb-6">
                    <span className="font-jetbrains text-3xl font-bold">
                      {currency === 'USD' ? pkg.priceUSD : pkg.priceINR}
                    </span>
                    <span className="text-gray-600 font-jetbrains">/month</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 font-jetbrains">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a 
                    href="/contact"
                    className={`pixel-button ${pkg.btnColor} text-white font-jetbrains font-medium py-3 w-full flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">GET STARTED</span>
                    <ArrowRight size={16} className="relative z-10" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white minecraft-border p-6">
            <h2 className="font-press-start text-2xl mb-6">ALL SERVICES</h2>

            <Accordion type="single" collapsible className="w-full">
              {Object.entries(categories).map(([key, category]) => (
                <AccordionItem key={key} value={key} className="border-b border-gray-200">
                  <AccordionTrigger className="py-4 flex items-center">
                    <div className={`mr-3 p-2 rounded-full ${category.bgColor}`}>
                      {category.icon}
                    </div>
                    <span className="font-jetbrains font-medium">{category.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                      {category.items.map((item, i) => (
                        <div 
                          key={i}
                          className={`border-2 border-maximally-dark p-4 ${category.bgColor} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform bg-white bg-opacity-90`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-jetbrains font-bold">{item.name}</h3>
                            <span className={`font-jetbrains font-bold ${category.color}`}>
                              {currency === 'USD' ? item.priceUSD : item.priceINR}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-gray-600 font-jetbrains text-sm">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <div className="pixel-card bg-white p-10">
              <Trophy size={48} className="text-maximally-blue mx-auto mb-4" />
              <h2 className="font-press-start text-2xl mb-4">NEED A CUSTOM PACKAGE?</h2>
              <p className="font-jetbrains text-gray-600 mb-8 max-w-2xl mx-auto">
                We understand that every business is unique. Let's create a custom solution that fits your specific needs and budget.
              </p>
              <motion.a 
                href="/contact" 
                className="pixel-button bg-maximally-red text-white font-jetbrains font-bold py-4 px-8 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">CONTACT US</span>
                <ArrowRight size={16} className="relative z-10" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <FooterSection />
    </div>
  );
};

export default Pricing;