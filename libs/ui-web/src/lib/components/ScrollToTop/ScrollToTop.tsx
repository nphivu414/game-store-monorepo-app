import React from 'react';

export const ScrollToTop: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};
