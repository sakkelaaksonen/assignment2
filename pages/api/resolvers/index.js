import axios from "axios";

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },

    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },

    getStations: async () => {
      try {
        const stations = await axios.get(
          "https://api.test.virtaglobal.com/stations/"
        );
        // console.log(stations.data);
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
        return station.data;
      } catch (error) {
        throw error;
      }
    },
  },
};
