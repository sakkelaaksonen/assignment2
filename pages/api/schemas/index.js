import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type User {
        id: ID
        login: String
        avatar_url: String
    }

    type Stations {
        station_ID: ID
        custom_evse_id: ID
        location_ID: ID
        seller_ID: ID
        name: String
        connected: Int
        position: String
        available: Int
        lastconnect: String
        roaming_identifier_cpo: String
    }

    type Connector {
        connector_id: Int
        type: String
        current_type: String
        status: String
    }

    type Seller {
        reserveexpired: Int
        reserveexpire: Int
        is_private: Int
        onetimeminimum: Int
        currency: String
        stopcode_required: Int
        pricingratio: Float
        brand: String
        onetimepricingratio: Float
        PH_merchant_id: String
        roaming_identifier_cpo: String
    }

    type StationType {
        station_type_ID: Int
        vendor: String
        model: String
        sockettypes: String
        connectors: String
        rapidsockets: String
        selectsocket: String
        type_max_power: Int
        dlm_support: Int
        rfid_whitelist: Int
        instructions_url: String
        picture_url: String
        confluence_name: String
        stop_time: String
        heartbeat_interval: Int
        evse_info: String
        status_notification_slave: Int
        charging_profile_support: Int
        overriden_endpoint_template: String
        public_key_obtainable: Int
        change_max_current_limit_key: String
    }

    type Station {
        station_ID: Int
        custom_evse_id: Int
        station_type_ID: Int
        location_ID: Int
        seller_ID: Int
        inuse: String
        connected: Int
        disabled: Int
        available: Int
        name: String
        free_usage: Int
        onetimepayment: Int
        connector_info: Connector!
        seller: Seller!
        stationType: StationType!
        sockets: Int
        maxpower: String
        selectsocket: Int
        reservable: Int
        currency: String
        error: String
        errandpowercents: Int
        rapidpowercents: Int
        errandhourcents: Int
        rapidminutecents: Int
        transactionfeeAC: Int
        transactionfeeDC: Int
        transactionfee: Int
        otperrandpowercents: Int
        otprapidpowercents: Int
        otperrandhourcents: Int
        otprapidminutecents: Int
        otptransactionfeeAC: Int
        otptransactionfeeDC: Int
        otpcurrency: String
        otptransactionfee: Int
        rating: Int
        status: String
    }

    type Query {
        getUsers: [User]
        getUser(name: String!): User!
        getStations: [Stations]
        getStation(id: ID!): Station
    }
`;
