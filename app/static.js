const { GraphQLClient } = require('graphql-request')
const chalk = require('chalk')

const endpoint = 'http://localhost:4000/graphql'
const client = new GraphQLClient(endpoint)

async function getBook (id) {
  console.log(chalk.bold(`getBook with ID ${id}`))

  const query = `
    query getBook($id: Int!) {
      book(id: $id) {
        title
        author
        description
      }
    }`

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

getBook(2)
