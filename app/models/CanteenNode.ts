export default interface CanteenNode {
  id: string;
  parentId?: string;
  name: string;
  canteens: CanteenNode[];
}
