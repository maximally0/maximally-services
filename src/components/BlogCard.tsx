
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const BlogCard = ({ slug, title, excerpt, imageUrl, date }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="pixel-card block p-4 cursor-pointer">
      <div className="relative h-44 mb-4 overflow-hidden border-2 border-maximally-dark">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-2 font-jetbrains">
        <Calendar size={14} className="mr-1" />
        <span>{date}</span>
      </div>
      <h3 className="font-press-start text-sm md:text-base mb-2 line-clamp-2">{title}</h3>
      <p className="font-jetbrains text-sm text-gray-700 line-clamp-3">{excerpt}</p>
    </Link>
  );
};

export default BlogCard;
