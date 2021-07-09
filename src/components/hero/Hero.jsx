import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero_wrap">
      {/* <div className="boxbackground">
        <div className="hero_box">
          <h2 className="hero_text">
            TODAY'S <br />
            OUTFIT
          </h2>
        </div>
      </div> */}
      <div className="flex h-72 justify-center items-center text-center">
        <div>
          <h1 className="font-league">wearout</h1>
          <p>we never have too much</p>
        </div>
        <div className="relative">
          <img src="/heroImag.png" alt="wearout" className="w-32" />
          <div className="circle_one"></div>
          <div className="circle_two"></div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
