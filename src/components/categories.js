import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Categories = () => {
  return (
    <section className="text-center bg-white shadow-sm mb-4">
      <div className="d-xl-none d-flex w-100 rtl" style={{ 'overflowX': 'scroll' }}>
        <div className="d-flex flex-row mobile-cat">
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/004-coffee-beans.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              بار اسپرسو
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/008-soda.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              نوشیدنی سرد
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/006-tea-cup.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              نوشیدنی گرم
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/003-drink.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            آبمیوه طبیعی
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/007-healthy-drink.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              <span>نوشیدنی‌های سلامت</span>
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/005-juice.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            نوشیدنی‌های یخی
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/002-spaguetti.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            غذای اصلی
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/009-egg.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            صبحانه و میان‌وعده
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/001-salad.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            پیش‌غذا
            </div>
          </div>
          <div className="cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/010-french-fries.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />             آیتم اکسترا
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl container-fluid d-xl-block d-none">
        <div className="row mx-auto rtl g-0 justify-content-between w-100">
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/004-coffee-beans.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              بار اسپرسو
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/008-soda.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              نوشیدنی سرد
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/006-tea-cup.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />
              نوشیدنی گرم
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/003-drink.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            آبمیوه طبیعی
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/007-healthy-drink.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            نوشیدنی‌های سلامت
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/005-juice.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            نوشیدنی‌های یخی
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/002-spaguetti.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            غذای اصلی
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/009-egg.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            صبحانه و میان‌وعده
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/001-salad.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />            پیش‌غذا
            </div>
          </div>
          <div className="col-md cat-box">
            <div className="p-md-3 p-1 rounded-0 text-dark d-flex flex-column">
              <StaticImage
                src="../images/icons/010-french-fries.png"
                width={200}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid mx-auto"
              />             آیتم اکسترا
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
