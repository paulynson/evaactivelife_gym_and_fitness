// import React from "react";
import contact_hero from "../../../assets/contact_hero.jpg";

import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <section>
      {/* page Name */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | EvaActiveLife Gym and Fitness</title>
        <link
          rel="canonical"
          href="https://evaactivelifegym.netlify.app/contact"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center relative ">
        <h1 className="lg:text-6xl text-4xl font-bold text-green-500 mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact Us
        </h1>
        <img
          src={contact_hero}
          alt="Gym"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      </section>
      {/* Details Page */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-3 text-white text-center">
          GET IN TOUCH
        </h2>
        <p className="text-white text-lg text-center">
          We&apos;re here to help, 7 days a week.
        </p>
      </section>
      {/* Contact Info */}
      <section className="py-8 lg:px-24 px-4 text-center text-xl bg-green-500 text-white font-bold">
        Feel free to inquire about an order, a product, or any information
        required to kickstart your fitness journey! Don&apos;t hesitate to reach
        out – our team of knowledgeable professionals is at your service seven
        days a week via email, or phone. We&apos;re here to assist you in
        accessing the details necessary to embark on a healthy and active
        lifestyle.
      </section>
    </section>
  );
};

export default Contact;
