import { useEffect, useState } from "react";
import ImageSlideShow from "../../UI/Components/ImageSlideShow";

function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-me" id="about-me">
      <div className="container-main">
        <div className="grid col-2-by-1">
          <div className="about-me_img-box">
            <ImageSlideShow images={images} index={index} />
          </div>

          <div className="about-me_text-box">
            <h3>About me</h3>
            <p>
              I’m Taiwo, a UI/UX Designer and Frontend Developer specializing in
              crafting responsive, intuitive web experiences for businesses and
              brands. My work prioritizes clarity, usability, and performance
              ensuring every digital product is easy to navigate and
              professionally executed.
            </p>

            <p>
              With experience designing web and mobile applications across
              fintech, education, and enterprise solutions, I approach each
              project with a strong emphasis on research, structure, and
              usability. I translate complex ideas into simple, user-centered
              experiences through thoughtful layouts, clear information
              hierarchy, and purposeful interactions.
            </p>

            <div className="fg-box">
              <div className="focus">
                <h4>Focus</h4>
                <ul>
                  <li>Frontend</li>
                  <li>Development & UI</li>
                  <li>Design</li>
                </ul>
              </div>

              <div className="focus">
                <h4>Goal</h4>
                <p>
                  Build impactful digital <br /> products for businesses
                </p>
              </div>
            </div>

            <div className="button-box">
              <button className="btn btn-primary">Download my CV</button>
              <button className="btn btn-secondary">
                Learn more about me...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

const images = [
  "/Images/Property 1=Taiwo 1.png",
  "/Images/Property 1=Taiwo 2.png",
  "/Images/Property 1=Taiwo 3.png",
  "/Images/Property 1=Taiwo 4.png",
  "/Images/Property 1=Taiwo 5.png",
  "/Images/Property 1=Taiwo 6.png",
];
