import React from "react";
import red from "../images/red.svg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <header className="py-5 px-60 bg-[#495E57] flex justify-between items-center gap-20">
      <div className="  w-1/2 text-justify">
        <h1 className=" text-3xl font-medium">Little Lemon</h1>
        <p className="my-3 font-medium">Chicago</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          quibusdam similique vero soluta architecto! Dicta officia consequatur
          modi neque architecto, vel incidunt similique unde minima facere natus
          corrupti, esse fugiat placeat tempore eum at eius laborum debitis.
          Optio, accusamus.
        </p>

        <button className=" mt-10 bg-[#F4CE14] rounded-lg py-2 px-10 font-medium">
          <Link to={"/booking"}>Book Table</Link>
        </button>
      </div>
      <div className="">
        <img className=" rounded-lg" src={red} alt="" />
      </div>
    </header>
  );
};

export default CallToAction;
