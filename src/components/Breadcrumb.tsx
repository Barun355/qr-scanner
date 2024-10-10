import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

  const crumbMap: any = {
    "dashboard": "Dashboard",
    "create-qr": "Create QR",
    "sl": "Single Link",
    "dl": "Double Link"
  }

  // Split the pathname into segments
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-800 py-2 px-4 text-gray-400 text-sm hidden lg:block">
      <ol className="flex items-center space-x-2">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{crumbMap[value]}</span> // Current Page, not clickable
              ) : (
                <Link to={to} className="hover:text-white">
                  {crumbMap[value]}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
