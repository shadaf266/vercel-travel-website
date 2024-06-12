"use client";
import { CallToAction3 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      {/* banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-ba2nner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">Partners</div>
                <h1 className="mil-mb-0">
                Our Partners                
                </h1>
                <p className="mil-text-m mil-soft mil-up">
                Thinking and working together is the key to success in the coming years. For us too, 
                 reliable partners are very important. As a customer you reap the benefits. 
                 Better prices, good loyalty programs and an international network, 
                 through which we can offer local prices.
                </p>
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>
                    <Link href="home">Home</Link>
                  </li>
                  <li>
                    <Link href="price">Partners</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* prices*/}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between  align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-50 mil-up">
              Trusted Partners
              </h2>
              <p className="mil-text-m mil-soft mil-mt-20 mil-mb-30 mil-up">
              At VoyAgency Inc, we believe in building strong relationships with industry 
              leaders to provide our clients with exceptional business travel experiences. 
              Our partners play a crucial role in ensuring that we deliver top-notch services, 
              innovative solutions, and unparalleled support to meet all your corporate travel needs.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/31.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-features">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-30">
              <h2 className="mil-mb-0 mil-up">Airlines</h2>
              <p className="mil-text-m mil-soft mil-up">
              We partner with major airlines around the globe to offer you exclusive deals, 
              premium services, and seamless travel experiences. Our airline partners include:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">American Airlines</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Emirates</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Qatar Airways</h5>
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-up">
               These partnerships allow us to provide you with competitive fares, priority services, 
               and enhanced travel comfort.
              </p>
            </div>
                      <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/32.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-30">
              <h2 className="mil-mb-0 mil-up">Hotels</h2>
              <p className="mil-text-m mil-soft mil-up">
              Our network of hotel partners spans across key business destinations worldwide, 
              ensuring that you have access to the best accommodations suited to your preferences 
              and budget. Our hotel partners include:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Marriott International</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Hilton Hotels & Resorts</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">InterContinental Hotels Group (IHG)</h5>
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-up">
              With these partnerships, we offer you special corporate rates, loyalty rewards, and 
              personalized services to make your stay as comfortable and productive as possible.
              </p>
            </div>
                      <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/33.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-features">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-30">
              <h2 className="mil-mb-0 mil-up">Car Rentals</h2>
              <p className="mil-text-m mil-soft mil-up">
               For seamless ground transportation, we collaborate with leading car rental companies 
               to provide you with flexible and reliable options. Our car rental partners include:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Hertz</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Avis</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Enterprise Rent-A-Car</h5>
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-up">
              These partnerships ensure that you have access to a wide range of vehicles, 
              competitive pricing, and excellent customer service.
              </p>
            </div>
                      <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/34.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-30">
              <h2 className="mil-mb-0 mil-up">Technology & Services</h2>
              <p className="mil-text-m mil-soft mil-up">
              In order to enhance your business travel experience, we partner with cutting-edge 
              technology providers and service companies. Our partners in this category include:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Travel Management Companies (TMCs)</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Online Booking Tools</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">InterContinental Hotels Group (IHG)</h5>
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-up">
              These collaborations enable us to offer you integrated travel solutions, 
              streamlined booking processes, and comprehensive support to manage your travel 
              programs efficiently.
              </p>
            </div>
                      <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/35.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-features">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-30">
              <h2 className="mil-mb-0 mil-up">Why Partner with Us?</h2>
              <p className="mil-text-m mil-soft mil-up">
                 At VoyAgency, we stand out in the crowded travel industry for 
                 several compelling reasons. Firstly, our extensive experience in 
                 travel management sets us apart. With years of navigating the complexities of 
                 travel logistics, we bring a level of expertise that ensures smooth and 
                 hassle-free journeys for our clients.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Mutual Growth</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Innovation</h5>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Excellence</h5>
                  </div>
                </li>
              </ul>
            </div>
                      <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/29.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prices end */}
      <CallToAction3 />
    </PlaxLayout>
  );
};
export default page;
