// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description:
  
  # Table of Contents

  - [Installation]
  - [Usage]
  - [Credits]
  - [License]
  - [Contribution]
  - [Tests]
  - [Questions]

  # Installation:

  # Usage:

  # Credits:

  # License:

  # Contribution:

  # Tests:

  # Questions:
`;
}

module.exports = generateMarkdown;
