import { Tree } from "@/types";

const tree: Tree = {
  locations: {
    "aarhus-technologies": {
      name: "Aarhus Technologies",
      parents: {
        aarhus: {},
      },
    },
    "aarhus-office-hub": {
      name: "Aarhus Ofifce Hub",
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
    "redondance-test": {
      name: "redondance",
      parents: {
        "redondance-group-a": {},
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
    "redondance-group-a": {
      name: "Redondance Group A",
      parents: {
        "redondance-group-b": {},
      },
    },
    "redondance-group-b": {
      name: "Redondance Group B",
      parents: {
        "redondance-group-c": {},
      },
    },
    "redondance-group-c": {
      name: "Redondance Group B",
      parents: {
        "redondance-group-a": {},
      },
    },
  },
  partnerId: "partner-1",
};

export default tree;
