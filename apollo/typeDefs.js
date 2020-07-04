import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    worldCups: [worldCups]
  }

  type worldCups {
    id: String
    name: String
    description: String
    img: String
  }
`;

export default typeDefs;
