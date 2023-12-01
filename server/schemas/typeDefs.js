const typeDefs = `
  type  Book {
    _id: ID
    authors: String
    description: String
    bookId:String
    image: String
    link: String
    title: String
  }

type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    user(id: String): [User]
    users: [User]
  }

  type Mutation {
  addUser(username: String, email: String, password: String): Auth
  login(email: String, password: String): Auth
  saveBook(input: BookInput): User
  removeBook(bookId: ID): User
}

type Auth {
  token: String!
  user: User!
}


input BookInput {
  authors: [String]
  description: String
  title: String
  externalBookId: ID
  image: String
  link: String
}

`;

module.exports = typeDefs;
