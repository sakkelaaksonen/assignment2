import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// import { useRouter } from "next/router";

const GET_STATION = gql`
  query {
    getStation {
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

// TODO proptypes

const StationDetail = ({ label, textvalue, children }) => (
  <div className="mb-4">
    <p className="text-gray-500 mb-1">{label}</p>
    <p>{textvalue}</p>
    {children}
  </div>
);

const StationDetails = () => {
  const { loading, error, data } = useQuery(GET_STATION);

  if (loading) return <p>Loading station details</p>;
  if (error) return <p>Could not load station details</p>;
  const {
    inuse,
    connected,
    disabled,
    available,
    name,
    onetimepayment,
    sockets,
    maxpower,
    type,
    seller,
    status,
    current_type,
  } = data.getStation;

  // TODO transform query data to a list of objects with keyname as label and value as texvalue
  // Iterate this list with StationDetail

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mt-10 sm:mt-40 mb-20 text-5xl font-bold">
        <Link href="/">
          <img
            className="transform -translate-y-1 inline-block mr-4"
            src="/images/icon-arrow-black.png"
            height="48"
            width="48"
          />
        </Link>
        {name}
      </h1>
      <div className="h-80 rounded-md bg-white p-6">
        <div className="grid grid-cols-4 gap-4">
          <StationDetail label="Name" textvalue={name} />
          <StationDetail
            label="Status"
            textvalue={available === 0 ? "Available" : "Offline"}
          />
          <StationDetail label="Sockets" textvalue={sockets} />
          <StationDetail label="Maximum power" textvalue={maxpower} />
          <StationDetail
            label="Disabled"
            textvalue={disabled === 1 ? "Yes" : "No"}
          />
          <StationDetail
            label="Onetime Payment"
            textvalue={onetimepayment === 1 ? "Yes" : "No"}
          />
          {onetimepayment === 1 && (
            <StationDetail
              label="Onetime Payment minimum charge"
              textvalue={`${seller.onetimeminimum} ${seller.currency}`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default function Station() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="base-width mx-auto">
        <StationDetails />
      </div>
    </ApolloProvider>
  );
}
