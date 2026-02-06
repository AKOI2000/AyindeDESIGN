import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <svg class="svg-filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id="jelly-backdrop"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            color-interpolation-filters="sRGB"
          >
            {/* <!-- Lower baseFrequency = smoother, less chaotic --> */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="3"
              seed="1"
              result="turbulence"
            />
            {/* <!-- Lower scale = subtle, elegant distortion --> */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="-30"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* <!-- Smooth it out --> */}
            <feGaussianBlur
              in="displaced"
              stdDeviation="0.5"
              result="blurred"
            />
            {/* <!-- Boost colors --> */}
            <feColorMatrix in="blurred" type="saturate" values="1.8" />
          </filter>
        </defs>
      </svg>

      <header className="navbar-container">
        <div className="logo">T.A</div>
        <nav className="navbar">
          <NavLink to="/" className="navbar-links">
            Home
          </NavLink>
          <NavLink to="/works" className="navbar-links">
            Testimonial
          </NavLink>
          <NavLink to="/about" className="navbar-links">
            About
          </NavLink>
          <NavLink to="/contact" className="navbar-links">
            Contact
          </NavLink>
        </nav>

        <div className="navbar-cta">
          <button>Sun</button>
          <a href="#">Chat Me</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
