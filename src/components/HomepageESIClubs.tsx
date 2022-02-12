import React from "react";
import { ESIClubsList } from "../constants";
import { ClubCard } from "./cards";

export function HomepageESIClubs() {
  return (
    <>
      <h1 className="font-semibold text-4xl underline text-center mt-4">
        ESI CLUBS
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-2 py-5 w-full container">
        {ESIClubsList.map((club, indx) => (
          <ClubCard key={indx} {...club} />
        ))}
      </div>
    </>
  );
}
