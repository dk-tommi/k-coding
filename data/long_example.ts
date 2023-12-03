import { Tree } from "@/types";

const tree: Tree = {
  locations: {
    "aarhus-tech-solutions": {
      name: "Aarhus Tech Solutions Office",
      parents: {
        aarhus: {},
      },
    },
    "copenhagen-finance-center": {
      name: "Copenhagen Finance Center Hub",
      parents: {
        copenhagen: {},
      },
    },
    "cph-innovation-hub": {
      name: "CPH Innovation Hub Office",
      parents: {
        copenhagen: {},
      },
    },
    "paris-corp-hq": {
      name: "Paris Corp HQ Office",
      parents: {
        paris: {},
      },
    },
    "startup-lab-paris": {
      name: "Startup Lab Paris Office",
      parents: {
        paris: {},
      },
    },
    "milan-business-center": {
      name: "Milan Business Center",
      parents: {
        milan: {},
      },
    },
    "milan-tech-hub": {
      name: "Milan Tech Hub",
      parents: {
        milan: {},
      },
    },
    "rome-lab": {
      name: "Rome Lab",
      parents: {
        rome: {},
      },
    },
    "munich-finance-hub": {
      name: "Munich Finance Hub",
      parents: {
        munich: {},
      },
    },
    "munich-innovation-center": {
      name: "Munich Innovation Center",
      parents: {
        munich: {},
      },
    },
    "berlin-tech-lab": {
      name: "Berlin Lab",
      parents: {
        berlin: {},
      },
    },
    "madrid-corp-office": {
      name: "Madrid Corp Office",
      parents: {
        madrid: {},
      },
    },
    "madrid-tech-lab": {
      name: "Madrid Tech Lab",
      parents: {
        madrid: {},
      },
    },
    "barcelona-tech-lab": {
      name: "Barcelona Tech Lab",
      parents: {
        barcelona: {},
      },
    },
  },
  groups: {
    denmark: {
      name: "Denmark",
      parents: {},
    },
    aarhus: {
      name: "Aarhus",
      parents: {
        denmark: {},
      },
    },
    copenhagen: {
      name: "Copenhagen",
      parents: {
        denmark: {},
      },
    },
    france: {
      name: "France",
      parents: {},
    },
    paris: {
      name: "Paris",
      parents: {
        france: {},
      },
    },
    italy: {
      name: "Italy",
      parents: {},
    },
    germany: {
      name: "Germany",
      parents: {},
    },
    spain: {
      name: "Spain",
      parents: {},
    },
    milan: {
      name: "Milan",
      parents: {
        italy: {},
      },
    },
    rome: {
      name: "Rome",
      parents: {
        italy: {},
      },
    },
    berlin: {
      name: "Berlin",
      parents: {
        germany: {},
      },
    },
    munich: {
      name: "Munich",
      parents: {
        germany: {},
      },
    },
    madrid: {
      name: "Madrid",
      parents: {
        spain: {},
      },
    },
    barcelona: {
      name: "Barcelona",
      parents: {
        spain: {},
      },
    },
  },
  partnerId: "partner-1",
};

export default tree;
