/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import hd from "../../../assets/products/hd.png";
import ar from "../../../assets/products/ar.png";
import bh from "../../../assets/products/bh.png";
import cm from "../../../assets/products/cm.png";
import mrk from "../../../assets/products/mrk.png";
import ps from "../../../assets/products/ps.png";
import sr from "../../../assets/products/sr.png";
import wb from "../../../assets/products/wb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopProductsPage = () => {
  // Animation
  useEffect(() => {
    AOS.init();
    // window.scrollTo({
    //   top: 0,
    //   behaviour: "smooth",
    // });
  }, []);
  return (
    <section className="container py-16 ">
      <h3 className="text-3xl text-center font-bold leading-normal mb-12">
        Our Products
      </h3>
      <section className="grid grid-cols-12 gap-x-4 gap-y-6">
        {/* Item 1 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={hd} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">Hand Dumble</h3>
            <p className="text-center text-slate-100 text-sm">₦2,500</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 2 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={ar} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">Ab Roller</h3>
            <p className="text-center text-slate-100 text-sm">₦5,500</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 3 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={bh} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">
              Bluetooth Headphone
            </h3>
            <p className="text-center text-slate-100 text-sm">₦15,000</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 4 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={cm} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">
              Cycling Machine
            </h3>
            <p className="text-center text-slate-100 text-sm">₦200,770</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 5 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={mrk} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">
              Mind Reader Kettlebell
            </h3>
            <p className="text-center text-slate-100 text-sm">₦3,200 per kg</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 6 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={ps} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">
              Pushup Stands
            </h3>
            <p className="text-center text-slate-100 text-sm">₦4,000</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 7 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={sr} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">
              Skipping Rope
            </h3>
            <p className="text-center text-slate-100 text-sm">₦1,800</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 1 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={wb} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 py-5">
            <h3 className="text-center my-2 text-xl font-bold">Water Bottle</h3>
            <p className="text-center text-slate-100 text-sm">₦2,200</p>
          </div>
          <div
            className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2"
            // data-aos="fade-down"
            // data-aos-duration="1000"
          >
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ShopProductsPage;
