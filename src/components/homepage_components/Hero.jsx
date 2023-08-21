import heroimage from "../../assets/hero_gym.png";
import { GoPlay } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="my-12 grid grid-cols-12 gap-4 items-center">
      <div className="lg:col-span-6 col-span-12">
        <h1 className="lg:text-5xl text-[2.5rem] font-bold leading-normal">
          Attain a Fit Physique Through Optimal Exercise Routines
        </h1>
        <p className="py-6">
          We are dedicated to assisting you in achieving a sound body and a
          tranquil mind using the transformative influence of fitness.
        </p>
        <div className="flex gap-4">
          <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
            Get Started
          </button>
          <a href="#/" className="flex items-center hover:text-green-400">
            <GoPlay className="text-3xl mr-2" /> <span>Watch Video</span>
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
      </div>
      <div className="flex lg:col-span-6 col-span-12 justify-end items-center">
        <img src={heroimage} alt="Hero Image" className="w-full h-full" />
      </div>
    </section>
  );
};

export default HeroSection;
