
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
      <div className="bg-white p-8 minecraft-border h-full flex flex-col justify-between">
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
      quote: "Maximally ne hamari digital presence ko ekdum transform kar diya. Their AI-powered approach is truly revolutionary for our brand!",
      author: "PRIYA SHARMA",
      company: "TechStart India",
      rating: 5,
      result: "3 mahine mein 312% increase in qualified leads"
    },
    {
      quote: "The pixel-perfect designs combined with AI strategies gave our brand a competitive edge in the crowded Indian market. Totally worth it!",
      author: "VIKRAM MEHTA",
      company: "Innovate Solutions Pvt Ltd",
      rating: 5,
      result: "278% ROI on marketing spend with outstanding customer response"
    },
    {
      quote: "Maximally ke saath kaam karna was a game-changer for our startup. Their data-driven approach helped us identify opportunities we didn't even know existed.",
      author: "ANJALI PATEL",
      company: "Growth Ventures India",
      rating: 4,
      result: "48% reduction in customer acquisition cost within first quarter"
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
