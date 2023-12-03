"use client";
import ScopeInput from "@/components/ScopeInput";
import TREES from "@/data";
import { useState } from "react";

const initialScope = { groups: {}, locations: {} };
const tree = TREES.Default; // change this for other data set

export default function Home() {
  const [scope, setScope] = useState(initialScope);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="mx-auto w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-12 shadow-md">
        <ScopeInput tree={tree} value={scope} onChange={setScope} />
      </div>
    </div>
  );
}
