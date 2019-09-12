const { readFileSync } = require('fs')
const { join } = require('path')
const readFile = path => readFileSync(join(__dirname, path), 'utf8')

const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

async function exec ({ query, variables }) {
  console.log(chalk.bold(`query: ${query}`))
  console.log(chalk.bold(`variables: ${variables}`))

  const q = readFile(`${query}.gql`)

  return client.request(q, variables)
    .then((response) => {
      console.log(JSON.stringify(response, null, 2))
    })
    .catch(e => {
      console.error(chalk.bold.red(' Error'))
      console.error(JSON.stringify(e))
    })
}

(async () => {
  await exec({ query: 'get-book', variables: { id: 2 } })
})()
