```js
import { $ } from "@kisoo/min-query";

$(".btn").click((event) => {
  console.log("this is clicked", event.target);
});

console.log("number of buttons", $(".btn").length());
```
