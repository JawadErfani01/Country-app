import React from "react";

function DetailCountry({ item }) {
  const { name, flag, population, region, capital } = item;
  return (
    <div className="mx-3 my-4   transform  duration-300 hover:scale-110  rounded-lg shadow-2xl bg-white pb-4">
      <img
        src={flag}
        alt={name}
        className="shadow-lg w-full h-32 rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{name}</h3>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital}</p>
      </div>
    </div>
  );
}

export default DetailCountry;
