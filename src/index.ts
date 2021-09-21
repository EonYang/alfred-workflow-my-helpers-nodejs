import alfy, { ScriptFilterItem } from "alfy";
import { transform } from "./lib/transform.js";

let result = "loading...";
try {
  result = JSON.stringify(transform(alfy.input));
} catch (err) {
  result = "error";
}
const items: ScriptFilterItem[] = [0, 1, 2].map((i) => ({
  title: "result",
  subtitle: result,
  arg: result,
}));

// alfy.log(alfy.input);
// console.log(items);
alfy.output(items);
