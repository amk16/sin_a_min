import React from 'react';

const PageSection = ({ id, backgroundClass = '', children }) => {
  return (
    <section
      id={id}
      className={`sticky top-0 h-screen flex items-center justify-center ${backgroundClass}`}
    >
      {children}
    </section>
  );
};

export default PageSection; 