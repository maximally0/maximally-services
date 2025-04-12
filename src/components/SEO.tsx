
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  city?: string;
  schema?: object;
}

export const SEO = ({
  title = "AI Marketing Agency in Chandigarh | Digital Branding Services | Maximally",
  description = "Top-rated AI marketing agency in Chandigarh, Delhi & Dehradun. Transform your startup with AI-powered digital marketing, branding & paid advertising services.",
  canonicalUrl = "https://maximally.in",
  ogImage = "/lovable-uploads/maximally-social.png",
  type = "website",
  city = "Chandigarh",
  schema
}: SEOProps) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Maximally",
    "description": description,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}${ogImage}`,
    "areaServed": ["Chandigarh", "Delhi", "Dehradun", "Global"],
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Chandigarh",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://www.linkedin.com/company/maximally",
      "https://twitter.com/maximallyai",
      "https://instagram.com/maximally.in"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Location */}
      <meta name="geo.region" content="IN-CH" />
      <meta name="geo.placename" content={city} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
