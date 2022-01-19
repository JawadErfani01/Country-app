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
    <div className="md:ml-16 m-8 mt-4 ">
      <button
        className="px-3 md:px-5 md:py-2 md:text-lg flex py-1 mb-2 rounded-full text-md bg-slate-800 text-white border hover:text-black hover:bg-white"
        onClick={getHome}
      >
        <span className="py-1 mr-2">
          <BiArrowBack />
        </span>
        back
      </button>
      <div className="flex flex-col md:flex-row  mx-auto p-3 md:p-6 pt-5  py-[-14] rounded-lg shadow-lg shadow-gray-300 dark:shadow-slate-700 bg-gray-50 dark:bg-slate-600 ">
        <div className="flex-1 mt-0 ">
          <img
            src={flag}
            alt={name}
            className="shadow-lg transform ml-1 cursor-pointer mb-6 duration-300 hover:scale-110 rounded-tl-lg rounded-tr-lg"
          />

          <div className="font-bold md:flex justify-between text-lg  m-2 md:mt-4 md:mx-4">
            <h3>NativeName: {nativeName}</h3>
            <p className="mt-1 md:mt-0">Capital: {capital}</p>
          </div>
          <div className="font-bold md:flex justify-between  m-2 mb-0 md:mt-4 md:mx-4">
            <p>Population: <span className="font-medium">{population}</span></p>
            <p>Area: <span className="font-medium">{area}</span></p>
          </div>
        </div>
        <div className="flex-1  font-sans  md:ml-16 mt-0 text-lg m-2 md:px-4 md:py-1">
          <p className="my-2 md:py-2"><span className=" font-bold">Region:  </span>{region}</p>
          <p className="my-2 md:py-2"><span className=" font-bold">SubRegion:  </span>{subregion}</p>
          <p className="my-2 md:py-2"><span className=" font-bold">CallingCode:  </span>{callingCodes}</p>
          <p className="my-2 md:py-2"><span className=" font-bold">NumericCode:  </span>{numericCode}</p>
          <p className="my-2 md:py-2"><span className=" font-bold">Languages:  </span> {languages.map((language) => language.name + ", ")}</p>
          <p className="my-2 md:py-2"><span className=" font-bold">Borders:  </span> {borders.map((border) => <span className="mx-2">{border + ","}</span>)}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
