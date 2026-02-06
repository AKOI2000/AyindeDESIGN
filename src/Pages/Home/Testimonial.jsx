import HoverExpand from "../../UI/Components/HoverExpand";
import SectionHeading from "../../UI/Components/SectionHeading";
function Testimonial() {
  return (
    <section id="testimonial" className="testimonial">
      <div className="container-main">
        <SectionHeading
          heading="Working With Me, In Their Words."
          subHeading="Feedback from clients and collaborators who value clarity, structure, and thoughtful design decisions."
        />

        <HoverExpand />
      </div>
    </section>
  );
}

export default Testimonial;
