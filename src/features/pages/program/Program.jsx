// import React from 'react'
import program_hero from "../../../assets/program_hero.jpg";

const Program = () => {
  return (
    <section>
      <section className="flex flex-col items-center justify-center relative ">
        <h1 className="lg:text-6xl text-4xl font-bold text-white mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Our Programs
        </h1>
        <img
          src={program_hero}
          alt="Gym"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      </section>
      {/* Program List */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-3 text-white text-center">
          List of Programs for You
        </h2>
        <p className="text-white text-lg text-center">
          Get ready to stay fit and healthy with our programs
        </p>
        <section className="grid grid-cols-12 gap-4 items-center justify-center py-6">
          {/* one section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Personal Training:
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  One-on-one sessions with a personal trainer who designs
                  customized workout plans based on individual goals and needs.
                </li>
              </ul>
            </article>
          </details>
          {/* second section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Group Fitness Classes:
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  <span className="font-bold">Cardio Workouts:</span>{" "}
                  High-intensity interval training (HIIT), dance cardio, and
                  indoor cycling.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Strength Training:</span>{" "}
                  Bodyweight exercises, dumbbell and resistance training.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Yoga and Pilates: </span>{" "}
                  Flexibility, balance, and core-focused classes.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Zumba:</span> Dance-based fitness
                  class that combines Latin and international music.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Bootcamp: </span> Dance-based
                  fitness class that combines Latin and international music.
                </li>
              </ul>
            </article>
          </details>
          {/* third section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Functional Fitness:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Classes focused on improving everyday movements and enhancing
                  functional strength.
                </li>
              </ul>
            </article>
          </details>
          {/* Fourth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Weight Lifting:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Training programs and coaching for individuals interested in
                  Olympic weightlifting and powerlifting.
                </li>
              </ul>
            </article>
          </details>
          {/* fifth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Circuit Training:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  A series of exercises performed in sequence, targeting
                  different muscle groups.
                </li>
              </ul>
            </article>
          </details>
          {/* sixth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">CrossFit: </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  High-intensity functional fitness program combining
                  weightlifting, cardio, and bodyweight exercises.
                </li>
              </ul>
            </article>
          </details>
          {/* seventh section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Functional Wellness:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Incorporating physical therapy exercises to improve mobility
                  and manage pain.
                </li>
              </ul>
            </article>
          </details>
          {/* eight section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Youth Fitness:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li> Fitness programs designed for children and teenagers.</li>
              </ul>
            </article>
          </details>
          {/* seventh section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6 cursor-pointer">
            <summary className="text-white text-lg mb-3">
              Specialized Classes:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  <span className="font-bold">Post-Rehabilitation:</span>{" "}
                  Workouts tailored for those recovering from injuries.
                </li>
              </ul>
            </article>
          </details>
        </section>
      </section>
    </section>
  );
};

export default Program;