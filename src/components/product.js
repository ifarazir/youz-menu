import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Product = ({ title, desc, price }) => {
  return (
    <div className="col-md-3 col-6 mb-4">
      <div className="card p-3 shadow-sm rounded-0 border-0 h-100">
        <h3 className="fs-4 fw-bold">{title}</h3>

        {descText(desc)}
        <p className="price fw-bold text-primary fs-5 mb-0 mt-auto align-self-end">
          {price} <span className="fs-6"><sup className="fw-normal">هزار تومان</sup></span>
        </p>
      </div>
    </div>
  )
}

function descText(desc) {
  if (desc != "") {
    return (
      <p className="bg-light p-1 text-dark">
        {desc}
      </p>
    );
  }
  return null;
}

export default Product
