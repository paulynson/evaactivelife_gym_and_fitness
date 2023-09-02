import { Link } from "react-router-dom";
import heroimage from "../../assets/hero_gym.png";
import { GoPlay } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="lg:py-24 py-8 grid grid-cols-12 gap-8 items-center ">
      <article className="lg:col-span-7 col-span-12 lg:text-left text-center lg:max-w-2xl w-auto">
        <h1 className="lg:text-5xl text-[2.5rem] font-bold leading-normal">
          Attain a Fit Physique Through Optimal Exercise Routines
        </h1>
        <p className="py-6 lg:text-left text-center">
          We are dedicated to assisting you in achieving a sound body and a
          tranquil mind using the transformative influence of fitness.
        </p>
        <div className="flex gap-4 lg:justify-start justify-center">
          <Link
            to="/membership"
            className="py-3 px-6 bg-green-400 text-white hover:bg-green-600 rounded-full "
          >
            Get Started
          </Link>
          <a
            href="#/"
            className="flex lg:justify-start justify-center items-center hover:text-green-400"
          >
            <GoPlay className="text-3xl mr-2" />{" "}
            <Link to="/videos">Watch Video</Link>
          </a>
        </div>
        <section className="flex items-center my-8 gap-6">
          <div className="flex flex-col ">
            <span className="text-3xl font-bold">10+</span>
            <span>Expert Trainers</span>
          </div>
          <div className="w-[1px] h-10 bg-slate-100"></div>
          <div className="flex flex-col ">
            <span className="text-3xl font-bold">50+</span>
            <span>Members Joined</span>
          </div>
          <div className="w-[1px] h-10 bg-slate-100"></div>
          <div className="flex flex-col ">
            <span className="text-3xl font-bold">35+</span>
            <span>Fitness Programs</span>
          </div>
        </section>
      </article>
      <div className="flex lg:col-span-5 col-span-12 justify-end items-center relative">
        <img src={heroimage} alt="Hero Image" className="w-full h-full z-30" />
        <div className="absolute lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-orange-400 top-0 right-8 animate-ping"></div>
        <div className="absolute w-20 h-20 rounded-full  hidden bg-blue-200 -bottom-6 left-0 z-30 lg:flex justify-center items-center">
          <p className="text-black text-sm font-bold animate-pulse">Stay Fit</p>
        </div>
        <div className="absolute w-96 h-96 rounded-full lg:block hidden bg-green-200 top-0 left-0 "></div>
        <div className="absolute w-32 h-32 rounded-full lg:block hidden bg-purple-600 bottom-0 right-16 "></div>
      </div>
    </section>
  );
};

export default HeroSection;
