import React from "react";
import Country from "../Components/CountryPageContents/Country";
import SearchForm from '../Components/CountryPageContents/SearhForm/SearchForm'
function Home() {
  return (
    <div className="">
      <SearchForm />
      <Country />
    </div>
  );
}

export default Home;
