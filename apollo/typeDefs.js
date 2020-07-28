import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    worldCups: [worldCup]
    worldCup(id: Int!): worldCup
  }

  type Mutation {
    create_worldcup(id: Int!, name: String!, description: String!): Boolean
  }

  type worldCup {
    id: String
    name: String
    description: String
    img: String
  }
`;

export default typeDefs;
