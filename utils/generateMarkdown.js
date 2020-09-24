// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description:
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

    ${data.description}

  # Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  for more information about licenses, please visit:
  [License](https://choosealicense.com/)

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}
  
  ## Questions:
  For any questions you may have, please visit my Github profile or email me.
  - [Github Profile](https://github.com/${data.github})
  - [Email](${data.email})
`;
}

module.exports = generateMarkdown;