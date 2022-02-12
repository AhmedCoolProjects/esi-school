import { ESIClubsCardProps } from "esi-types";
import React from "react";

export function ClubCard(props: ESIClubsCardProps) {
  const { name, description, image, url, linkedIn } = props;
  return (
    <div className="w-full shadow-md shadow-gray-700 flex flex-col items-center p-3 space-y-3">
      <img
        className="w-[160px] h-[160px] rounded-full object-cover"
        src={image}
        alt={name}
      />
      <h1 className="text-2xl ">{name}</h1>
      <h1 className="text-base opacity-80 text-center ">{description}</h1>
      <div className="flex flex-row items-center justify-around py-3 w-full ">
        <a href={linkedIn} rel="noopener noreferrer" target="_blank">
          <img src="/img/logos/linkedin.svg" className="w-10 h-10" />
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src="/img/logos/web.svg"
            className="w-10 h-10 bg-cyan-500 rounded-full "
          />
        </a>
      </div>
    </div>
  );
}
