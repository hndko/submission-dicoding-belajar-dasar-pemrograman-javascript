import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Fungsi sum menjumlahkan dua angka positif dengan benar", () => {
  assert.strictEqual(sum(2, 6), 8, "2 + 6 seharusnya sama dengan 8");
  assert.strictEqual(sum(0, 0), 0, "0 + 0 seharusnya sama dengan 0");
});

test("Fungsi sum mengembalikan 0 jika salah satu argumen bukan angka", () => {
  assert.strictEqual(sum("a", 6), 0, '"a" + 6 seharusnya mengembalikan 0');
  assert.strictEqual(sum(2, null), 0, "2 + null seharusnya mengembalikan 0");
  assert.strictEqual(
    sum(undefined, 2),
    0,
    "undefined + 2 seharusnya mengembalikan 0"
  );
});

test("Fungsi sum mengembalikan 0 jika salah satu argumen bernilai negatif", () => {
  assert.strictEqual(sum(-2, 6), 0, "-2 + 6 seharusnya mengembalikan 0");
  assert.strictEqual(sum(5, -2), 0, "5 + -2 seharusnya mengembalikan 0");
});

test("Fungsi sum mengembalikan 0 jika kedua argumen bernilai negatif", () => {
  assert.strictEqual(sum(-2, -6), 0, "-2 + -6 seharusnya mengembalikan 0");
});
