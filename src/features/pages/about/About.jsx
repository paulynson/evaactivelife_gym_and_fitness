// import React from "react";
// import side from "../../../assets/side.jpg";
import about_hero from "../../../assets/about_hero.jpg";
import instructor_one from "../../../assets/instructor_one.jpg";
import instructor_two from "../../../assets/instructor_two.jpg";
import instructor_three from "../../../assets/instructor_three.jpg";

const About = () => {
  return (
    <section>
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center relative ">
        <h1 className="lg:text-6xl text-4xl font-bold text-black mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
        <img
          src={about_hero}
          alt="Gym"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      </section>
      {/* our story */}
      <article className="space-y-6 py-16 text-[18px]">
        <h3 className="text-3xl font-bold text-center">Our Story</h3>

        <p className=" text-center text-gray-300 leading-8">
          At EvaActiveLife Gym and Fitness, we firmly believe that fitness and
          overall well-being are the cornerstone of a vibrant and fulfilling
          life. Established in 2002, our journey began as a family-owned
          business with a commitment to providing exceptional gym equipment at
          affordable prices. However, our vision extended beyond being a mere
          fitness equipment supplier; our goal was to lead the industry.
        </p>
        <p className=" text-center text-gray-300 leading-8">
          Two decades later, we proudly stand as one of Nigeria&apos;s premier
          online retailers of fitness equipment under the banner of
          EvaActiveLife Gym and Fitness Nigeria. Our focus has grown beyond
          equipment provision – we&apos;ve emerged as proponents of fitness,
          holistic well-being, and life enrichment.
        </p>
        <p className=" text-center text-gray-300 leading-8">
          Our commitment to excellence shines through not only in the
          high-quality equipment we offer but also in the lives we&apos;ve
          positively impacted. Our true success lies in the numerous customers
          we&apos;ve empowered to embrace longer, more joyful, and healthier
          lives. More than just a fitness company, we stand as your health
          allies, your enthusiastic supporters on the sidelines, motivating you
          to achieve your personal fitness aspirations.
        </p>
        <p className=" text-center text-gray-300 leading-8">
          Embark on the fitness journey with us and witness how it transforms
          your world. Join us in our mission to enhance lives through fitness
          and wellness, because at EvaActiveLife Gym and Fitness Nigeria, your
          health is our passion.
        </p>
        <p className=" text-center text-gray-500 leading-8">
          At EvaActive Life Gym & Fitness, we are dedicated to helping you
          achieve your fitness goals through personalized training programs,
          state-of-the-art equipment, and a supportive community.
        </p>

        {/* <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
          About Us
        </button> */}
      </article>

      {/* Our Instructors */}
      <section className="py-16">
        <div className="text-center">
          <h3 className="text-3xl  font-bold leading-normal">
            Our Instructors
          </h3>
          <p className="pt-2 pb-4">
            Our instructors are passionate about their work and their commitment
            to their clients.
          </p>
        </div>
        <section className="grid grid-cols-12 gap-4 items-center justify-center ">
          <div className="lg:col-span-4 px-4 border-2 border-green-400 py-4 rounded-lg md:col-span-6 sm:col-span-6 col-span-12">
            <img src={instructor_one} alt="" />
            <article>
              <h4 className="my-3 text-xl font-bold">John</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, dolorem? Exercitationem dicta fuga illum soluta
                mollitia veniam impedit tempora molestias, excepturi consectetur
                tenetur qui numquam.
              </p>
            </article>
          </div>
          <div className="lg:col-span-4 px-4 border-2 border-green-400 py-4 rounded-lg md:col-span-6 sm:col-span-6 col-span-12">
            <img src={instructor_two} alt="" />
            <article>
              <h4 className="my-3 text-xl font-bold">John</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, dolorem? Exercitationem dicta fuga illum soluta
                mollitia veniam impedit tempora molestias, excepturi consectetur
                tenetur qui numquam.
              </p>
            </article>
          </div>
          <div className="lg:col-span-4 px-4 border-2 border-green-400 py-4 rounded-lg md:col-span-6 sm:col-span-6 col-span-12">
            <img src={instructor_three} alt="" />
            <article>
              <h4 className="my-3 text-xl font-bold">John</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, dolorem? Exercitationem dicta fuga illum soluta
                mollitia veniam impedit tempora molestias, excepturi consectetur
                tenetur qui numquam.
              </p>
            </article>
          </div>
        </section>
      </section>

      {/* Our Culture */}
      <section>
        <article className="space-y-6 py-16 text-[18px]">
          <h3 className="text-3xl font-bold text-center">Our Culture</h3>

          <p className=" text-center text-gray-300 leading-8">
            We recognize the significance of fostering a positive culture. Our
            conviction lies in promoting encouragement, support, growth, and
            continuous learning for everyone. Embracing flexibility in our work
            solutions, alongside gym benefits and educational prospects,
            cultivates a harmonious work-life equilibrium for each team member.
          </p>
          <p className=" text-center text-gray-300 leading-8">
            At EvaActiveLife Gym and Fitness, our commitment extends to giving
            back. We allocate time, resources, and products to volunteer
            services and community organizations. Our dedication to enhancing
            individuals&apos; health, fitness, and well-being is manifested
            through our support of global and local charities, local sports
            teams, and events. We&apos;re resolute in our mission to contribute
            positively to both our team and the broader community.
          </p>

          {/* <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
          About Us
        </button> */}
        </article>
      </section>

      {/* Our People */}
      <section>
        <article className="space-y-6 py-16 text-[18px]">
          <h3 className="text-3xl font-bold text-center">Our People</h3>

          <p className=" text-center text-gray-300 leading-8">
            EvaActiveLife Gym and Fitness is fueled by a dynamic team of over 10
            exceptional individuals, each contributing their unique talents to
            drive our success. Our team is a harmonious blend of diverse
            talents, working tirelessly to guarantee an unmatched experience for
            you. They form the essential cogs in our operations - spanning
            sales, marketing, e-commerce, customer service, warehousing,
            finance, human resources, R&D, and management. If you&apos;re in
            pursuit of a role that nurtures growth within an inclusive and
            empowering environment, one that appreciates excellence, then we
            encourage you to connect with us!
          </p>

          {/* <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
          About Us
        </button> */}
        </article>
      </section>
    </section>
  );
};

export default About;