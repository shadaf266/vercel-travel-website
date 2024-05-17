import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/utility/sliderProps";
const Banner = ({
  title = "How We Are Different?",
  subTitle = "Business Travel",
  img = "img/home-2/8.png",
  style = { maxWidth: "135%", transform: "translateX(5%)" },
  dark = false,
}) => {
  return (
    // <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-xl-6">
    //         <div className="mil-banner-text">
    //           <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
    //           <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
    //             {title}
    //           </h1>
    //           <div className="mil-buttons-frame">
    //             <Link href="register" className="mil-btn mil-md mil-add-arrow">
    //               Try demo
    //             </Link>
    //             {/* <a
    //               href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
    //               className="mil-btn mil-md mil-light mil-add-play has-popup-video"
    //             >
    //               Watch tutorial
    //             </a> */}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-6">
    //         <div className="mil-banner-img">
    //           <img src={img} alt="banner" style={style} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay won't stop after user interactions
        }}
      >
    {[1, 2, 3].map((_, index) => (
      <SwiperSlide key={index}>
        <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="mil-banner-text">
                  <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
                  <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                    {title}
                  </h1>
                  <div className="mil-buttons-frame">
                    <Link href="register" className="mil-btn mil-md mil-add-arrow">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="mil-banner-img">
                  <img src={img} alt="banner" style={style} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
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
