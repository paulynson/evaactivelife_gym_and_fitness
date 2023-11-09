import React from "react";

interface PagesHerosProps {
  src: string;
  title: string;
  alt: string;
}

const PagesHeros: React.FC<PagesHerosProps> = ({ src, title, alt }) => {
  return (
    <section className="flex flex-col items-center justify-center relative text-center">
      <h1 className="lg:text-6xl text-4xl font-bold text-green-600 mb-4 absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-shadow-lg">
        {title}
      </h1>
      <img src={src} alt={alt} className="mb-4 rounded-lg shadow-lg w-full" />
    </section>
  );
};

export default PagesHeros;
