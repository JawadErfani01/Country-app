import React from "react";
import { useGlobalContext } from "../../../context";
import {FaSearch} from 'react-icons/fa'
function SearchForm() {
  const { searchCoutry, Search, FilterByRegion, Country } = useGlobalContext();

  return (
    <div className="flex justify-center flex-col font-serif items-center pb-4">
      <h2 className="text-center text-3xl mt-6 m-4 capitalize">
        search countray name
      </h2>
      <div className="flex lg:flex-row flex-col justify-center items-center p-6 dark:shadow-xl  dark:shadow-slate-600  w-5/6 sm:w-2/3 shadow-xl">
        <div className="lg:flex-1 relative w-full  lg:mb-0  mb-4">
          <input
            type="text"
            onChange={(e) => searchCoutry(e.target.value)}
            value={Search}
            name="name"
            className="w-full mr-4  rounded-full shadow-lg border  text-slate-800 focus:outline-none pl-10 px-4 lg:px-12 py-2 "
            placeholder="Name..."
          />
          <span className="absolute top-3 left-5 opacity-50 dark:text-slate-800 "><FaSearch /></span>
        </div>
        <div className="flex-2 mx-4">
          <select
            onChange={(e) => FilterByRegion(e.target.value)}
            className="select"
            name="region"
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <span className="mx-3 ">NCountries: {Country.length}</span>
        </div>
      </div>
    </div>
  );
}
export default React.memo(SearchForm);
