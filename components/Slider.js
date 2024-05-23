import Link from "next/link";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Pagination]);
const Slider = ({
  testimonials = [
    {
      title: "How We Are Different?",
      subTitle: "Business Travel",
      img: "img/home-2/8.png",
      img2: "img/home-2/9.png",
      style: { maxWidth: "135%", transform: "translateX(5%)" },
      dark: false,
    },
    // Add more testimonials here
  ],
}) => {
  return (
    <div className="testimonials-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
            <>
          <SwiperSlide key={index}>
            <div className={`mil-banner mil-dissolve ${testimonial.dark ? "mil-dark-2" : ""}`}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="mil-banner-text">
                      <h6 className="mil-text-gradient-2 mil-mb-20">{testimonial.subTitle}</h6>
                      <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                        {testimonial.title}
                      </h1>
                      <div className="mil-buttons-frame">
                        <Link href="travel" className="mil-btn mil-md mil-add-arrow">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 banner-column">
                    <div className="mil-banner-img">
                      <img src={testimonial.img} alt="banner" style={testimonial.style} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={index}>
                   <div className={`mil-banner mil-dissolve ${testimonial.dark ? "mil-dark-2" : ""}`}>
                     <div className="container">
                       <div className="row align-items-center">
                         <div className="col-xl-6">
                           <div className="mil-banner-text">
                             <h6 className="mil-text-gradient-2 mil-mb-20">Expense Management</h6>
                             <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                              Simplified Expense Management for Seamless Travel Planning and Cost Control
                             </h1>
                             <div className="mil-buttons-frame">
                               <Link href="services-expense-management" className="mil-btn mil-md mil-add-arrow">
                                Learn More
                               </Link>
                             </div>
                           </div>
                         </div>
                         <div className="col-xl-6 banner-column">
                           <div className="mil-banner-img img-9">
                             <img src={'img/home-2/9.png'} alt="banner" className="img-slide-2" style={testimonial.style} />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
                   <SwiperSlide key={index}>
                   <div className={`mil-banner mil-dissolve ${testimonial.dark ? "mil-dark-2" : ""}`}>
                     <div className="container">
                       <div className="row align-items-center">
                         <div className="col-xl-6 ">
                           <div className="mil-banner-text">
                             <h6 className="mil-text-gradient-2 mil-mb-20">Tailored Travel Solutions for</h6>
                             <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                              Solopreneurs, Professionals And Growing Bsinesses
                             </h1>
                             <div className="mil-buttons-frame">
                               <Link href="service-for-solopreneurs" className="mil-btn mil-md mil-add-arrow">
                               Learn More
                               </Link>
                             </div>
                           </div>
                         </div>
                         <div className="col-xl-6 banner-column">
                           <div className="mil-banner-img img-2">
                             <img src={'img/home-2/10.png'} alt="banner" className="img-slide-2" style={testimonial.style} />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
                 </>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

// Example usage of TestimonialsSlider
export const PageTestimonials = ({
  title = "Client Testimonials",
  testimonials = [
    {
      title: "How We Are Different?",
      subTitle: "Business Travel",
      img: "img/home-2/8.png",
      style: { maxWidth: "135%", transform: "translateX(5%)" },
      dark: false,
    },
    {
      title: "Exceptional Service",
      subTitle: "Corporate Travel",
      img: "img/home-2/9.png",
      style: { maxWidth: "135%", transform: "translateX(5%)" },
      dark: true,
    },
    // Add more testimonials here
  ],
}) => {
  return (
    <div className="page-testimonials">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="testimonials-header mil-text-center">
              <h1 className="mil-mb-60">{title}</h1>
            </div>
            <Slider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};
