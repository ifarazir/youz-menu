import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Categories from "../components/categories"
import Product from "../components/product"
import ProductSection from "../components/productSection"

const IndexPage = () => (
  <Layout>
    <Seo title="منو دیجیتال" />
    <Categories />
    <ProductSection title={"بار اسپرسو"}>
      <Product title={"اسپرسو"} desc={""} price={"۲۸"} />
      <Product title={"دبل اسپرسو"} desc={""} price={"۳۲"} />
      <Product title={"لاته"} desc={""} price={"۳۵"} />
      <Product title={"امریکانو"} desc={""} price={"۳۵"} />
      <Product title={"انواع ماکیاتو"} desc={""} price={"۳۸"} />
      <Product title={"قهوه دمی کلد برو"} desc={""} price={"۴۵"} />
      <Product title={"سینگل ماکیاتو"} desc={""} price={"۳۰"} />
      <Product title={"دبل ماکیاتو"} desc={""} price={"۳۵"} />
      <Product title={"موکا"} desc={""} price={"۳۸"} />
      <Product title={"ایس امریکانو"} desc={""} price={"۳۵"} />
      <Product title={"ایس لاته"} desc={""} price={"۳۸"} />
      <Product title={"ایس ماکیاتو"} desc={"کارامل، وانیل، کوکو"} price={"۳۸"} />
      <Product title={"ایس موکا"} desc={""} price={"۳۸"} />
    </ProductSection>
    <ProductSection title={"نوشیدنی سرد"}>
      <Product title={"لیموناد"} desc={""} price={"۳۵"} />
      <Product title={"مینت لیموناد"} desc={""} price={"۳۸"} />
      <Product title={"سودا به‌همراه لیمو"} desc={""} price={"۲۵"} />
      <Product title={"آبجو (بدون الکل)"} desc={""} price={"۴۸"} />
    </ProductSection>
    <ProductSection title={"نوشیدنی‌های گرم"}>
      <Product title={"چای سیاه و خرما"} desc={""} price={"۲۸"} />
      <Product title={"چای ماسالا"} desc={""} price={"۳۲"} />
      <Product title={"دارک چاکلت"} desc={""} price={"۳۵"} />
      <Product title={"چای ماچا (به‌همراه شیر)"} desc={""} price={"۳۵"} />
      <Product title={"انواع دمنوش به‌همراه خرما و عسل"} desc={""} price={"۳۵"} />
    </ProductSection>
    <ProductSection title={"آبمیوه طبیعی"}>
      <Product title={"آب هویج"} desc={""} price={"۲۸"} />
      <Product title={"آب پرتقال"} desc={""} price={"۳۲"} />
      <Product title={"آب کرفس"} desc={""} price={"۳۲"} />
      <Product title={"آب کرفس لیمو"} desc={""} price={"۳۲"} />
      <Product title={"آب سیب"} desc={""} price={"۳۲"} />
      <Product title={"آب انار"} desc={""} price={"۳۲"} />
      <Product title={"آب سیب کرفس"} desc={""} price={"۳۲"} />
      <Product title={"آب زرشک"} desc={""} price={"۳۲"} />
      <Product title={"آب زغال اخته"} desc={""} price={"۳۲"} />
      <Product title={"آب آلبالو"} desc={""} price={"۳۲"} />
      <Product title={"عصاره زنجبیل"} desc={""} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"نوشیدنی‌های سلامت"}>
      <Product title={"گرین پلاس"} desc={"آب سیب فرانسوی، آب سیب زرد، عصاره کرفس، زنجبیل، جعفری، آب‌لیمو تازه"} price={"۲۸"} />
      <Product title={"اورنج پلاس"} desc={"آب هویج، آب سیب زرد، آناناس تازه، آبمیوه آناناس، زنجبیل تازه"} price={"۳۲"} />
      <Product title={"رد پلاس"} desc={"آب چغندر، آب سیب سبز، آب پرتقال، عصاره لایم"} price={"۳۲"} />
      <Product title={"بلو پلاس"} desc={"آب سیب زرد، آب پرتقال، آناناس تازه، آب‌میوه آناناس، بازیل"} price={"۳۲"} />
      <Product title={"بروون پلاس"} desc={"آب سیب زرد، آب سیب سبز، عسل، دارچین، زنجبیل، بازیل"} price={"۳۲"} />
      <Product title={"پاورفول"} desc={"میوه تازه، آواکادوو، شیر، عسل"} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"نوشیدنی‌های یخی"}>
      <Product title={"پیناکولادا"} desc={"شیرنارگیل، اسلایس آناناس، آب‌میوه پیناکولادا، عصاره نارگیل"} price={"۲۸"} />
      <Product title={"میکس بری"} desc={"بلک بری تازه، بلوبری، ماست میوه‌ای، آب‌میوه انار، عصاره بلک‌بری"} price={"۳۲"} />
      <Product title={"فراپاچینو"} desc={"شات دبل اسپرسو، بستنی شکلاتی، سس شکلات، شیر"} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"غذای اصلی"}>
      <Product title={"اسنک مرغ و بادمجان"} desc={"شیرنارگیل، اسلایس آناناس، آب‌میوه پیناکولادا، عصاره نارگیل"} price={"۲۸"} />
      <Product title={"میکس بری"} desc={"بلک بری تازه، بلوبری، ماست میوه‌ای، آب‌میوه انار، عصاره بلک‌بری"} price={"۳۲"} />
      <Product title={"فراپاچینو"} desc={"شات دبل اسپرسو، بستنی شکلاتی، سس شکلات، شیر"} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"صبحانه و میان‌وعده"}>
      <Product title={"اسنک مرغ و بادمجان"} desc={"شیرنارگیل، اسلایس آناناس، آب‌میوه پیناکولادا، عصاره نارگیل"} price={"۲۸"} />
      <Product title={"میکس بری"} desc={"بلک بری تازه، بلوبری، ماست میوه‌ای، آب‌میوه انار، عصاره بلک‌بری"} price={"۳۲"} />
      <Product title={"فراپاچینو"} desc={"شات دبل اسپرسو، بستنی شکلاتی، سس شکلات، شیر"} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"پیش‌غذا"}>
      <Product title={"اسنک مرغ و بادمجان"} desc={"شیرنارگیل، اسلایس آناناس، آب‌میوه پیناکولادا، عصاره نارگیل"} price={"۲۸"} />
      <Product title={"میکس بری"} desc={"بلک بری تازه، بلوبری، ماست میوه‌ای، آب‌میوه انار، عصاره بلک‌بری"} price={"۳۲"} />
      <Product title={"فراپاچینو"} desc={"شات دبل اسپرسو، بستنی شکلاتی، سس شکلات، شیر"} price={"۳۲"} />
    </ProductSection>
    <ProductSection title={"آیتم اکسترا"}>
      <Product title={"اسنک مرغ و بادمجان"} desc={"شیرنارگیل، اسلایس آناناس، آب‌میوه پیناکولادا، عصاره نارگیل"} price={"۲۸"} />
      <Product title={"میکس بری"} desc={"بلک بری تازه، بلوبری، ماست میوه‌ای، آب‌میوه انار، عصاره بلک‌بری"} price={"۳۲"} />
      <Product title={"فراپاچینو"} desc={"شات دبل اسپرسو، بستنی شکلاتی، سس شکلات، شیر"} price={"۳۲"} />
    </ProductSection>
  </Layout>
)

export default IndexPage
