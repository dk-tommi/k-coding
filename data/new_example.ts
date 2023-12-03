import { Tree } from "@/types";

const tree: Tree = {
  locations: {
    "aarhus-technologies": {
      name: "Aarhus Technologies",
      parents: {
        aarhus: {},
        new: {},
      },
    },
    "aarhus-office-hub": {
      name: "Aarhus Office Hub",
      parents: {
        aarhus: {},
      },
    },
    "copenhagen-towers": {
      name: "Copenhagen Towers",
      parents: {
        copenhagen: {},
      },
    },
    "cph-blox-hub": {
      name: "CPH Blox Hub",
      parents: {
        copenhagen: {},
        new: {},
      },
    },
    "paris-corp-hq": {
      name: "Paris Corp HQ",
      parents: {
        paris: {},
      },
    },
    "startup-lab-paris": {
      name: "Startup Lab Paris",
      parents: {
        paris: {},
      },
    },
  },
  groups: {
    new: {
      name: "New",
      parents: {},
    },
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
  },
  partnerId: "partner-1",
};

export default tree;
