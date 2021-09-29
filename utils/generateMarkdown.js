function getLicenseLink(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `\n* [License](# license)\n`;
  }
}

function licenseContainer(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `License
    Project license: ${license}`;
  }
}

function getLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

function generateMarkdown(data) {
  return `## ${data.title}
  ${getLicenseBadge(data.license)}
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](Usage)
   ${getLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Test](#test)
  * [Question](#question)

  ## Installation
  Install dependencies in the command line with command: ${data.installation}
  ## Usage
  ${licenseContainer(data.license)} 
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
 
  ## Test
  Run tests with command: ${data.test}
  
  ## Question
  Questions? Email me at ${data.email}, or open an issue on [${data.github}](https://github.com/${data.github}). 
  `;
} 
module.exports = generateMarkdown
