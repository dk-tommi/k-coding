import CanteenNode from "@/app/models/CanteenNode";
import { Tree, TreeNode } from "@/types";

export default class CanteenService {
  private static getCanteensForGroup(groupId: string, tree: Tree): CanteenNode[] {
    return Object.entries(tree.locations)
      .filter(([_, location]) => location.parents.hasOwnProperty(groupId))
      .map(([locationId, location]) => ({
        id: locationId,
        parentId: groupId,
        name: location.name,
        canteens: [],
      }));
  }

  private static buildNodes(groupId: string, tree: Tree, visistedNodes: Set<string>, parentId?: string): CanteenNode | null {
    if (visistedNodes.has(groupId)) {
      return null;
    }

    visistedNodes.add(groupId);

    let canteens = Object.keys(tree.groups)
      .filter((cId) => tree.groups[cId].parents.hasOwnProperty(groupId))
      .reduce((cNode, cGroupId) => {
        const child = CanteenService.buildNodes(cGroupId, tree, visistedNodes, groupId);

        if (child) cNode.push(child);

        return cNode;
      }, [] as CanteenNode[]);

    return {
      id: groupId,
      parentId,
      name: tree.groups[groupId].name,
      canteens: canteens.concat(CanteenService.getCanteensForGroup(groupId, tree)),
    };
  }

  public static buildCanteenTree(tree: Tree): CanteenNode[] {
    let visitedNodes = new Set<string>();

    return Object.keys(tree.groups).reduce((cNode, cGroupId) => {
      const child = CanteenService.buildNodes(cGroupId, tree, visitedNodes, undefined);
      if (child) cNode.push(child);
      return cNode;
    }, [] as CanteenNode[]);
  }

  // Search

  public static searchCanteenNodes(nodes: CanteenNode[], query: string): CanteenNode[] {
    return nodes
      .map((n) => CanteenService.searchNode(n, query.toLowerCase()))
      .filter((n) => n !== null)
      .map((n) => n as CanteenNode);
  }

  private static searchNode(node: CanteenNode, query: string): CanteenNode | null {
    if (node.name.toLowerCase().includes(query)) {
      return node;
    }

    const matchingChildren = node.canteens
      .map((n) => CanteenService.searchNode(n, query))
      .filter((child): child is CanteenNode => child !== null);

    if (matchingChildren.length > 0) {
      return { ...node, canteens: matchingChildren };
    }

    return null;
  }
}
