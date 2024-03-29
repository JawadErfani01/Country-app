import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Loading from "../Extra/Loading";
import CountryList from "./CountryList";
import Pagination from "./Pagination/Pagination";
function Country() {
  const { Country, loading } = useGlobalContext();
  const [Currentpage, setCurrentpage] = useState(1);
  const [postPerpage, setpostPerpage] = useState(25);
  const indexoflastpost = Currentpage * postPerpage;
  const indecoffirstpost = indexoflastpost - postPerpage;
  const currentCountry = Country.slice(indecoffirstpost, indexoflastpost);
  const paginate = (pageNumbers) => setCurrentpage(pageNumbers);
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
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:mx-2 mx-0 ">
        {currentCountry.map((item, index) => (
          <Link to={"/Detail"} state={item} key={index}>
            <CountryList item={item} />
          </Link>
        ))}
      </div>
      <Pagination
        postPerpage={postPerpage}
        totalPosts={Country.length}
        Currentpage={Currentpage}
        setCurrentpage={setCurrentpage}
        paginate={paginate}
      />
    </>
  );
}

export default React.memo(Country);
