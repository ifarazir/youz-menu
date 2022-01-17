import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Product from "../components/product"

const ProductSection = ({ children, title }) => {
  return (
    <section className="food-box rtl mt-3">
      <div className="container">
        <h2 className="fs-2 fw-bold bg-primary rounded-0 px-3 pb-2 pt-2 text-white d-flex align-items-center mb-3">
          { renderImage(title) }
          <span>{ title }</span>
        </h2>
        <div className="row">
          {children}
        </div>
      </div>
    </section>
  )
}

function renderImage(param) {
  switch(param) {
    case 'بار اسپرسو':
      return (
        <StaticImage
        src="../images/icons/004-coffee-beans.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "نوشیدنی سرد":
      return (
        <StaticImage
        src="../images/icons/008-soda.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "نوشیدنی‌های گرم":
      return (
        <StaticImage
        src="../images/icons/006-tea-cup.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "آبمیوه طبیعی":
      return (
        <StaticImage
        src="../images/icons/003-drink.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "نوشیدنی‌های سلامت":
      return (
        <StaticImage
        src="../images/icons/007-healthy-drink.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "نوشیدنی‌های یخی":
      return (
        <StaticImage
        src="../images/icons/005-juice.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "غذای اصلی":
      return (
        <StaticImage
        src="../images/icons/002-spaguetti.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "صبحانه و میان‌وعده":
      return (
        <StaticImage
        src="../images/icons/009-egg.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "پیش‌غذا":
      return (
        <StaticImage
        src="../images/icons/001-salad.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    case "آیتم اکسترا":
      return (
        <StaticImage
        src="../images/icons/010-french-fries.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt={ param }
        className="img-fluid"
      />
      );
    default:
      return "";  }
}

export default ProductSection
