import React from "react";
import side from "../../assets/side.jpg";
// import gym_one from "../../assets/gym_one.jpg";
// import gym_two from "../../assets/gym_two.png";
import gym_two_bg from "../../assets/gym_two_bg.png";
import mainSectionData from "./MainSectionData";
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
        <div className="space-y-6 lg:col-span-6 col-span-12 lg:order-last order-1">
          <h3 className="text-3xl font-bold">
            Prepare yourself to achieve your fitness objectives.
          </h3>
          <div className="lg:hidden block my-6">
            {" "}
            <img
              src={side}
              alt="Hero Image"
              className="object-contain rounded-lg"
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
        </div>
      </section>
      {/* Program Section */}
      <section className="py-16">
        <h3 className="text-3xl  font-bold">Our premier program on offer</h3>
        <div className="grid grid-cols-12 lg:gap-8 gap-4 my-8">
          {mainSectionData.map(({ title, text, id, avater }) => (
            <div
              className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 bg-slate-900 cursor-pointer hover:bg-green-600 rounded-lg py-8 px-4"
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
      <section className="bg-slate-900 py-12 lg:px-8 px-4">
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
                className=" rounded-lg object-contain"
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
                className=" lg:block hidden object-contain"
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
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-slate-900 hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 text-center">Basic</h4>
            <div>
              <div className="text-center py-4">
                {" "}
                <span className="text-4xl font-bold">₦7,500</span>
                <span>/Per Month</span>
              </div>
              <ul className="list-disc ml-5 space-y-2">
                <li>Strength Training</li>
                <li>Cardio Workouts</li>
                <li>CrossFit</li>
                <li>Weight Lifting</li>
                <li>Functional Training</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-slate-900 hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 text-center">Bronze</h4>
            <div>
              <div className="text-center py-4">
                {" "}
                <span className="text-4xl font-bold">₦10,000</span>
                <span>/Per Month</span>
              </div>
              <ul className="list-disc ml-5 space-y-2">
                <li>Strength Training</li>
                <li>Cardio Workouts</li>
                <li>CrossFit</li>
                <li>Weight Lifting</li>
                <li>Functional Training</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-slate-900 hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 text-center">Silver</h4>
            <div>
              <div className="text-center py-4">
                {" "}
                <span className="text-4xl font-bold">₦15,000</span>
                <span>/Per Month</span>
              </div>
              <ul className="list-disc ml-5 space-y-2">
                <li>Strength Training</li>
                <li>Cardio Workouts</li>
                <li>CrossFit</li>
                <li>Weight Lifting</li>
                <li>Functional Training</li>
              </ul>
              <div className="mt-6 text-center">
                <button className="rounded-full py-2 px-6 border-white border-2 group-hover:bg-white group-hover:text-green-600 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-slate-900 hover:bg-green-600 group px-8  py-6 ">
            <h4 className="text-sm uppercase py-3 text-center">Gold</h4>
            <div>
              <div className="text-center py-4">
                {" "}
                <span className="text-4xl font-bold">₦25,000</span>
                <span>/Per Month</span>
              </div>
              <ul className="list-disc ml-5 space-y-2">
                <li>Strength Training</li>
                <li>Cardio Workouts</li>
                <li>CrossFit</li>
                <li>Weight Lifting</li>
                <li>Functional Training</li>
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
          <h3 className="text-3xl  font-bold leading-normal lg:col-span-1 col-span-2">
            What our satisfied clients have to share about their experience with
            us
          </h3>
          <div className="lg:col-span-1 col-span-2 flex lg:justify-end justify-start">
            <p>We believe we are here to serve you!</p>
          </div>
        </div>
        {/* Carousel Section */}
        <div className="my-8">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            // width="300px"
            dynamicHeight={true}
            showStatus={false}
          >
            <div>
              <img src={side} />
              <p className="legend">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
                Perferendis aut excepturi quas deserunt autem magnam provident.
              </p>
            </div>
            <div>
              <img src={side} />
              <p className="legend">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                esse incidunt maxime dolor, eaque ratione autem quae.
                Perferendis aut excepturi quas deserunt autem magnam provident.
              </p>
            </div>
            <div>
              <img src={side} />
              <div className="legend">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  esse incidunt maxime dolor, eaque ratione autem quae.
                  Perferendis aut excepturi quas deserunt autem magnam
                  provident.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  esse incidunt maxime dolor, eaque ratione autem quae.
                  Perferendis aut excepturi quas deserunt autem magnam
                  provident.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default MainSection;
