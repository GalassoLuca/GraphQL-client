const { getByID } = require('./api/get-course')
const debug = require('debug')('index')

async function getCourse (courseID) {
  const response = await getByID(courseID)

  debug(`getCourse with ID ${courseID}`)

  if (response.error) {
    throw new Error(response.error)
  }

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
