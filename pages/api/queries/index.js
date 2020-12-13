import { gql } from "apollo-boost";

export const GET_STATIONS = gql`
  query {
    getStations {
      name
      station_ID
      available
    }
  }
`;

export const GET_STATION = gql`
  query($id: ID!) {
    getStation(id: $id) {
      station_ID
      inuse
      connected
      disabled
      available
      name
      free_usage
      onetimepayment
      sockets
      available
      sockets
      maxpower
      seller {
        currency
        onetimeminimum
      }
    }
  }
`;
