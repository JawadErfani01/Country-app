import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
function Pagination({
  postPerpage,
  totalPosts,
  paginate,
  setCurrentpage,
  Currentpage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++) {
    pageNumbers.push(i);
  }
  const checknum = (lastNum) => {
    console.log(lastNum);
    if (Currentpage >= lastNum) {
      return (Currentpage = 1);
    }
    if (Currentpage < 1) {
      return (Currentpage = lastNum);
    } else {
      return Currentpage + 1;
    }
  };
  const checknum2 = (lastNum) => {
    if (Currentpage >= lastNum) {
      return (Currentpage = 1);
    }
    if (Currentpage <= 1) {
      return (Currentpage = lastNum);
    } else {
      return Currentpage - 1;
    }
  };
  const Next = () => {
    setCurrentpage(() => checknum(pageNumbers.length));
  };
  const Previou = () => {
    setCurrentpage(() => checknum2(pageNumbers.length));
  };

  return (
    <div>
      <ul className="flex justify-center items-center   m-3 md:m-6  rounded-full mb-10">
        <span
          onClick={() => Previou()}
          className="px-2 md:px-5 py-2 md:py-3  text-white cursor-pointer rounded-lg m-1 bg-slate-600"
        >
          <FcPrevious />
        </span>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <button
                className="p-2 md:px-4 md:py-2 text-white cursor-pointer rounded-lg m-1 bg-slate-600"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}
        <span
          onClick={() => Next()}
          className="px-2 md:px-5 py-2 md:py-3 text-white cursor-pointer rounded-lg m-1 bg-slate-600"
              >
          <FcNext />
        </span>
      </ul>
    </div>
  );
}

export default Pagination;
