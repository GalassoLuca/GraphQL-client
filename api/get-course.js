const { GraphQLClient } = require('graphql-request')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

function getByID (courseID) {
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

  const variables = { courseID }

  return client.request(query, variables)
}

module.exports = { getByID }
