// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

} else if (license === 'ISC'){  
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'

} else if (license === 'GNUPLV3') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

} else {

  return '';
}

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else if (license === 'GNUPLV3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license. ${renderLicenseBadge(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

${data.description}

${renderLicenseSection(data.license)}

## Table of Contents

${data.tableOfContents.includes('installation') ? `- [Installation](#installation)` : ''}
${data.tableOfContents.includes('usage') ? `- [Usage](#usage)` : ''}
${data.tableOfContents.includes('credits') ? `- [Credits](#credits)` : ''}
${data.tableOfContents.includes('features') ? `- [Features](#features)` : ''}
${data.tableOfContents.includes('how to contribute') ? `- [How to Contribute](#how-to-contribute)` : ''}
${data.tableOfContents.includes('test') ? `- [Test](#test)` : ''}

${data.Installation ? `## Installation

${data.Installation}` : ''}

${data.usages ? `## Usage

${data.usages}` : ''}

${data.credits ? `## Credits

${data.credits}` : ''}

${data.Features ? `## Features

${data.Features}` : ''}

${data.Contributions ? `## How to Contribute

${data.Contributions}` : ''}

${data.Tests ? `## Tests

${data.Tests}` : ''}

`;
}

module.exports = generateMarkdown;
