import Translate from "@docusaurus/Translate";
import React from "react";
import { ESIClubsList } from "../constants";
import { ClubCard } from "./cards";

export function HomepageESIClubs() {
  return (
    <>
      <h1 className="font-semibold text-4xl underline text-center mt-4">
        <Translate>ESI CLUBS</Translate>
      </h1>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 py-5 w-full container">
        {ESIClubsList.map((club, indx) => (
          <ClubCard key={indx} {...club} />
        ))}
      </div>
    </>
  );
}
