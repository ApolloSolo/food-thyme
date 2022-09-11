import React from "react";
import { Link } from "react-router-dom";

const Nationality = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row md:flex-wrap md:justify-center items-center text-center mt-4 text-white font-bold">
      <Link
        to={"/nationality/american"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 american"
      >
        <div>
          <h2>American</h2>
        </div>
      </Link>
      <Link
        to={"/nationality/italian"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 italian"
      >
        <div>
          <h2>Italian</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/chinese"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 chinese"
      >
        <div>
          <h2>Chinese</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/indian"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 indian"
      >
        <div>
          <h2>Indian</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/mexican"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 mex"
      >
        <div>
          <h2>Mexican</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/middle_eastern"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 me"
      >
        <div>
          <h2>Middle Eastern</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/japanese"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 japanese"
      >
        <div>
          <h2>Japanese</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/greek"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 greek"
      >
        <div>
          <h2>Greek</h2>
        </div>
      </Link>

      <Link
        to={"/nationality/thai"}
        className="w-[95%] md:w-[45%] h-[160px] md:h-[275px] rounded-lg m-2 shadow1 thai"
      >
        <div>
          <h2>Thai</h2>
        </div>
      </Link>
    </div>
  );
};

export default Nationality;
