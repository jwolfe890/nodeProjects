var fs = require("fs");

// fs.readFile("./hello.txt", function(err, buffer) {
//   console.log(buffer.toString());
// });

// var buffer = fs.readFileSync("./hello.txt");

// console.log(buffer.toString());

// console.log("Reading File.");

// fs.writeFile("./hello.txt", "This is a test file!", function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Write Successful");
//   }
// });

fs.appendFile("./hello.txt", "This is a test file!", function(err) {
  if (!err) {
    console.log("Success");
  }
});
