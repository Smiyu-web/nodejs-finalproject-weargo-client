import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero_wrap">
      <img
        // src="https://namagomi-days.com/wp-content/uploads/2019/02/sea.jpg"
        src="https://images.unsplash.com/photo-1611002303091-048f93f3ce76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
        alt="weargo_top"
        className="hero_img "
      />
      <div className="">
        <h2 className="absolute h-full top-0 bottom-0 my-auto">
          TODAY'S OUTFIT
        </h2>
      </div>
    </div>
  );
};

export default Hero;
