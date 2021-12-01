import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary pt-4">
      <div className="container-fluid align-items-center">
        <Link to="/" className="navbar-brand mb-2" href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.4095 52H13.5286C13.5286 52 1 52 1 39.5C1 27 1 39.5 1 39.5V2L9.1088 8.5611L9.35236 39.5C9.35236 39.5 9.32692 43.635 13.5031 43.635C17.6793 43.635 17.7047 43.6667 17.7047 43.6667H34.4095V52Z"
              fill="#D40000"
              stroke="#FF6600"
              strokeWidth="0.999999"
            />
            <path
              d="M17.8718 35.3333V2L25.9806 7.83209L26.2242 20.9425"
              fill="#2F3640"
            />
            <path
              d="M17.8718 35.3333V2L25.9806 7.83209L26.2242 20.9425"
              stroke="#2F3640"
              strokeWidth="0.999999"
            />
            <path
              d="M34.4142 51.8815C43.5743 51.8815 51.0001 44.4726 51.0001 35.3333L34.4142 51.8815ZM51.0001 35.3333C51.0001 26.1941 43.5743 18.7852 34.4142 18.7852C25.254 18.7852 17.8282 26.1941 17.8282 35.3333C17.8282 44.4726 25.254 51.8815 34.4142 51.8815L51.0001 35.3333ZM42.6226 35.2708C42.6226 39.8371 38.9125 43.5387 34.3359 43.5388L42.6226 35.2708ZM34.3359 43.5388C29.7591 43.5389 26.0488 39.8372 26.0487 35.2708C26.0486 30.7044 29.759 27.0025 34.3359 27.0026C38.9126 27.0027 42.6228 30.7045 42.6226 35.2708"
              fill="#2F3640"
            />
            <path
              d="M34.3359 43.5388C29.7591 43.5389 26.0488 39.8372 26.0487 35.2708C26.0486 30.7044 29.759 27.0025 34.3359 27.0026C38.9126 27.0027 42.6228 30.7045 42.6226 35.2708M34.4142 51.8815C43.5743 51.8815 51.0001 44.4726 51.0001 35.3333L34.4142 51.8815ZM51.0001 35.3333C51.0001 26.1941 43.5743 18.7852 34.4142 18.7852C25.254 18.7852 17.8282 26.1941 17.8282 35.3333C17.8282 44.4726 25.254 51.8815 34.4142 51.8815L51.0001 35.3333ZM42.6226 35.2708C42.6226 39.8371 38.9125 43.5387 34.3359 43.5388L42.6226 35.2708Z"
              stroke="#2F3640"
              strokeWidth="1.13474"
            />
            <path
              d="M34.562 47.7465V43.7172L35.3407 43.634C36.4115 43.5195 37.9647 42.9602 38.8999 42.3523C39.8075 41.7624 40.9522 40.6024 41.5383 39.6786C42.0641 38.85 42.6138 37.2655 42.7206 36.2709L42.804 35.494H46.8495H50.895L50.8084 36.4419C50.5319 39.4688 49.6201 42.088 47.9874 44.5448C47.2033 45.7249 44.8162 48.1064 43.6335 48.8888C41.1514 50.5308 38.53 51.4309 35.4508 51.6986L34.562 51.7758V47.7465Z"
              fill="#D40000"
              stroke="#FF6600"
              strokeWidth="0.733852"
            />
          </svg>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="main-navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <li className="nav-item">
              <ExactNavLink to="/services">SERVICES</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/case-studies">CASE STUDIES</ExactNavLink>
            </li>{" "}
            <li className="nav-item">
              <ExactNavLink to="/careers">CAREERS</ExactNavLink>
            </li>{" "}
            <li className="nav-item">
              <ExactNavLink to="/blog">BLOG</ExactNavLink>
            </li>{" "}
            <li className="nav-item ">
              <ExactNavLink className="p-0 " to="/get-start">
                <p className="btn btn-outline-primary "> LET’S TALK</p>
              </ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
