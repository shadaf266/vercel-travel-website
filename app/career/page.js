import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout>
      <PageBanner pageName="Careers" title="Where your Talent Finds a Home" />
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5">
              <h2 className="mil-up">
                Be part of our Team of Experts
              </h2>
              <p className="mil-text-m mil-soft mil-up">
                Explore exciting opportunities and discover how your career can
                flourish at VoyAgency Inc.
              </p>
              <ul className="mil-list-2">
                <li>
                  <div className="mil-up">
                    <h5 className="">Innovation Culture</h5>
                    <p className="mil-text-m mil-soft">
                      At VoyAgency Inc, we foster an environment of constant innovation.
                      Here, your creativity and passion combine to drive
                      industry-leading solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="">Professional growth</h5>
                    <p className="mil-text-m mil-soft">
                      We offer opportunities for continued professional
                      development. At VoyAgency Inc, you not only work on your job, but
                      on your career.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-0">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.jpg"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* call to action */}
      <div className="mil-cta mil-p-0-160 mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-2">
            <div className="row justify-content-center align-items-center mil-p-160-160">
              <div className="col-xl-7 mil-text-center">
                <h2 className="mil-light mil-mb-30 mil-up">
                  Join our team, where Innovation is our priority
                </h2>
                <p className="mil-text-m mil-light mil-mb-60 mil-up">
                  Join a dedicated, innovative team committed <br />
                  to excellence at every step.
                </p>
                <div className="mil-up">
                  <Link
                    href="/register"
                    className="mil-btn mil-md mil-add-arrow"
                  >
                    Register now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* vacancies */}
      <div className="mil-faq mil-p-0-130">
        <div className="container">
          <div className="mil-text-center">
            <h2 className="mil-mb-60 mil-up">
              Explore Career <br />
              Opportunities at VoyAgency Inc
            </h2>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">
                Travel Consultant/Agent
              </h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Assists clients in planning and booking their travel arrangements, including flights, 
              hotels, car rentals, and other travel-related services.
              </p>
          <ul className="mil-tags">
            <li>Client Assistance</li>
            <li>Booking Coordination</li>
            <li>Remote/Office</li>
          </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                See position
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Corporate Travel Manager</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Manages travel programs for corporate clients, ensuring efficient and 
              cost-effective travel arrangements.
              </p>
              <ul className="mil-tags">
              <li>Travel Program Management</li>
              <li>Cost Efficiency</li>
              <li>New York, USA</li>
             </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                See position
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Account Manager</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Handles relationships with key corporate clients, ensuring their travel needs 
              are met and providing ongoing support and solutions.
              </p>
              <ul className="mil-tags">
              <li>Client Relationships</li>
              <li>Service Support</li>
              <li>London, UK</li>
          </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                See position
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-30 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Travel Coordinator</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Coordinates travel plans and itineraries for employees or clients, managing logistics 
              and ensuring compliance with company policies.
              </p>
              <ul className="mil-tags">
            <li>Itinerary Planning</li>
            <li>Logistics Management</li>
            <li>Remote</li>
           </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                See position
              </Link>
            </div>
          </div>
          <div className="mil-vacancie mil-mb-60 mil-up">
            <div className="mil-left">
              <h4 className="mil-mb-30">Operations Manager</h4>
              <p className="mil-text-m mil-soft mil-mb-30">
              Oversees the daily operations of the travel agency, managing staff, processes, 
              and ensuring quality service delivery.
              </p>
              <ul className="mil-tags">
                <li>Daily Operations</li>
                <li>Staff Management</li>
                <li>Chicago, USA</li>
             </ul>
            </div>
            <div className="mil-right mil-up">
              <Link
                href="career-details"
                className="mil-btn mil-m mil-add-arrow"
              >
                See position
              </Link>
            </div>
          </div>
          <div className="mil-text-center mil-up">
            <a href="#" className="mil-btn mil-m mil-add-arrow">
              Loads more jobs
            </a>
          </div>
        </div>
      </div>
      {/* vacancies end */}
    </PlaxLayout>
  );
};
export default page;
