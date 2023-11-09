/* eslint-disable no-unused-vars */

import SitupDungbell from "../../../assets/products/SitupDungbell.png";
import GymBench from "../../../assets/products/GymBench.png";
import Sprayner from "../../../assets/products/Sprayner.png";

const ShopProductsPage = () => {
  return (
    <section className="container py-16 ">
      <h3 className="text-3xl text-center font-bold leading-normal mb-12">Our Products</h3>
      <section className="grid grid-cols-12 gap-x-4 gap-y-6">
        {/* Item 1 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={SitupDungbell} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 pt-5">
            <h3 className="text-center my-2 text-lg px-3">Sit Up Bench and Resistance Rope</h3>
            <p className="text-center text-slate-100 text-xl font-bold my-2 px-5 py-3">₦35,000</p>
          </div>
          <div className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 2 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={GymBench} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 pt-5">
            <h3 className="text-center my-2 text-lg px-3">
              Adjustable Bench with Leg Extension & Leg Curl
            </h3>
            <p className="text-center text-slate-100 text-xl font-bold my-2 px-5 py-3">₦120,000</p>
          </div>
          <div className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <button className="hidden group-hover:animate-bounce group-hover:block font-bold bg-green-400 hover:bg-green-600 px-4 shadow-lg py-2 rounded-full p-2">
              Add to Cart
            </button> */}
          </div>
        </div>
        {/* Item 3 */}
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 shadow-lg relative group ">
          <img src={Sprayner} alt="Hero Image" className=" object-contain w-full" />
          <div className="bg-gray-800 text-slate-100 pt-5">
            <h3 className="text-center my-2 text-lg px-3">Power Rack with Adjustable Bench</h3>
            <p className="text-center text-slate-100 text-xl font-bold my-2 px-5 py-3">₦450,000</p>
          </div>
          <div className="absolute top-[60%] hover:scale-105 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
