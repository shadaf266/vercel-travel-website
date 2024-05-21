"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import Slider from "@/components/Slider";
import { Testimonials2 } from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout>
      {/* banner */}
      {/* <Banner /> */}
      <Slider/>
      {/* banner end */}
      {/* brands */}
      {/* <div className="mil-brands mil-p-160-160">
        <div className="container">
          <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
            Join over 7,000 satisfied customers who enjoy our service!
          </h5>
          <div className="row justify-content-center">
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/2.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/3.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/4.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* brands end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              {/* <h2 className="mil-mb-30 mil-up">Our essence, your experience</h2> */}
              <h2 className="mil-mb-30 mil-up">Product Features</h2>
              {/* <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Visualize your financial progress with detailed reports and
                graphs <br />
                that give you visual insights into your spending and saving
                habits.
              </p> */}
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              VoyAgency Inc. is a Calgary, Alberta based travel management company 
              the North American SMB market.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Experience Exceptional Service Worldwide</h5>
                    <p className="mil-text-m mil-soft">
                     Receive top-notch assistance and support no matter where you are. 
                     We are dedicated to ensuring your peace of mind by providing:
                    </p>
                    {/* <ul className="feature-list">
                      <li>
                       <b>24/7 Customer Support:</b><br/> our team of travel experts around the clock to address any concerns or emergencies.
                      </li>
                      <li>
                       <b>Global Network:</b><br/> Benefit from our extensive network of partners and services worldwide, ensuring seamless travel experiences.
                      </li>
                    </ul> */}
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Rewards Tailored to Your Lifestyle</h5>
                    <p className="mil-text-m mil-soft">
                    VoyAgency Inc. offers a personalized rewards program that
                    aligns with your lifestyle, allowing you to earn and enjoy exclusive benefits:
                    </p>
                    {/* <ul className="feature-list">
                      <li>
                       <b>Earn Points with Every Purchase:</b><br/> Accumulate points with every booking and transaction, enhancing the value of your travel expenditures.
                      </li>
                      <li>
                       <b>Exclusive Rewards</b><br/> Redeem your points for a variety of exclusive rewards, including luxurious trips, high-quality products, and more.
                      </li>
                    </ul> */}
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame">
                <img src="img/home-2/2.jpg" alt="image" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-illustration-fix mil-p-160-0">
            <div className="row align-items-end">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                 WHY CHOOSE VOYAGENCY?
                </h2>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                 At VoyAgency, we stand out in the crowded travel industry for 
                 several compelling reasons. Firstly, our extensive experience in 
                 travel management sets us apart. With years of navigating the complexities of 
                 travel logistics, we bring a level of expertise that ensures smooth and 
                 hassle-free journeys for our clients.
                </p>
              </div>
            </div>
            <div className="mil-illustration-absolute mil-up">
              <img src="img/home-2/3.jpg" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Worldwid Coverage</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Seamless travel solutions across the globe, tailored to your needs and preferences.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Best Support 24/7</h5>
                <p className="mil-text-s mil-soft mil-up">
                 Unmatched 24/7 support ensures seamless travel experiences, offering peace of mind around the clock.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Fast Booking</h5>
                <p className="mil-text-s mil-soft mil-up">
                Instantly reserve your trip with VoyAgency – enjoy swift, 
                hassle-free booking for your travel needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* call to action */}
      {/* <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Innovation and Efficiency in Every Transaction
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="register"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Unmatched Speed</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Make instant transfers and experience <br />
                    Plax's unparalleled speed with every transaction.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Extensive Global Network</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Connect with the world through our <br />
                    global network that spans more than <br />
                    170 countries.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Advanced Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Protect your assets with our robust <br />
                    security protocols and cutting-edge <br />
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Finest Safety Systems
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="/services"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Travel Documentation</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  VoyAgency ensures seamless travel documentation for a hassle-free journey.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">24x7 Emergency Support</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  VoyAgency offers 24x7 emergency support to handle any travel disruptions swiftly.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Transportation Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                   Secure your journey with Voyagency – the trusted name in travel safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      {/* <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Plax Standard unusual activity detection
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Keep track of your financial activity and the response to alert.{" "}
                <br />
                Your security is our priority, are always one step forward.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Connected device management</h5>
                    <p className="mil-text-m mil-soft">
                      Plax monitors the devices connected to your <br />
                      account. If we detect activity from a new device or <br />
                      an unusual change, we will notify you.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link
                  href="/about"
                  className="mil-btn mil-button-transform mil-m mil-add-arrow"
                >
                  More Information
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <img
                src="img/home-2/4.png"
                alt="image"
                className="mil-up"
                style={{ width: "115%" }}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        {/* <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
  <h2 className="mil-mb-30 mil-up">
    Instant Alerts & Notifications with Voyagency
  </h2>
  <p className="mil-text-m mil-soft mil-mb-60 mil-up">
    Stay updated on your travel plans with real-time alerts and notifications. <br />
    Ensure your journey is smooth and secure with our comprehensive travel updates.
  </p>
  <ul className="mil-list-2 mil-type-2">
    <li>
      <div className="mil-up">
        <h5 className="mil-mb-15">Real-Time Security Alerts</h5>
        <p className="mil-text-m mil-soft">
          Receive immediate notifications for any changes or issues. <br />
          Act promptly to ensure your safety and travel plans.
        </p>
      </div>
    </li>
    <li>
      <div className="mil-up">
        <h5 className="mil-mb-15">Notification History</h5>
        <p className="mil-text-m mil-soft">
          Track all updates and alerts for your trips. <br />
          Your security is our priority, keeping you informed at every step.
        </p>
      </div>
    </li>
  </ul>
</div>

            <div className="col-xl-5 mil-mb-80">
              <img
                src="img/home-2/5.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div> */}
      </div>
      {/* features end */}
      {/* testimonials */}
      <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <Testimonials2 />
        </div>
      </div>
      {/* testimonials end */}
      {/* call to action */}
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default page;
