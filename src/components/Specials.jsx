import React from "react";
import pizza from "../images/pizza.svg";
import pasta from "../images/pasta.svg";
import fish from "../images/fish.svg";

const Specials = () => {
  return (
    <section className="my-10 mx-60">
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl font-medium">Specials</h1>
        <button className=" bg-[#EE9972] rounded-lg py-2 px-10 font-medium">
          See More...
        </button>
      </div>

      <div className=" grid grid-cols-3 gap-8 mt-5">
        <div className="bg-[#EDEFEE] rounded-lg">
          <img
            className=" w-full h-52 rounded-lg object-cover"
            src={fish}
            alt=""
          />
          <div className="flex justify-between items-center px-10 my-2">
            <h3 className=" text-lg font-medium">Fresh Fish</h3>
            <p className=" text-[#EE9972] font-medium">$3.5</p>
          </div>
          <p className=" px-10 my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
            mollitia iste. Obcaecati praesentium voluptatum soluta impedit
            explicabo provident, ipsam sed. Temporibus eos soluta excepturi cum
            officia fugit, molestiae harum.
          </p>
          <button className=" font-medium  px-10 mb-6 mt-3">Order online</button>
        </div>
        <div className="bg-[#EDEFEE] rounded-lg">
          <img
            className=" w-full h-52 rounded-lg object-cover"
            src={pasta}
            alt=""
          />
          <div className="flex justify-between items-center px-10 my-2">
            <h3 className=" text-lg font-medium">Fresh Pasta</h3>
            <p className=" text-[#EE9972] font-medium">$4.5</p>
          </div>
          <p className=" px-10 my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
            mollitia iste. Obcaecati praesentium voluptatum soluta impedit
            explicabo provident, ipsam sed. Temporibus eos soluta excepturi cum
            officia fugit, molestiae harum.
          </p>
          <button className=" font-medium  px-10 mb-6 mt-3">Order online</button>
        </div>
        <div className="bg-[#EDEFEE] rounded-lg">
          <img
            className=" w-full h-52 rounded-lg object-cover"
            src={pizza}
            alt=""
          />
          <div className="flex justify-between items-center px-10 my-2">
            <h3 className=" text-lg font-medium">Fresh Pizza</h3>
            <p className=" text-[#EE9972] font-medium">$10.5</p>
          </div>
          <p className=" px-10 my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
            mollitia iste. Obcaecati praesentium voluptatum soluta impedit
            explicabo provident, ipsam sed. Temporibus eos soluta excepturi cum
            officia fugit, molestiae harum.
          </p>
          <button className=" font-medium  px-10 mb-6 mt-3">Order online</button>
        </div>
      </div>
    </section>
  );
};

export default Specials;
