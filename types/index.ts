export interface TreeNode {
  name: string;
  parents: {
    [groupId: string]: {};
  };
}

export interface Tree {
  locations: {
    [locationId: string]: TreeNode;
  };
  groups: {
    [groupId: string]: TreeNode;
  };
  partnerId: string;
}

export interface Scope {
  groups: {
    [groupId: string]: {};
  };
  locations: {
    [locationId: string]: {};
  };
}
