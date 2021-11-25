//Module 3
const inquirer = require("inquirer");
// const fs = require('fs');
// const generatePage = require('./src/page-template');

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));

//verify that inquirer had been successfully imported
//console.log(inquirer);

//Module 1
//const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

//const [name, github] = profileDataArgs;

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem);
//   });
// };

// printProfileData(profileDataArgs);

// Module 2
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", generatePage(name, github), (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
