
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Maximally"
        description="The page you're looking for doesn't exist. Return to Maximally's homepage for AI-powered marketing solutions."
        type="website"
      />
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-press-start mb-4">404</h1>
        <p className="text-lg mb-8">Oops! Page not found.</p>
        <Link to="/" className="text-maximally-blue hover:underline">
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
