import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { GET_STATION } from "../api/queries";
import Layout from "../../components/Layout";

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
    <>
      <h1 className="mt-10 sm:mt-40 mb-20 text-5xl leading-snug font-bold">
        <Link href="/">
          <span className="heading-link__icon" />
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
    </>
  );
};

export default function Station() {
  const router = useRouter();
  const { id } = router.query;
  /*
   * DEV NOTE: useRouter & useQuery do not resolve in order if appearence due to
   * hidden asyncronicity of React Hooks.
   * UseQuery can be mounted only after useRouter has resolved with a value.
   * This can be migitated with server side rendering
   */
  if (!id) return <p>Loading station details</p>;

  return (
    <Layout title={`Station ${id}`}>
      <StationDetails id={id} />
    </Layout>
  );
}
