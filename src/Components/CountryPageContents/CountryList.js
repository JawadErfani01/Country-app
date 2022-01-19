import React from "react";

function DetailCountry({ item }) {
  const { name, flag, population, region, capital } = item;
  return (
    <div className="mx-10 sm:mx-2  md:mr-1 my-4 dark:bg-slate-600 dark:text-white    transform  duration-300 hover:scale-110  rounded-lg shadow-2xl bg-white pb-4">
      <img
        src={flag}
        alt={name}
        className="shadow-xl md:h-32  md:w-full rounded-tl-lg rounded-tr-lg"
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
