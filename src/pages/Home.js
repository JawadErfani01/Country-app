import React from "react";
import SearchForm from "../components/CountryPageContents/SearchForm";
import Country from "../components/CountryPageContents/Country";

function Home() {
  return (
    <div className="">
      <SearchForm />
      <Country />
    </div>
  );
}

export default Home;
