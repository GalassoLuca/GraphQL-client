const getCoursePromise = require('./api/get-course')
const debug = require('debug')('get-course:get')
const chalk = require('chalk')

async function getCourse(productID) {
  let response = await getCoursePromise(productID)

  debug(`Response for course with ID ${productID}`)

  if (response.error)
    throw new Error(response.error)

  console.log(chalk.bold.green(`OK getCourse with ID ${productID}`))
  console.log(JSON.stringify(response, null, 2))

  return response
}

const response = getCourse(2)
console.log(JSON.stringify(response, null, 2))
