const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (id) => {
      const foundUser = await User.findById(id);
      return foundUser;
    },
     users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    addUser: async (username, email, password) => {
      // Create and return the new School object
      return await User.create({ username, email, password });
    },
  },
};

module.exports = resolvers;
