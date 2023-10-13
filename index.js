// import inquirer f
// rom 'inquirer';
import inquirer from 'inquirer';
// var qr = require('qr-image'); 
import qr from 'qr-image'
import fs from 'fs'
// import { log } from 'console';
inquirer
  .prompt([{
    message:"type your url",
    name:"URL",
  },
   
  ])
  .then((answers) => {
    const url=answers.URL;
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
fs.writeFile("url.txt",url,(err)=>{
  console.log("THE DATA HAS BEEN SAVED");
})
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });