import { assert, test } from "vitest";
import { foo } from "../src";

test("foo", () => {
  assert.equal(foo, "foo");
});
