
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    tags?: string[];
  };
  service?: {
    name?: string;
    price?: string;
    description?: string;
  };
}

export const SEO = ({
  title = "Maximally – AI x Marketing, Pixel by Pixel",
  description = title.includes("Pricing") 
    ? "Explore flexible pricing plans tailored to your startup's marketing needs."
    : title.includes("Contact")
    ? "Let's connect and build your marketing engine together!"
    : title.includes("Experimental")
    ? "Discover AI-driven experimental services to give your marketing an edge."
    : "Maximally is an AI-first digital marketing agency helping startups scale with automation, design, and strategy. Not your average agency 👾",
  image = "https://maximally.in/lovable-uploads/maximally-social.png",
  url = "https://maximally.in",
  type = "website",
  article,
  service
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://maximally.in${location.pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "BlogPosting" : type === "service" ? "Service" : "Organization",
    "name": "Maximally",
    "url": canonicalUrl,
    "logo": "https://maximally.in/lovable-uploads/maximally-social.png",
    "description": description,
    "sameAs": [
      "https://instagram.com/maximally.in",
      "https://linkedin.com/company/maximallysupplements"
    ],
    ...(article && {
      "headline": title,
      "datePublished": article.publishedTime,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "keywords": article.tags?.join(", ")
    }),
    ...(service && {
      "offers": {
        "@type": "Offer",
        "name": service.name,
        "price": service.price,
        "description": service.description
      }
    })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map(tag => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
