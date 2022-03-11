import { translate } from "@docusaurus/Translate";
import { ESIClubsCardProps } from "esi-types";

export const ESIClubsList: ESIClubsCardProps[] = [
  {
    name: "CODE",
    description: translate({
      message: "Club Of Data Engineers, the IT club at ESI",
      description: "code esi desc",
    }),
    image: "img/clubs/code.png",
    url: "https://codeesi.com",
    linkedIn: "https://www.linkedin.com/company/codesi19",
  },
  {
    name: "ENACTUS",
    description: translate({
      message: "Enactus ESI, the official ESI students entrepreneurship club",
      description: "enactus esi description",
    }),
    image: "img/clubs/enactus.png",
    url: "https://enactus.codeesi.com",
    linkedIn: "https://www.linkedin.com/company/enactus-esi",
  },
];
