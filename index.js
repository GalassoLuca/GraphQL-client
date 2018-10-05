const {getByID} = require('./api/get-course')
const debug = require('debug')('get-course:get')
const chalk = require('chalk')

async function getCourse(courseID) {
  let response = await getByID(courseID)

  debug(`Response for course with ID ${courseID}`)

  if (response.error)
    throw new Error(response.error)

  console.log(chalk.bold.green(`OK getCourse with ID ${courseID}`))
  console.log(JSON.stringify(response, null, 2))

  return response
}

(async () => {
  const response = await getCourse(2)
  console.log(JSON.stringify(response, null, 2))
})()

getCourse(2).then(response => {
  console.log(JSON.stringify(response, null, 2))
})

