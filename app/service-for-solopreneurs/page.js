import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        title="Solopreneurs,Professionals and Growing Businesses"
        pageName="Tailored Travel Solutions for"
      />

      {/* banner end */}
      {/* service */}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Solopreneurs, Professionals, and Growing Businesses
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
               At Voyagency Travels, we understand the unique travel needs of solopreneurs, 
               professionals, and growing businesses. Our specialized services ensure that your travel 
               experiences are efficient, cost-effective, and tailored to your specific requirements. 
               Here’s how we cater to these distinct user types:
              </p>
              <div className="mil-up">
                <Link href="/price" className="mil-btn mil-m mil-add-arrow">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/26.jpg"
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
      {/* service end */}
      {/* service */}
      <div className="mil-features">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Solopreneurs
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
               Solopreneurs often juggle multiple roles and need a travel service that is as dynamic as 
               their business. We provide:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Personalized Travel Planning</h5>
                    <p className="mil-text-m mil-soft">
                     We offer bespoke travel itineraries that fit your busy schedule, ensuring that 
                     every trip maximizes productivity and minimizes downtime.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Flexible Booking Options</h5>
                    <p className="mil-text-m mil-soft">
                     Our platform allows for easy modifications and cancellations, providing the 
                     flexibility solopreneurs need.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Exclusive Deals and Discounts</h5>
                    <p className="mil-text-m mil-soft">
                     Access special rates on flights, hotels, and car rentals, helping you manage 
                     travel costs effectively.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">24/7 Support</h5>
                    <p className="mil-text-m mil-soft">
                    Our around-the-clock concierge service ensures you have assistance whenever 
                    you need it, making your travel stress-free.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link href="/price" className="mil-btn mil-m mil-add-arrow">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/27.jpg"
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
      {/* service end */}

            {/* service */}
            <div className="mil-features">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Professionals
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              For professionals who travel frequently for work, we focus on efficiency and convenience:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Streamlined Itineraries</h5>
                    <p className="mil-text-m mil-soft">
                     We design travel plans that optimize your time, including express check-ins and 
                     priority boarding to reduce waiting times.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Networking Opportunities</h5>
                    <p className="mil-text-m mil-soft">
                     Gain access to business lounges and industry events where you can network and build valuable connections.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Comprehensive Expense Management</h5>
                    <p className="mil-text-m mil-soft">
                    Our automated tools simplify expense tracking and reporting, allowing you to focus on your work.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Health and Wellness</h5>
                    <p className="mil-text-m mil-soft">
                     We provide access to fitness facilities and wellness-focused accommodations to keep 
                     you healthy on the road.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link href="/price" className="mil-btn mil-m mil-add-arrow">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/28.jpg"
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
      {/* service end */}

            {/* service */}
            <div className="mil-features">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Growing Businesses
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Growing businesses have expanding travel needs and require scalable solutions:
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Customized Travel Packages</h5>
                    <p className="mil-text-m mil-soft">
                     We offer tailored travel packages that grow with your business, 
                     providing value and convenience.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Policy Compliance and Reporting</h5>
                    <p className="mil-text-m mil-soft">
                     Our services ensure that all travel complies with your company policies, with 
                     detailed reporting for transparency.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Cost Control</h5>
                    <p className="mil-text-m mil-soft">
                     Leverage our negotiated corporate rates to manage your travel budget effectively.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Support for Business Expansion</h5>
                    <p className="mil-text-m mil-soft">
                     As your business expands, our travel solutions adapt to support new locations and 
                     increased travel demands.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link href="/price" className="mil-btn mil-m mil-add-arrow">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
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
      {/* service end */}

            {/* service */}
            <div className="mil-features">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Why Choose Us?
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Flexibility and Customization</h5>
                    <p className="mil-text-m mil-soft">
                     We understand that each user type has unique needs. Our services are flexible 
                     and customizable to fit those specific requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Advanced Technology</h5>
                    <p className="mil-text-m mil-soft">
                     Our state-of-the-art booking and expense management platform provides real-time 
                     updates, easy modifications, and comprehensive reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Sustainability Commitment</h5>
                    <p className="mil-text-m mil-soft">
                    We offer eco-friendly travel options and help you track your carbon footprint, 
                    aligning with modern business values.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Comprehensive Support</h5>
                    <p className="mil-text-m mil-soft">
                    From planning and booking to support during travel, our dedicated team is always 
                    available to assist you.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link href="/price" className="mil-btn mil-m mil-add-arrow">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/30.jpg"
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
      {/* service end */}

      {/* call to action */}
      {/* <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Innovation and Efficiency in Every Transaction
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/4.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Simplicity in Every Step</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Experience the convenience of a simplified payment process,
                    from creating your account
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/5.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">
                    Guaranteed Advanced Security
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    We implement cutting-edge security measures to protect your
                    financial information at all times.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/6.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Unparalleled Efficiency</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Fast, secure and reliable transactions that reflect our
                    commitment to excellence every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* call to action end */}
      {/* quote */}
            {/* quote */}
            <div className="mil-quote">
        <div className="container">
        <p className="mil-text-m mil-soft">
             At Voyagency Travels, we are committed to providing travel solutions that cater 
              specifically to the needs of solopreneurs, professionals, and growing businesses. 
              Our goal is to make your travel experience smooth, efficient, and tailored 
              to your unique requirements.
              </p>
              </div>
              </div>
      {/* <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10"> */}
              {/* <h2 className="mil-mb-30">
                "At Plax, transparency is not just a promise; It is the
                cornerstone of our relationship with you. We believe that trust
                is built with clear policies and coherent actions."
              </h2> */}
              {/* <p className="mil-text-m mil-soft mil-mb-60">
              At Voyagency Travels, we are committed to providing travel solutions that cater 
              specifically to the needs of solopreneurs, professionals, and growing businesses. 
              Our goal is to make your travel experience smooth, efficient, and tailored 
              to your unique requirements.
              </p> */}
              {/* <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Privacy policies</h5>
                        <p className="mil-text-m mil-soft">
                          Your privacy is our priority. We never share your
                          information with third parties without your express
                          consent.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Data protection</h5>
                        <p className="mil-text-m mil-soft">
                          We are committed to protecting your personal and
                          financial data with the highest security measures
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div>
          </div>
        </div>
      </div> */}
      {/* quote end */}
      {/* call to action */}
      {/* <CallToAction2 /> */}
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
