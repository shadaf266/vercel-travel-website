import { PageBanner } from "@/components/Banner";
import { CallToAction4 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        title="Business Travel Management For Travel Managers"
        pageName="Managers"
      />

      {/* banner end */}
      {/* service */}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Business travel management for travel managers              
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Business travel management for travel managers involves overseeing and optimizing 
              all aspects of corporate travel for an organization. Here are key responsibilities 
              and strategies for effective management:
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/54.jpg"
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
              Policy Development        
              </h2>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
              Establishing clear travel policies that outline guidelines for booking, expenses,
               accommodation preferences, and travel safety protocols.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/55.jpg"
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
              Booking and Coordination       
              </h2>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
              Managing the booking process efficiently, ensuring cost-effective travel arrangements 
              while accommodating employee preferences and company policies.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/56.jpg"
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
              Expense Control           
              </h2>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
              Monitoring travel expenses, negotiating rates with travel vendors
             (airlines, hotels, car rentals), and implementing cost-saving measures.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/57.jpg"
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
          <div className="row  justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Travel Risk Management  
              </h2>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
              Assessing and mitigating travel risks by monitoring global events, 
              providing travel advisories, and ensuring compliance with safety protocols 
              and insurance coverage.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/58.jpg"
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
