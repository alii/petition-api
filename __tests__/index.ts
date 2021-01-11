import { api } from "../src";
import { Petition } from "../src/interfaces";

describe("petition-api", () => {
  let petitions: Petition[] = [];
  beforeEach(async () => (petitions = await api.all()));

  test("Should fetch a list of all petitions", async () => {
    expect(petitions.length).toBeGreaterThan(0);
  }, 10000);

  test("Should fetch a single petition", async () => {
    const first = petitions[0];
    expect(first).toBeTruthy();

    const petition = await api.one(first.id);
    expect(petition).toBeTruthy();
  });

  test("Get an array of all petition IDs", async () => {
    const ids = await api.ids(petitions);
    expect(ids.length).toBeGreaterThan(0);
  });
});
