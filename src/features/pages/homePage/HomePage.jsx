import HeroSection from "./homepage_components/Hero";
import MainSection from "./homepage_components/MainSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Evaactivelife Gym and Fitness</title>
        <link rel="canonical" href="https://evaactivelifegym.netlify.app" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </main>
  );
};

export default HomePage;
