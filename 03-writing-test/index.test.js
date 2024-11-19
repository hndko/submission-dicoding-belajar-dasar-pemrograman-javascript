import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Fungsi sum menjumlahkan dua angka dengan benar", () => {
  assert.strictEqual(sum(1, 2), 3, "1 + 2 seharusnya sama dengan 3");
  assert.strictEqual(sum(-1, -1), -2, "-1 + -1 seharusnya sama dengan -2");
  assert.strictEqual(sum(0, 0), 0, "0 + 0 seharusnya sama dengan 0");
  assert.strictEqual(sum(2, -3), -1, "2 + -3 seharusnya sama dengan -1");
});
