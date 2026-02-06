import ContactForm from "../../UI/Components/ContactForm";
import AboutSection from "./AboutSection";
import DesignProcess from "./DesignProcess";
import Hero from "./Hero";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import WorksSection from "./WorksSection";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <AboutSection />
      <WorksSection />
      <Testimonial />
      <ContactForm />
      <DesignProcess />
    </div>
  );
}

export default Home;
