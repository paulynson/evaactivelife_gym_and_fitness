/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";
import allVideos from "./allVideos";
import PagesHeros from "../pagesHeros/PagesHeros";
import hcr from "./vids/hcr.gif";

const video = () => {
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Videos | EvaActiveLife Gym and Fitness</title>
        <link
          rel="canonical"
          href="https://evaactivelifegym.netlify.app/videos"
        />
      </Helmet>
      {/* Hero Section  */}
      {/* Hero Section */}
      <PagesHeros src={hcr} title="Gym Videos" alt="Gym" />

      {/* Membership Details */}
      <article className="space-y-6 pt-16 text-[18px] text-center flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-center">
          Our Gym Vidoes Circle
        </h3>

        <p className=" text-center text-gray-300 leading-8 lg:max-w-4xl w-auto">
          We firmly believe that fitness and overall well-being are the
          cornerstone of a vibrant and fulfilling life.
        </p>
      </article>
      {/* Content */}
      <div className="grid grid-cols-12 gap-4  lg:py-32 py-8 px-4">
        {allVideos.map((video) => (
          <div
            className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 border-2 border-green-500 max-h-auto"
            key={video.id}
          >
            <video controls width="100%" height="500px">
              <source src={video.video} type="video/mp4" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default video;
