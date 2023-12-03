import { Scope, Tree } from "@/types";
import * as React from "react";
import { useEffect, useState } from "react";
import CanteenService from "@/app/services/CanteenService";
import CanteenNode from "@/app/models/CanteenNode";
import { FaSearch } from "react-icons/fa";
import Checkbox from "@/components/Checkbox";

interface ScopeInputProps {
  value?: Scope;
  onChange?: (newValue: Scope) => void;
  tree?: Tree;
}

export default function ScopeInput({ value, onChange, tree }: ScopeInputProps) {
  const [canteens, setCanteens] = useState<(CanteenNode | null)[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedState, setCheckedState] = useState<{ [id: string]: boolean }>({});
  const [totalCount, setTotalCount] = useState(0);
  const [filteredCount, setFilteredCount] = useState(0);

  function countNodes(nodes: CanteenNode[]) {
    let count = 0;
    nodes.forEach((node) => {
      if (node !== null) {
        if (node.canteens.length === 0) {
          count += 1;
        }

        count += countNodes(node.canteens);
      }
    });

    return count;
  }

  useEffect(() => {
    if (!tree) return;

    const canteens = CanteenService.buildCanteenTree(tree);
    setCanteens(canteens);

    const initializeState = (nodes: (CanteenNode | null)[], state: { [id: string]: boolean }) => {
      nodes
        .filter((n) => n !== null)
        .forEach((node) => {
          state[node!.id] = false;
          initializeState(node!.canteens, state);
        });
    };

    const initialState = checkedState;
    initializeState(canteens, initialState);
    setCheckedState(initialState);
    setTotalCount(countNodes(canteens));
  }, [tree]);

  useEffect(() => {
    if (!tree) return;

    const filteredCanteens = CanteenService.searchCanteenNodes(CanteenService.buildCanteenTree(tree), searchQuery);
    setCanteens(filteredCanteens);
    setFilteredCount(countNodes(filteredCanteens));
  }, [searchQuery, tree]);

  const handleCheckboxChange = (id: string, isChecked: boolean, nodes: CanteenNode[], parentId?: string) => {
    setCheckedState((prev) => {
      const newState = { ...prev, [id]: isChecked };

      if (nodes.length > 0) {
        const updateChildCheckboxes = (childNodes: CanteenNode[]) => {
          childNodes.forEach((child) => {
            newState[child.id] = isChecked;
            if (child.canteens) {
              updateChildCheckboxes(child.canteens);
            }
          });
        };

        updateChildCheckboxes(nodes);
      }

      const findParentNode = (nodes: (CanteenNode | null)[], parentId: string | null): CanteenNode | undefined => {
        for (const node of nodes) {
          if (!node) continue;

          if (node.id === parentId) {
            return node;
          }

          const foundInChild = findParentNode(node.canteens, parentId);
          if (foundInChild) return foundInChild;
        }
        return undefined;
      };

      const updateParentCheckboxes = (parentId: string | undefined) => {
        if (!parentId) return;

        const parentNode = findParentNode(canteens, parentId);

        if (!parentNode) return;

        newState[parentNode.id] = parentNode.canteens.every((child) => newState[child.id]);

        if (parentNode.parentId) {
          updateParentCheckboxes(parentNode.parentId);
        }
      };

      updateParentCheckboxes(parentId);

      return newState;
    });
  };

  function GetTreeNodes(nodes: (CanteenNode | null)[]) {
    return (
      <>
        {nodes.map((canteen) => (
          <div key={canteen?.id} className="flex flex-col">
            <div className="mt-4 flex items-center gap-2">
              <Checkbox
                label={canteen?.name || ""}
                id={canteen?.id || ""}
                checked={checkedState[canteen!.id]}
                onChange={(e) => handleCheckboxChange(canteen!.id, e.target.checked, canteen!.canteens, canteen?.parentId)}
              />
            </div>

            {(canteen?.canteens ?? []).length > 0 && <div className="ml-6">{GetTreeNodes(canteen?.canteens ?? [])}</div>}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <h2 className="w-full text-center text-2xl font-semibold">Choose Locations</h2>
      <div className="flex w-full flex-col gap-4">
        <div className="relative mx-auto w-full pt-2 text-gray-600">
          <input
            className="border-1 h-10 w-full rounded-lg border-gray-100 bg-white px-5 pr-16 text-sm focus:outline-none"
            type="search"
            name="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mr-4 mt-5">
            <FaSearch className="h-4 w-4 fill-current" />
          </button>
        </div>

        <div className="flex flex-col gap-4">{canteens.length > 0 && GetTreeNodes(canteens)}</div>

        {searchQuery && (
          <div className="mt-6 flex items-center justify-center rounded-md bg-gray-200 p-4">
            <p>
              {totalCount - filteredCount} Locations outside of this search.{" "}
              <a
                className="font-bold underline"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchQuery("");
                }}
                role="button"
              >
                Show all
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
