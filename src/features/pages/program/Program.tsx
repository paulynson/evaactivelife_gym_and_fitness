import { useEffect } from "react";
import program_hero from "../../../assets/program_hero.jpg";
import { Helmet } from "react-helmet";
import PagesHeros from "../../../components/pagesHeros/PagesHeros";

const Program = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Program | EvaactiveLife Gym and Fitness</title>
        <link rel="canonical" href="https://evaactivelifegym.netlify.app/program" />
      </Helmet>
      {/* Hero */}
      <PagesHeros src={program_hero} title="Our Programs" alt="Programs in the Gym" />

      {/* Program List */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-3 text-white text-center">List of Programs for You</h2>
        <p className="text-white text-lg text-center">
          Get ready to stay fit and healthy with our programs
        </p>
        <section className="grid grid-cols-12 gap-4 items-center justify-center py-6">
          {/* one section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Personal Training:
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  One-on-one sessions with a personal trainer who designs customized workout plans
                  based on individual goals and needs.
                </li>
              </ul>
            </article>
          </details>

          {/* third section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Functional Fitness:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Classes focused on improving everyday movements and enhancing functional strength.
                </li>
              </ul>
            </article>
          </details>
          {/* Fourth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Weight Lifting:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Training programs and coaching for individuals interested in Olympic weightlifting
                  and powerlifting.
                </li>
              </ul>
            </article>
          </details>
          {/* fifth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Circuit Training:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  A series of exercises performed in sequence, targeting different muscle groups.
                </li>
              </ul>
            </article>
          </details>
          {/* sixth section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              CrossFit:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  High-intensity functional fitness program combining weightlifting, cardio, and
                  bodyweight exercises.
                </li>
              </ul>
            </article>
          </details>
          {/* seventh section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Functional Wellness:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  Incorporating physical therapy exercises to improve mobility and manage pain.
                </li>
              </ul>
            </article>
          </details>

          {/* eight section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Specialized Classes:{" "}
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  <span className="font-bold">Post-Rehabilitation:</span> Workouts tailored for
                  those recovering from injuries.
                </li>
              </ul>
            </article>
          </details>
          {/* second section */}
          <details className="col-span-12 lg:col-span-4 md:col-span-6  border-green-400 border-2 py-4 px-6">
            <summary className="text-white text-lg mb-3 hover:text-green-400 cursor-pointer">
              Group Fitness Classes:
            </summary>
            <article>
              <ul className="text-white text-sm list-disc ml-4">
                <li>
                  {" "}
                  <span className="font-bold">Cardio Workouts:</span> High-intensity interval
                  training (HIIT), dance cardio, and indoor cycling.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Strength Training:</span> Bodyweight exercises,
                  dumbbell and resistance training.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Yoga and Pilates: </span> Flexibility, balance, and
                  core-focused classes.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Zumba:</span> Dance-based fitness class that combines
                  Latin and international music.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Bootcamp: </span> Dance-based fitness class that
                  combines Latin and international music.
                </li>
              </ul>
            </article>
          </details>
        </section>
      </section>

      {/* Program Time */}
      <section className="py-16 bg-slate-800">
        <h2 className="text-3xl font-bold mb-3 text-white text-center">Program Time</h2>

        <section className="py-4 px-6">
          <div className="grid lg:grid-cols-12  gap-4 ">
            <div className=" col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6 border-green-400 border-2 py-4 px-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Morning Class</h3>
              <ul className="space-y-2">
                <li>6:30am - 08:00am</li>
                <li>08:00am - 09:30am</li>
                <li>09:30am - 11:00am</li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6 border-green-400 border-2 py-4 px-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Evening Class</h3>
              <ul className="space-y-2">
                <li>05:00pm - 08:00pm</li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6  border-green-400 border-2 py-4 px-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Saturday Class</h3>
              <ul className="space-y-2">
                <li> Morning session (general class) 07:00am</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Program;
