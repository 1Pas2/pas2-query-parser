import { parseQuery, stringifyQuery } from "../dist/index.js";
console.log(parseQuery("tag=a&tag=b"));
console.log(stringifyQuery({ q: "hello world" }));
