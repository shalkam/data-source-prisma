const path = require('path');
const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: path.resolve(__dirname, 'prisma.graphql'),
  endpoint: 'http://localhost:4466',
});

export default {
  createUser: (name, info) =>
    prisma.mutation.createUser(
      {
        data: {
          name,
        },
      },
      info,
    ),
  users: info => prisma.query.users({}, info),
};
