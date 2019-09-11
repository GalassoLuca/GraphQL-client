const { readFileSync } = require('fs')
const { join } = require('path')
const readFile = path => readFileSync(join(__dirname, path), 'utf8')

const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

async function getCourceByID (courseID) {
  console.log(chalk.bold(`getCourse with ID ${courseID}`))

  const query = readFile('get-course.gql')
  const variables = { courseID }

  const response = await client.request(query, variables)

  console.log(JSON.stringify(response, null, 2))
}

getCourceByID(2)
