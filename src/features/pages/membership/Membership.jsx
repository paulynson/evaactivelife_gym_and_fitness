/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import membership_hero from "../../../assets/membership_hero.jpg";
import Swal from "sweetalert2";
import bmichart from "../../../assets/bmi_transparent.png";

const Membership = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (weight === "" || isNaN(weight)) {
      // setResult("Provide a valid Height!");
      Swal.fire({
        icon: "info",
        text: `Provide a valid Weight!`,
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (height === "" || isNaN(height)) {
      // setResult("Provide a valid Weight!");
      Swal.fire({
        icon: "info",
        text: `Provide a valid Height!`,
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      if (bmi < 18.6) {
        setResult(` Your Body Mass Index (BMI) is: ${bmi}.
                 Your BMI indicates that you are Under Weight`);
      } else if (bmi >= 18.6 && bmi < 24.9) {
        setResult(
          `
          Your Body Mass Index (BMI) is: ${bmi}.
          Your BMI indicates that you are Normal. Congratulations for maintaining a healthy weight!`
        );
      } else {
        setResult(
          `Your Body Mass Index (BMI) is: ${bmi}.
          Your BMI indicates that you are Overweight and this puts you at an Extremely High risk for type 2 diabetes, hypertension, coronary heart disease, stroke, sleep apnea and certain types of cancer.
           
          `
        );
      }
    }
  };
  return (
    <section>
      <section className="flex flex-col items-center justify-center relative ">
        <h1 className="lg:text-6xl text-4xl font-bold text-green-600 mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Membership
        </h1>
        <img
          src={membership_hero}
          alt="Gym"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      </section>
      {/* Membership Details */}
      <article className="space-y-6 py-16 text-[18px]">
        <h3 className="text-3xl font-bold text-center">
          Get the Membership Experience
        </h3>

        <p className=" text-center text-gray-300 leading-8">
          At EvaActiveLife Gym and Fitness, we firmly believe that fitness and
          overall well-being are the cornerstone of a vibrant and fulfilling
          life. Established in 2002, our journey began as a family-owned
          business with a commitment to providing exceptional gym equipment at
          affordable prices. However, our vision extended beyond being a mere
          fitness equipment supplier; our goal was to lead the industry.
        </p>

        {/* <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
          About Us
        </button> */}
      </article>

      {/* BMI Calculation */}
      <section className="grid grid-cols-12 lg:gap-0 items-center justify-center bg-slate-50 px-4 gap-4 mb-6">
        <section className="text-black  py-8 px-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 uppercase lg:text-left text-center text-green-600">
            BMI Calculator
          </h1>
          <img
            src={bmichart}
            className="rounded-lg shadow-lg w-full lg:hidden block my-4"
            alt="bmi chart"
          />
          <p className="my-3">
            BMI is a reliable guide to estimate the healthy weight range based
            on height and weight
          </p>
          <section className="border-2 border-green-400 px-4 py-4">
            <div className="mb-2">
              <label className="block font-medium">Weight (kg):</label>
              <input
                className="border rounded px-2 py-1 w-20"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium">Height (cm):</label>
              <input
                className="border rounded px-2 py-1 w-20"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <button
              className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-4 rounded"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </section>

          <p className="mt-2" id="result">
            {result}
          </p>
        </section>
        {/* Other section */}
        <div className="py-8 px-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 ">
          <img
            src={bmichart}
            className="rounded-lg w-full lg:block hidden"
            alt="bmi chart"
          />
        </div>
      </section>
    </section>
  );
};

export default Membership;
