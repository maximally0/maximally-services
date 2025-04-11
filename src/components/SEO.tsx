
import { Helmet } from 'react-helmet-async';

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
}

export const SEO = ({
  title = "Maximally | AI Digital Marketing Agency for Startups in India",
  description = title.includes("Pricing") 
    ? "Explore flexible pricing plans tailored to your startup's marketing needs."
    : title.includes("Contact")
    ? "Let's connect and build your marketing engine together!"
    : title.includes("Experimental")
    ? "Discover AI-driven experimental services to give your marketing an edge."
    : "Transform your business with AI-powered digital marketing, SEO services, and content creation. Expert marketing automation for startups and growing businesses in India. Get started today!",
  image = "https://maximally.in/lovable-uploads/maximally-social.png",
  url = "https://maximally.in",
  type = "website",
  article
}: SEOProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Organization",
    "name": "Maximally",
    "url": url,
    "logo": "https://maximally.in/lovable-uploads/maximally-social.png",
    "description": description,
    "sameAs": [
      "https://instagram.com/maximally.in",
      "https://linkedin.com/company/maximallysupplements"
    ],
    ...(article && {
      "datePublished": article.publishedTime,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "keywords": article.tags?.join(", ")
    })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url.replace('www.maximally.in', 'maximally.in')} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
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
