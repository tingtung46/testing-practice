import { capitalize, reverseString } from "./index.js";

test("capitalize a string", () => {
  expect(capitalize("outdoor")).toMatch(/Outdoor/);
});

test("reverse a string", () => {
  expect(reverseString("hiking")).toMatch("gnikih");
});
