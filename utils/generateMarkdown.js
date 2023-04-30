// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache License 2.0") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "BSD 3-Clause") {
    return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "BSD 3-Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
  } else if (license === "Apache 2.0") {
    return `
## License

This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).`;
  } else if (license === "GPL 3.0") {
    return `
## License

This project is licensed under the [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).`;
  } else if (license === "BSD 3-Clause") {
    return `
## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title} 

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## License

${renderLicenseBadge(data.license)}`;

return markdown;
}


module.exports = generateMarkdown;
