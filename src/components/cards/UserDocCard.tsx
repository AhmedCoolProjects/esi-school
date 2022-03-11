import { UserDocCardProps } from "@app-types";
import React from "react";

export function UserDocCard(props: UserDocCardProps) {
  const { name, avatar, profession, linkedin } = props;
  return (
    <div
      className="flex flex-row items-center justify-center
    relative bg-red-500 w-fit ">
      <div
        className="h-full flex flex-col
      items-center justify-between 
      px-4">
        <h3>{name}</h3>
        <h3
          className="font-normal text-base
        ">
          {profession}
        </h3>
        {linkedin ? <a href={linkedin}>Linkedin</a> : null}
      </div>
      <img
        className="rounded-full w-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] h-[70px] object-cover"
        src={avatar ? avatar : "img/favicon.ico"}
        alt={name}
      />
    </div>
  );
}
