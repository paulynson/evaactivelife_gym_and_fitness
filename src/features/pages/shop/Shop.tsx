// import React from 'react'
import { useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import shop_hero_one from "../../../assets/shop_hero_one.jpg";
import shop_hero_two from "../../../assets/shop_hero_two.jpg";
import shop_hero_three from "../../../assets/shop_hero_three.jpg";
import shop_hero_four from "../../../assets/shop_hero_four.jpg";
import ShopProductsPage from "./ShopProductsPage";
import { Helmet } from "react-helmet";

const Shop = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop | EvaactiveLife Gym and Fitness</title>
        <link rel="canonical" href="https://evaactivelifegym.netlify.app/shop" />
      </Helmet>
      {/* <section className="flex flex-col items-center justify-center relative ">
        <h1 className="lg:text-6xl text-4xl font-bold text-green-600 mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Membership
        </h1>
        <img
          src={membership_hero}
          alt="Gym"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      </section> */}
      {/* Carousel Section */}
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
        >
          <div>
            <img src={shop_hero_one} className="rounded-lg" />
            {/* <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse
              incidunt maxime dolor, eaque ratione autem quae. Perferendis aut
              excepturi quas deserunt autem magnam provident.
            </p> */}
          </div>
          <div>
            <img src={shop_hero_two} className="rounded-lg" />
            {/* <p className="legend">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse
              incidunt maxime dolor, eaque ratione autem quae. Perferendis aut
              excepturi quas deserunt autem magnam provident.
            </p> */}
          </div>
          <div>
            <img src={shop_hero_three} className="rounded-lg" />
            {/* <div className="legend">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
              </p>
            </div> */}
          </div>
          <div>
            <img src={shop_hero_four} className="rounded-lg" />
            {/* <div className="legend">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
              </p>
            </div> */}
          </div>
        </Carousel>
      </div>
      <ShopProductsPage />
    </div>
  );
};

export default Shop;
