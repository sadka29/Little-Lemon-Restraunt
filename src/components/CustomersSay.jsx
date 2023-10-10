import React from "react";
import me from "../images/me.jpeg";

const CustomersSay = () => {
  return (
    <section className="my-10 bg-[#EDEFEE] px-60 py-20">
      <h1 className=" font-medium text-2xl text-center  mb-10">Testimonials</h1>
      <div className=" grid grid-cols-4 gap-4">
        <div className=" bg-white rounded-lg py-4 px-4 w-100">
          <p>⭐⭐⭐</p>
          <div className=" flex justify-start gap-5 items-center">
            <img className=" rounded-xl w-16" src={me} alt="" />
            <h1>Nadaara</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            soluta.
          </p>
        </div>
        <div className=" bg-white rounded-lg py-4 px-4 w-100">
          <p>⭐⭐⭐</p>
          <div className=" flex justify-start gap-5 items-center">
            <img className=" rounded-xl w-16" src={me} alt="" />
            <h1>Nadaara</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            soluta.
          </p>
        </div>
        <div className=" bg-white rounded-lg py-4 px-4 w-100">
          <p>⭐⭐⭐</p>
          <div className=" flex justify-start gap-5 items-center">
            <img className=" rounded-xl w-16" src={me} alt="" />
            <h1>Nadaara</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            soluta.
          </p>
        </div>
        <div className=" bg-white rounded-lg py-4 px-4 w-100">
          <p>⭐⭐⭐</p>
          <div className=" flex justify-start gap-5 items-center">
            <img className=" rounded-xl w-16" src={me} alt="" />
            <h1>Nadaara</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            soluta.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default CustomersSay;
