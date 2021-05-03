import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className={"flex-1"}>
      <div className={"flex justify-center"}>
        <img
          className={"py-0 lg:py-10 h-32 w-32 lg:h-64 lg:w-64"}
          src={require("../../images/wolflogo.png")}
          alt={"wolfpack logo"}
        />
      </div>
      <div className={"flex flex-col justify-center"}>
        <h1
          className={
            "text-center text-white py-2 lg:py-3 text-4xl sm:text-4xl lg:text-5xl xl:text-6xl"
          }
        >
          EASTLAKE COMMUNITY SERVICE PORTAL
        </h1>

        <h2
          className={
            "text-center text-white py-2 lg:py-3 text-base sm:text-xl lg:text-2xl xl:text-3xl"
          }
        >
          <Link to="/login">Login to track service activities</Link>
        </h2>
        <h3
          className={
            "text-center font-light text-white py-2 lg:py-3 text-sm sm:text-base lg:text-lg xl:text-xl"
          }
        >
          A login link will be sent to your email address.
        </h3>
      </div>
    </div>
  );
};

export default Body;
