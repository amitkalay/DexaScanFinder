const assert = require("node:assert/strict");
const test = require("node:test");

test("sample failing assertion", () => {
  assert.equal(2, 4);
});
