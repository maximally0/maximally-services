import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
}

export const SEO = ({
  title = "AI × Marketing Agency | Maximally",
  description = "We engineer brand performance with AI precision and real-world marketing psychology. Transform your digital presence with our AI-powered marketing solutions.",
  canonicalUrl = "https://maximally.in",
  ogImage = "/public/lovable-uploads/maximally-social.png",
  type = "website"
}: SEOProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "description": description,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/favicon.ico`,
    "sameAs": [
      "https://twitter.com/maximallyai",
      "https://linkedin.com/company/maximally"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chandigarh",
      "addressCountry": "IN"
    },
    "serviceType": "AI Marketing Services"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};