import axios from "axios";
/*
 * ... or whatever your Ajax flavor is.
 * This file is mostly warmed up copypasta with personal ketchup on top.
 * In production, resolvers should filter out all data that is never queried from GraphQL.
 */

export const resolvers = {
  Query: {
    getStations: async () => {
      try {
        const stations = await axios.get(
          "https://api.test.virtaglobal.com/stations/"
        );
        return stations.data;
      } catch (error) {
        throw error;
      }
    },

    getStation: async (_, args) => {
      try {
        const station = await axios.get(
          `https://api.test.virtaglobal.com/stations/${args.id}`
        );
        // Optimization notes:
        // const  {data,we,,dont,want,...rest} = station.data;
        // return rest;
        return station.data;
      } catch (error) {
        throw error;
      }
    },
  },
};
