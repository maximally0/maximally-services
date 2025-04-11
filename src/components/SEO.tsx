
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "Maximally – AI x Marketing, Pixel by Pixel",
  description = "Maximally is an AI-first digital marketing agency helping startups scale with automation, design, and strategy. Not your average agency 👾",
  image = "/lovable-uploads/maximally-social.png",
  url = "https://maximally.in"
}: SEOProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/logo.png",
    "sameAs": [
      "https://instagram.com/maximally.in",
      "https://linkedin.com/company/maximallysupplements"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
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
