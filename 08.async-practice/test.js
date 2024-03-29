import fs from "fs";
import util from "util";

// // callback
// fs.readFile("package.json", (error, file) => {
//   console.log("##### result #####");
//   console.log(file.toString());
// });

// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (error, file) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(file);
//       }
//     });
//   });
// }

const readFilePromise = util.promisify(fs.readFile);

try {
  const file = await readFilePromise("package.json");
  console.log(file.toString());
} catch (err) {
  console.error(err);
}
