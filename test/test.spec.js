import { capitalize } from "./index.js";

test("capitalize a string", () => {
  expect(capitalize("outdoor")).toMatch(/Outdoor/);
});
