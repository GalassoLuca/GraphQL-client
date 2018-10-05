const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

class Course {
  static getByID(courseID) {
    console.log(chalk.bold(`\nCalling getCoursePromise query for course with id ${courseID}`))

    const query = `
      query getCourse($courseID: Int!) {
        course(id: $courseID) {
          title
          author
          description
          topic
          url
        }
      }`

    return client.request(query, { courseID })
  }
}

module.exports = Course
