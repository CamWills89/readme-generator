// function to generate markdown for README
function generateMarkdown(userResponse) {
console.log(userResponse);

  return `
  # ${userResponse.title}
  
  ## Description:
  ![License](https://img.shields.io/badge/License-${userResponse.license}-blue.svg "License Badge")

    ${userResponse.description}

  # Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  ${userResponse.installation}

  ## Usage:
  ${userResponse.usage}

  ## Credits:
  ${userResponse.credits}

  ## License:
  for more information about licenses, please visit:
  
  [License](https://choosealicense.com/)

  ## Contributing:
  ${userResponse.contributing}

  ## Tests:
  ${userResponse.tests}
  
  ## Questions:
  For any questions you may have, please visit my Github profile or email me.
  - [Github Profile](https://github.com/${userResponse.github})
  - [Email](${userResponse.email})
`;
}

module.exports = generateMarkdown;