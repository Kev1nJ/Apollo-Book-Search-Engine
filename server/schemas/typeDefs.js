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
    # Set the required fields for new schools
    addUser(username: String, email: String, password: String): User
  }
`;

module.exports = typeDefs;
