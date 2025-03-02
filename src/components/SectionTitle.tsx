import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight }) => {
  return (
    <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
      <span className="text-blue-400">{highlight}</span> {title.replace(highlight, '')}
    </h2>
  );
};

export default SectionTitle;