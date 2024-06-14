import { PageBanner } from "@/components/Banner";
import { CallToAction4 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        title="Business Travelers Management Solutions"
        pageName="Travelers"
      />

      {/* banner end */}
      {/* service */}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Travelers Management Solutions
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              In the fast-paced world of business, efficient and seamless travel is crucial. 
              Our Business Travel Solutions are designed to cater to the 
              unique needs of corporate travelers, ensuring a smooth and productive 
              journey from start to finish. Here’s how we can transform
              your business travel experience:
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/44.jpg"
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
               Tailored Solutions
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              We understand that every business has unique travel requirements. 
              That's why we offer customized travel management solutions tailored to 
              fit your specific needs and preferences. Whether it's individual 
              trips or group travel, we create personalized itineraries that align 
              with your business objectives and travel policies.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/45.jpg"
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
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
               Cost Efficiency
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
            Leveraging our industry expertise and global network, 
            we negotiate competitive rates and optimize travel budgets to 
            maximize savings for your organization. Our advanced booking 
            technology simplifies the booking process while ensuring 
            compliance with corporate travel policies, providing you 
            with cost-effective travel solutions.
            </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/46.jpg"
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
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Key Features              
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Customized Itineraries</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    From individual trips to group travel, we create personalized 
                    itineraries that align with your business objectives and travel policies.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Booking Management</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Utilizing advanced booking technology, we simplify the booking process 
                    while ensuring compliance with corporate travel policies.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Expense Management</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Our integrated platform facilitates efficient expense tracking and reporting,
                    offering transparency and control over travel expenditures.
                    </p>                  
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/47.jpg"
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
               Benefits of Partnering with Us
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Increased Productivity</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Minimize travel-related disruptions and maximize productivity with our efficient 
                    travel management solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Enhanced Travel Experience</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Enjoy seamless travel experiences with access to exclusive perks, amenities, 
                    and dedicated support services.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Cost Savings</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Optimize your travel budget with competitive rates, negotiated discounts, 
                    and efficient expense management solutions.
                    </p>                  
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/48.jpg"
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
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Why Choose Voyagency Inc?
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Industry Expertise</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    With years of experience in business travel management, we understand 
                    the unique challenges and requirements of corporate travelers.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Global Network</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Access our extensive network of partners and suppliers worldwide, 
                    ensuring reliable services and global reach.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Client-Centric Approach</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    We prioritize client satisfaction, offering personalized service 
                    and proactive solutions to meet your evolving business travel needs.
                    </p>                  
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
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
    {/* call to action Start */}
      <CallToAction4 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;