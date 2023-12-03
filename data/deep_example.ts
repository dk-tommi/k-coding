import { Tree } from "@/types";

const tree: Tree = {
  locations: {
    "deep-location": {
      name: "Deep location",
      parents: {
        parent10: {},
      },
    },
  },
  groups: {
    parent1: {
      name: "Parent 1",
      parents: {},
    },
    parent2: {
      name: "Parent 2",
      parents: {
        parent1: {},
      },
    },
    parent3: {
      name: "Parent 3",
      parents: {
        parent2: {},
      },
    },
    parent4: {
      name: "Parent 4",
      parents: {
        parent3: {},
      },
    },
    parent5: {
      name: "Parent 5",
      parents: {
        parent4: {},
      },
    },
    parent6: {
      name: "Parent 6",
      parents: {
        parent5: {},
      },
    },
    parent7: {
      name: "Parent 7",
      parents: {
        parent6: {},
      },
    },
    parent8: {
      name: "Parent 8",
      parents: {
        parent7: {},
      },
    },
    parent9: {
      name: "Parent 9",
      parents: {
        parent8: {},
      },
    },
    parent10: {
      name: "Parent 10",
      parents: {
        parent9: {},
      },
    },
  },
  partnerId: "partner-1",
};

export default tree;
