import React from "react";
import type { FC } from "react";
import Image from "next/image";
import type { Show } from "../types/Show";

interface PortfolioProps {
  shows: Show[];
  onChange: (id: string) => void;
  currentId?: string;
}

const Portfolio: FC<PortfolioProps> = ({ shows, onChange, currentId = shows[0].id }) => {
  const { title: currentTitle, episodes: currentEpisodes, imageUrl: currentImageUrl } = shows.find(show => show.id === currentId) || shows[0];

  return (
    <div className="flex flex-wrap-reverse sm:block">
      <ul className="flex justify-between border-t sm:border-t-0 sm:border-b pt-2 sm:pt-0 sm:pb-2 px-4 gap-1">
        {shows.map(({ id, imageUrlThumb, title }) => (
          <li key={id} className={`${currentId !== id ? "opacity-40" : ""}`}>
            <button type="button" onClick={() => onChange(id)} className="block">
              <Image src={imageUrlThumb} alt={title} width="50" height="75" loading="lazy" className="rounded block bg-gray-50" />
            </button>
          </li>
        ))}
      </ul>

      <section className="text-center mb-2 sm:mb-0 sm:mt-2 px-4 w-full">
        <h2 className="text-sm font-bold">{currentTitle}</h2>
        <p className="text-xs text-gray-400">Episodes: {currentEpisodes}</p>
        <Image src={currentImageUrl} alt={currentTitle} width="250" height="375" className="rounded-xl block mx-auto mt-2 bg-gray-50" key={currentId} />
      </section>
    </div>
  );
};

export default Portfolio;
