
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  result: string;
  isActive: boolean;
}

const Testimonial = ({ quote, author, company, rating, result, isActive }: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "transition-all duration-500 absolute top-0 left-0 w-full h-full",
        isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}
    >
      <div className="bg-white p-4 sm:p-8 minecraft-border h-full flex flex-col justify-between">
        <div>
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                className={i < rating ? "text-maximally-blue fill-maximally-blue" : "text-gray-300"} 
              />
            ))}
          </div>
          <p className="font-jetbrains italic text-gray-700 mb-6">{quote}</p>
          <div className="font-press-start text-xs text-maximally-dark mb-2">{author}</div>
          <div className="font-jetbrains text-gray-600 text-sm">{company}</div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="font-jetbrains font-bold text-maximally-red">Result:</div>
          <div className="font-jetbrains text-gray-900">{result}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Maximally transformed our digital presence completely. Their AI-powered approach is truly revolutionary for our brand!",
      author: "PRIYA SHARMA",
      company: "TechStart India",
      rating: 5,
      result: "312% increase in qualified leads in just 3 months"
    },
    {
      quote: "The pixel-perfect designs combined with AI strategies gave our brand a competitive edge in the crowded market. Totally worth it!",
      author: "VIKRAM MEHTA",
      company: "Innovate Solutions Pvt Ltd",
      rating: 5,
      result: "278% ROI on marketing spend with outstanding customer response"
    },
    {
      quote: "Working with Maximally was a game-changer for our startup. Their data-driven approach helped us identify opportunities we didn't even know existed.",
      author: "ANJALI PATEL",
      company: "Growth Ventures India",
      rating: 4,
      result: "48% reduction in customer acquisition cost within first quarter"
    },
    {
      quote: "Maximally's AI-driven strategies helped us reach our target audience with unprecedented precision. The results speak for themselves.",
      author: "ROHIT JINDAL",
      company: "daP2",
      rating: 5,
      result: "189% increase in online engagement and 67% boost in conversions"
    },
    {
      quote: "Their innovative approach to digital marketing revolutionized how we connect with healthcare professionals. Exceptional service!",
      author: "DR. ANIL SHARMA",
      company: "Pavittar Pharmaceuticals",
      rating: 5,
      result: "153% growth in qualified lead generation within 6 months"
    },
    {
      quote: "The team at Maximally understood our unique challenges in the pharmaceutical space and delivered solutions that exceeded our expectations.",
      author: "MEERA KAPOOR",
      company: "Saach Pharmaceuticals",
      rating: 4,
      result: "42% increase in brand awareness and 87% boost in engagement metrics"
    },
    {
      quote: "Maximally's strategic approach helped us establish a strong digital presence in a highly competitive market. Exceptional results!",
      author: "RAJIV GUPTA",
      company: "Medquits Pharmaceuticals",
      rating: 5,
      result: "214% increase in website traffic and 76% higher conversion rate"
    },
    {
      quote: "The data-driven strategies implemented by Maximally helped us reach our target audience with precision. Highly recommended!",
      author: "SARAH MATHEWS",
      company: "Reachroot",
      rating: 4,
      result: "93% growth in qualified leads and 58% reduction in acquisition costs"
    },
    {
      quote: "Maximally's work on our hackathon's digital presence was nothing short of brilliant. They truly understand the tech community.",
      author: "AMAN SINGH",
      company: "CodeQuest/Hackskye Hackathon",
      rating: 5,
      result: "356% increase in participant registrations compared to previous year"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">RESULTS & REVIEWS</h2>
          <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our pixel-perfect AI solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
                result={testimonial.result}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="w-12 h-12 minecraft-border bg-white flex items-center justify-center hover:bg-maximally-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 border border-maximally-dark ${index === activeIndex ? 'bg-maximally-blue' : 'bg-white'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="w-12 h-12 minecraft-border bg-white flex items-center justify-center hover:bg-maximally-blue hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pixel-divider w-full mt-20"></div>
    </section>
  );
};

export default TestimonialsSection;
