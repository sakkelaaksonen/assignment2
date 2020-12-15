import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { GET_STATIONS } from "./api/queries";

const icon = (availability) =>
  availability === 1
    ? "/images/icon-available.png"
    : "/images/icon-offline.png";

const text = (availability) => (availability === 1 ? "Available" : "Offline");

const StationCards = () => {
  const { loading, error, data } = useQuery(GET_STATIONS);
  // TODO fancy spinner or container with image. Talk with Designer
  // Implement app-level standard loader and import here

  if (loading) return <p>Loading...</p>;

  // TODO app-level standard error component, import here
  if (error) return <p>Error :(</p>;

  return data.getStations.map(({ name, available, station_ID }) => (
    <div
      className="my-2 flex py-5 px-4 bg-white rounded-md"
      key={`key-${station_ID}`}
    >
      <div className="flex-1">
        <h2 className="font-bold text-xl sm:text-base">
          <span className=" hover:text-gray-500 hover:underline">
            <Link href={`/stations/${station_ID}`}>{name}</Link>
          </span>
        </h2>
      </div>
      <div className="w-24">
        <div className="bg-gray-200 rounded-full">
          <div className="inline-block ml-1 align-middle">
            <img
              className="inline-block station-list__icon align-middle"
              src={icon(available)}
              height="16"
              width="16"
            />
          </div>
          <span className="md:container mx-auto text-base sm:text-xs leading-3 pl-2 align-middle">
            {text(available)}
          </span>
        </div>
      </div>
    </div>
  ));
};

export default function Home() {
  return (
    <Layout title="Your Stations">
      <h1 className="mt-10 sm:mt-40 mb-20 text-5xl font-bold">Your stations</h1>
      <StationCards />
    </Layout>
  );
}
