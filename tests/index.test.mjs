import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as api from "../dist/index.js";
test("repeated keys and decoding", () =>
  assert.deepEqual(api.parseQuery("?a=1&a=2&q=a+b").a, ["1", "2"]));
test("dangerous keys remain data", () =>
  assert.deepEqual(api.parseQuery("__proto__=safe").__proto__, ["safe"]));
test("round trip", () =>
  assert.deepEqual(api.parseQuery(api.stringifyQuery({ q: ["a b", "&"] })).q, [
    "a b",
    "&",
  ]));
