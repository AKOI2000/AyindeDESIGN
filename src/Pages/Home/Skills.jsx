import SectionHeading from "../../UI/Components/SectionHeading";
import SkillList from "../../UI/Components/SkillList";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container-main">
        <SectionHeading
          heading="Skills & Tools"
          subHeading="I build and design digital products that combine creativity with
            performance tools that feel as good as they look."
        />

        <div className="skill-lists">
          <SkillList />
        </div>
      </div>
    </section>
  );
}

export default Skills;
