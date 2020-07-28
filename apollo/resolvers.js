import data from '../data/worldCup.json';

const resolvers = {
  Query: {
    worldCups: () => data.worldCups,
    worldCup: (_, { id }) => data.worldCups.find((worldCup) => worldCup.id == id),
  },

  Mutation: {
    create_worldcup: (_, { id, name, description }) => console.log(id, name, description),
  },
};

export default resolvers;
