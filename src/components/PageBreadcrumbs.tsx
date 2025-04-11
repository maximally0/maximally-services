
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const routes = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/experimentalservices', label: 'Experimental' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
];

export const PageBreadcrumbs = ({ currentPath }: { currentPath: string }) => {
  const filteredRoutes = routes.filter(route => route.path !== currentPath);

  return (
    <div className="container mx-auto px-6 py-4 font-jetbrains">
      <Breadcrumb>
        <BreadcrumbList>
          {filteredRoutes.map((route, index) => (
            <BreadcrumbItem key={route.path}>
              <BreadcrumbLink asChild>
                <Link 
                  to={route.path}
                  className="text-gray-600 hover:text-maximally-blue transition-colors"
                >
                  {route.path === '/' ? <Home className="w-4 h-4" /> : route.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
