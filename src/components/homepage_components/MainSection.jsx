import React from "react";
import side from "../../assets/side.jpg";
// import gym_one from "../../assets/gym_one.jpg";
// import gym_two from "../../assets/gym_two.png";
import gym_two_bg from "../../assets/gym_two_bg.png";
import mainSectionData from "./MainSectionData";
import about_hero from "../../assets/about_hero.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MainSection = () => {
  return (
    <>
      <section className="grid grid-cols-12 lg:gap-8 gap-4 py-16">
        <div className="flex lg:col-span-6 col-span-12 justify-end items-center lg:order-1 order-last">
          <img
            src={side}
            alt="Hero Image"
            className="w-full h-full rounded-lg lg:block hidden"
          />
        </div>
        <article className="space-y-6 lg:col-span-6 col-span-12 lg:order-last order-1">
          <h3 className="text-3xl font-bold">
            Prepare yourself to achieve your fitness objectives.
          </h3>
          <div className="lg:hidden block my-6">
            {" "}
            <img
              src={side}
              alt="Hero Image"
              className="object-contain rounded-lg w-full"
            />
          </div>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            tempore, necessitatibus blanditiis ea aspernatur libero illo nihil
            adipisci. Veniam explicabo eaque, asperiores ducimus quibusdam, eius
            iure officia doloremque hic sunt exercitationem.
          </p>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            tempore, necessitatibus blanditiis ea aspernatur libero illo nihil
            adipisci. Veniam explicabo eaque, asperiores ducimus quibusdam, eius
            iure officia doloremque hic sunt exercitationem.
          </p>
          <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
            About Us
          </button>
        </article>
      </section>
      {/* Program Section */}
      <section className="py-16">
        <h3 className="text-3xl  font-bold">Our premier program on offer</h3>
        <div className="grid grid-cols-12 lg:gap-8 gap-4 my-8">
          {mainSectionData.map(({ title, text, id, avater }) => (
            <div
              className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 bg-slate-800 cursor-pointer hover:bg-green-600 rounded-lg py-8 px-4"
              key={id}
            >
              {React.createElement(avater, { size: 50 })}
              <h4 className="text-2xl font-bold mb-3">{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why should they choose us */}
      <section className="bg-slate-800 py-12 lg:px-8 px-4">
        <section className="grid grid-cols-12 lg:gap-16 gap-4 px-4 items-center">
          <div className="space-y-6 lg:col-span-6 col-span-12 lg:order-1 order-1">
            <h3 className="text-3xl  font-bold leading-normal">
              Why opt for EvaActive Life Gym and Fitness?
            </h3>
            <div className="lg:hidden block my-6">
              {" "}
              <img
                src={gym_two_bg}
                alt="Hero Image"
                className=" rounded-lg object-contain w-full"
              />
            </div>
            {/* Details  */}
            <section>
              <div className="mb-3">
                <ol className="list-disc ml-5 mb-2">
                  <li className="text-green-400 text-lg font-bold">
                    Personal Training{" "}
                  </li>
                </ol>
                <p>
                  Our dedicated personal trainers can assist you in crafting a
                  tailored fitness regimen while monitoring your advancement.
                </p>
              </div>
              <div className="mb-3">
                <ol className="list-disc ml-5 mb-2">
                  <li className="text-green-400 text-lg font-bold">
                    Expert Trainer{" "}
                  </li>
                </ol>
                <p>
                  Our fitness center takes pride in providing a team of highly
                  skilled and certified trainers who will guide you towards
                  accomplishing your health and fitness objectives.
                </p>
              </div>
              <div className="mb-3">
                <ol className="list-disc ml-5 mb-2">
                  <li className="text-green-400 text-lg font-bold">
                    Flexible Time{" "}
                  </li>
                </ol>
                <p>
                  Numerous fitness classes are available during non-peak hours,
                  including early mornings and late evenings.
                </p>
              </div>
            </section>
            <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
              Join Today
            </button>
          </div>
          <div className="flex lg:col-span-6 col-span-12  relative  items-center justify-center lg:order-last order-last">
            <div className="rounded-full ">
              <img
                src={gym_two_bg}
                alt="Hero Image"
                className=" lg:block hidden object-contain w-full"
              />
            </div>
          </div>
        </section>
      </section>
      {/* Price Section */}

      <section className="py-16">
        {" "}
        <div className="text-center">
          <h3 className="text-3xl  font-bold leading-normal">
            Select The Optimal Plan
          </h3>
          <p className="py-2">Select from the best plans we offer</p>
        </div>
        <div className="grid grid-cols-12 gap-4 py-12 justify-center items-center">
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-xl bg-slate-800 text-slate-200 shadow-lg  hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 font-bold italic lg:text-lg">
              Bronze
            </h4>
            <div>
              {/* <div className="py-4">
                {" "}
                <span className="text-4xl font-bold">₦10,000</span>
                <span>/Per Month</span>
              </div> */}
              <ul className="list-disc ml-5 space-y-2">
                <li>4 Classes Monthly (avg. usage of 1x/week)</li>
                <li>Discounted Add-On Classes</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-xl bg-slate-800 text-slate-200 shadow-lg  hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 font-bold italic lg:text-lg">
              Silver
            </h4>
            <div>
              {/* <div className="py-4">
                {" "}
                <span className="text-4xl font-bold">₦15,000</span>
                <span>/Per Month</span>
              </div> */}
              <ul className="list-disc ml-5 space-y-2">
                <li>8 Classes Monthly (avg. usage of 2x/week)</li>
                <li>Discounted Add-On Classes</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-xl bg-slate-800 text-slate-200 shadow-lg  hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 font-bold italic lg:text-lg">
              Gold
            </h4>
            <div>
              {/* <div className="py-4">
                {" "}
                <span className="text-4xl font-bold">₦25,000</span>
                <span>/Per Month</span>
              </div> */}
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Unlimited Classes (recommended for usage of 3x/week or more)
                </li>
                <li>30-Day Risk Free Guarantee†</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-xl bg-slate-800 text-slate-200 shadow-lg  hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 font-bold italic lg:text-lg">
              Class Packs
            </h4>
            <div>
              {/* <div className="py-4">
                {" "}
                <span className="text-4xl font-bold">₦7,500</span>
                <span>/Per Month</span>
              </div> */}
              <ul className="list-disc ml-5 space-y-2">
                <li>10 Classes</li>
                <li>20 Classes</li>
                <li>30 Classes</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}

      <section className="py-16">
        <div className=" grid grid-cols-2 items-center gap-4">
          {/* left */}
          <div>
            <h3 className="text-3xl  font-bold leading-normal lg:col-span-1 col-span-2">
              What our satisfied clients have to share about their experience
              with us
            </h3>
            <div className="py-3">
              <p>We believe we are here to serve you!</p>
            </div>
          </div>
          {/* right */}
          <div className="lg:col-span-1 col-span-2">
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
                  <img src={about_hero} />
                  <p className="legend">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    esse incidunt maxime dolor, eaque ratione autem quae.
                    Perferendis aut excepturi quas deserunt autem magnam
                    provident.
                  </p>
                </div>
                <div>
                  <img src={about_hero} />
                  <p className="legend">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    esse incidunt maxime dolor, eaque ratione autem quae.
                    Perferendis aut excepturi quas deserunt autem magnam
                    provident.
                  </p>
                </div>
                <div>
                  <img src={about_hero} />
                  <div className="legend">
                    {" "}
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum esse incidunt maxime dolor, eaque ratione autem quae.
                      Perferendis aut excepturi quas deserunt autem magnam
                      provident.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum esse incidunt maxime dolor, eaque ratione autem quae.
                      Perferendis aut excepturi quas deserunt autem magnam
                      provident.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
