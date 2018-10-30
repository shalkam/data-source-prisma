export default {
  Query: {
    users: (_, args, context, info) => context.users(info),
  },
  Mutation: {
    createUser: (_, { name }, context, info) => context.createUser(name, info),
  },
};
