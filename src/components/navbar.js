import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white rtl py-0">
      <div className="container">
        <Link to="/" className="navbar-brand py-0 mx-0" href="#">
          <img src="https://youz.club/wp-content/uploads/2022/01/logo.svg" alt="لوگو یوز" height="106px" />
        </Link>

        <div className="bg-danger p-2 text-white d-flex align-items-center" dir="ltr">
          <span>Powered by</span> <StaticImage
            src="../images/sincere-logo.jpg"
            width={24}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid rounded-pill align-middle mx-1"
          /> <span>SINCERE</span>
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
