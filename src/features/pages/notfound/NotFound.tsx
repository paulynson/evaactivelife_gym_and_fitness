// import React from 'react'
import { Link } from "react-router-dom";
import notfound from "../../../assets/404.png";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Evaactivelife Gym and Fitness</title>
        <link rel="canonical" href="" />
      </Helmet>

      <section className="bg-white py-16 px-4">
        <div className="flex  justify-center items-center ">
          <img src={notfound} alt="Hero Image" className="w-[600px] h-auto rounded-lg lg:block" />
        </div>
        <div className="my-6 flex flex-col  justify-center items-center">
          <p className="lg:text-2xl text-xl my-6 text-slate-800 font-bold text-center">
            The Page you are looking for cannot be found!
          </p>
          <Link
            to="/"
            className="py-3 px-6 bg-green-400 text-white hover:bg-green-600 rounded-full font-bold"
          >
            Go back Home
          </Link>
        </div>
      </section>
    </section>
  );
};

export default NotFound;
