import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { GET_STATION } from "../api/queries";
import Layout from "../../components/Layout";

// const GET_STATION = gql`
//   query($id: ID!) {
//     getStation(id: $id) {
//       station_ID
//       inuse
//       connected
//       disabled
//       available
//       name
//       free_usage
//       onetimepayment
//       sockets
//       available
//       sockets
//       maxpower
//       seller {
//         currency
//         onetimeminimum
//       }
//     }
//   }
// `;

// TODO proptypes

const StationDetail = ({ label, textvalue, children }) => (
  <div className="mb-4">
    <p className="text-xl sm:text-base text-gray-500 mb-1">{label}</p>
    <p className="text-xl sm:text-base">{textvalue}</p>
    {children}
  </div>
);

const StationDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_STATION, {
    variables: { id },
  });

  if (loading) return <p>Loading station details</p>;
  if (error) return <p>Could not load station details for {id}</p>;
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
  // Iterate this list with StationDetail.
  // Use a view model to transform values to display values.

  return (
    <Layout title={name}>
      <h1 className="mt-10 sm:mt-40 mb-20 text-5xl leading-snug font-bold">
        <Link href="/">
          <span className="heading-link-icon" />
        </Link>
        {name}
      </h1>
      <div className="sm:h-80 rounded-md bg-white p-6">
        <div className="sm:grid sm:grid-cols-4 sm:gap-4">
          <StationDetail label="Name" textvalue={name} />
          <StationDetail
            label="Status"
            textvalue={available === 1 ? "Available" : "Offline"}
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
    </Layout>
  );
};

export default function Station() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
  });

  const router = useRouter();
  const { id } = router.query;
  if (!id) return <p>Loading station details</p>;

  return (
    <ApolloProvider client={client}>
      <StationDetails id={id} />
    </ApolloProvider>
  );
}
