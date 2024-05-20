import Link from "next/link";
import { Carousel } from "react-bootstrap";

const Banner = ({
  title = "How We Are Different?",
  subTitle = "Business Travel",
  img = "img/home-2/8.png",
  img2 = "img/home-2/7.png",
  dark = false,
}) => {
  return (
      <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
        <div className="container">
          <Carousel interval={3000} pause={false} indicators={true} controls={false}>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="mil-banner-text">
                  <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
                  <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                    {title}
                  </h1>
                  <div className="mil-buttons-frame">
                    <Link href="register" className="mil-btn mil-md mil-add-arrow">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="mil-banner-img">
                  <img src={img} alt="banner" className="d-block w-100" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="mil-banner-text">
                  <h6 className="mil-text-gradient-2 mil-mb-20">Expense Management</h6>
                  <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                    Solopreneurs, Professionals and Growing businesses
                  </h1>
                  <div className="mil-buttons-frame">
                    <Link href="register" className="mil-btn mil-md mil-add-arrow">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="mil-banner-img">
                  <img src={img2} alt="banner" className="d-block w-100" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

export const PageBanner = ({
  title = "More than a Platform, a Financial Revolution",
  pageName = "About us",
}) => {
  return (
    <div className="mil-banner mil-banner-inner mil-dissolve">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="mil-banner-text mil-text-center">
              <div className="mil-text-m mil-mb-20">{pageName}</div>
              <h1 className="mil-mb-60">{title}</h1>
              <ul className="mil-breadcrumbs mil-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">{pageName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
