import data from '../data/worldCup.json';

const resolvers = {
  Query: {
    worldCups: () => data.worldCups,
  },
};

export default resolvers;
