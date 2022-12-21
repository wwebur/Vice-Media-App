import React from "react";
import type { FC } from "react";
import Image from "next/image";
import type Show from "../types/Show";

interface PortfolioProps {
  currentId?: string | string[];
  onChange: (id: string) => void;
  shows: Show[];
}

const Portfolio: FC<PortfolioProps> = ({ currentId, onChange, shows }) => {
  const currentShow = shows.find(show => show.id === currentId) || shows[0];

  return (
    <>
      <ul className="flex overflow-x-auto justify-between">
        {shows.map(({ id, product_image_url_thumb, title }) => (
          <li key={id}>
            <button type="button" onClick={() => onChange(id)}>
              <Image src={product_image_url_thumb} alt={title} width="50" height="75" loading="lazy" className="rounded" />
            </button>
          </li>
        ))}
      </ul>

      <div className="text-center mt-2">
        <h2 className="text-2xl font-bold">{currentShow.title}</h2>
        <p className="text-gray-400">Episodes: {currentShow.episodes}</p>
        <Image src={currentShow.product_image_url} alt={currentShow.title} width="500" height="750" className="rounded block mx-auto mt-2" />
      </div>
    </>
  );
};

export default Portfolio;
