import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Loading from "../Extra/Loading";
import CountryList from "./CountryList";
function Country() {
  const { Country, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (Country.length === undefined) {
    return (
      <div className="text-center p-4">
        <h2 className=" text-red-600 text-3xl">there is no such as country</h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-auto">
        {Country.map((item, index) => (
          <Link to={"/Detail"} state={item} key={index}>
            <CountryList item={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default React.memo(Country);
