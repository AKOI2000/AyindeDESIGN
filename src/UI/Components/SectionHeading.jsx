function SectionHeading({heading, subHeading}) {
    return (
        <div className="section-heading">
        <h3>{heading}</h3>
        <p>
          {subHeading}
        </p>
      </div>
    )
}

export default SectionHeading
