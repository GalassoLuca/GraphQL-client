const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

const query = `
query getCourse($courseID: Int!) {
  course(id: $courseID) {
      title
      author
      description
      topic
      url
  }
}
`

module.exports = function getCoursePromise(courseID) {
  console.log(chalk.bold(`\nCalling getCoursePromise query for course with id ${courseID}`))
  return client.request(query, { courseID })
}
