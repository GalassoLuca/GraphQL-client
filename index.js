const { getByID } = require('./api/get-course')
const chalk = require('chalk')

async function getCourse (courseID) {
  const response = await getByID(courseID)

  console.log(chalk.bold(`getCourse with ID ${courseID}`))

  if (response.error) {
    throw new Error(response.error)
  }

  console.log(JSON.stringify(response, null, 2))

  return response
}

getCourse(2)
