import SectionHeading from "../../UI/Components/SectionHeading";
import WorkItem from "../../UI/Components/WorkItem";

function WorksSection() {
  return (
    <section className="works-section" id="works-section">
      <div className="container-main">
        <SectionHeading
          heading="Selected Works"
          subHeading="A few projects where clarity, usability, and structure made the difference."
        />

        <div className="work-lists">
          <div className="grid col-2-by-1">
            <WorkItem liveLink={true} />
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </div>

          <center style={{ marginTop: "4rem" }}>
            <button className="btn btn-secondary">View more works</button>
          </center>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
