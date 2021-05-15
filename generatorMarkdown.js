
function generateBadge(license) {
    if(license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if(license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
}

function generateMarkdown(response) {
    return `
# ${response.title}

  ${generateBadge(response.license)}

  ## Table of Content
  * [email](#email)
  * [username](#username)
  * [installation](#installation)
  * [description](#description)
  * [usage](#usage)
  * [license](#license)
  * [contributor](#contributor)
  * [test](#test)
  

## email:
    ${response.email}
 
## username:
[Github Profile](https://github.com/${response.username})

## installation:
    ${response.installation}
  
## description:
    ${response.description}

## usage
    ${response.usage}
  
## license:
    ${response.license}
  
## contributor:
    ${response.contributor}
  
## test:
    ${response.test}
  


  If you have any questions contact me at : ${response.email}


  `;
  }
  
module.exports = generateMarkdown;
  