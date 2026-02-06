function WorkItem({
  heading,
  paragraph,
  image,
  alt,
  roles,
  stacks,
  liveLink,
  PrototypeLink,
}) {
  return (
    <div className="work-item">
      <div className="img-box">
        <img src="/Images/Foysol Landing.png" alt="" />
      </div>
      <div className="text-box">
        <h4>Foysol Consulting Website</h4>
        <p>
          FOYSOL CONSULTING & ADVISORY CO. LTD is a dynamic insurance consulting
          and advisory firm, offering comprehensive insurance solutions, risk
          management strategies and bespoke training programs
        </p>
        <div className="role">
          <p>
            <span>Role:</span> Product Designer, Product manager.
          </p>
        </div>

        <div className="stack-lists">
          <button className="btn-sm btn-tertiary">Figma</button>
          <button className="btn-sm btn-tertiary">Figma</button>
        </div>

        <div className="button-box">
          <button className="btn-sm btn-secondary">View Prototype</button>
          {liveLink && (
            <button className="btn-sm btn-primary">View live</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
