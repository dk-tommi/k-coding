import CanteenNode from "@/app/models/CanteenNode";
import CanteenService from "@/app/services/CanteenService";

describe("CanteenService", () => {
  test("searchCanteenNodes returns correct nodes", () => {
    const nodes: CanteenNode[] = [
      {
        id: "dk",
        name: "Denmark",
        canteens: [
          {
            id: "aar",
            name: "Aarhus",
            canteens: [
              { id: "1", name: "Aarhus Office Hub", canteens: [] },
              { id: "2", name: "Aarhus Technologies", canteens: [] },
            ],
          },
        ],
      },
      {
        id: "se",
        name: "France",
        canteens: [
          {
            id: "prs",
            name: "Paris",
            canteens: [
              { id: "1", name: "Paris Corp HQ", canteens: [] },
              { id: "2", name: "Startup Lab Paris", canteens: [] },
            ],
          },
        ],
      },
    ];

    // Test with different queries
    let result = CanteenService.searchCanteenNodes(nodes, "office");
    expect(result.length).toBe(1);
    expect(result[0]?.name).toBe("Denmark");
    expect(result[0]?.canteens.length).toBe(1);
    expect(result[0]?.canteens[0]?.name).toBe("Aarhus");
    expect(result[0]?.canteens[0]?.canteens.length).toBe(1);
    expect(result[0]?.canteens[0]?.canteens[0]?.name).toBe("Aarhus Office Hub");

    result = CanteenService.searchCanteenNodes(nodes, "france");
    expect(result.length).toBe(1);
    expect(result[0]?.name).toBe("France");
    expect(result[0]?.canteens.length).toBe(1);
    expect(result[0]?.canteens[0]?.name).toBe("Paris");
    expect(result[0]?.canteens[0]?.canteens.length).toBe(2);
  });
});
