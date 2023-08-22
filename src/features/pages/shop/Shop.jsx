// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import shop_hero_one from "../../../assets/shop_hero_one.jpg";
import shop_hero_two from "../../../assets/shop_hero_two.jpg";
import shop_hero_three from "../../../assets/shop_hero_three.jpg";
import shop_hero_four from "../../../assets/shop_hero_four.jpg";
import ShopProductsPage from "./ShopProductsPage";

const Shop = () => {
  return (
    <div>
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
      <div className="my-8">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
        >
          <div>
            <img src={shop_hero_one} />
            {/* <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse
              incidunt maxime dolor, eaque ratione autem quae. Perferendis aut
              excepturi quas deserunt autem magnam provident.
            </p> */}
          </div>
          <div>
            <img src={shop_hero_two} />
            {/* <p className="legend">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse
              incidunt maxime dolor, eaque ratione autem quae. Perferendis aut
              excepturi quas deserunt autem magnam provident.
            </p> */}
          </div>
          <div>
            <img src={shop_hero_three} />
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
            <img src={shop_hero_four} />
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
