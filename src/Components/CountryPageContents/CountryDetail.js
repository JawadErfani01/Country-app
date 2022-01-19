import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
function Detail() {
  const { state } = useLocation();
  const {
    name,
    flag,
    population,
    region,
    subregion,
    capital,
    area,
    nativeName,
    languages,
    borders,
    callingCodes,
    numericCode,
  } = state;
  console.log(state);
  let history = useNavigate();
  const getHome = () => history("/");
  return (
    <div className="ml-16 m-8 mt-4 ">
      <button
        className="px-6 flex py-2 mb-2 rounded-full text-lg bg-slate-800 text-white border hover:text-black hover:bg-white"
        onClick={getHome}
      >
        <span className="py-1 mr-2">
          <BiArrowBack />
        </span>
        back
      </button>
      <div className="flex  mx-auto p-6 pt-5  py-[-14] rounded-lg shadow-slate-400 bg-slate-50 dark:bg-slate-600 ">
        <div className="flex-1 mt-0 ">
          <img
            src={flag}
            alt={name}
            className="shadow-lg transform ml-1 cursor-pointer mb-6 duration-300 hover:scale-110 rounded-tl-lg rounded-tr-lg"
          />

          <div className="font-bold flex justify-between text-lg  mt-4 mx-4">
            <h3>NativeName: {nativeName}</h3>
            <p>Capital: {capital}</p>
          </div>
          <div className="font-sans flex justify-between   mt-4 mx-4">
            <p>Population: {population}</p>
            <p>Area: {area}</p>
          </div>
        </div>
        <div className="flex-1 m-4 font-sans ml-16 text-lg px-4 py-2">
          <p className="py-3"><span className=" font-bold">Region:  </span>{region}</p>
          <p className="py-3"><span className=" font-bold">SubRegion:  </span>{subregion}</p>
          <p className="py-3"><span className=" font-bold">CallingCode:  </span>{callingCodes}</p>
          <p className="py-3"><span className=" font-bold">NumericCode:  </span>{numericCode}</p>
          <p className="py-3"><span className=" font-bold">Languages:  </span> {languages.map((language) => language.name + ", ")}</p>
          <p className="py-3"><span className=" font-bold">Borders:  </span> {borders.map((border) => <span className="mx-2">{border + ","}</span>)}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
