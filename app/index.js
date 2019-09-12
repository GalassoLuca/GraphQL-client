const { readFileSync } = require('fs')
const { join } = require('path')
const readFile = path => readFileSync(join(__dirname, path), 'utf8')

const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

async function getBook (id) {
  console.log(chalk.bold(`getBook with ID ${id}`))

  const query = readFile('get-book.gql')
  const variables = { id }

  return client.request(query, variables)
    .then((response) => {
      console.log(JSON.stringify(response, null, 2))
    })
    .catch(e => {
      console.error(chalk.bold.red(' Error'))
      console.error(JSON.stringify(e))
    })
}

(async () => {
  await getBook(2)
})()
