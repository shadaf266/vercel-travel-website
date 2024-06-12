"use client";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <PlaxLayout bg={false}>
      {/* banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">Case Studies</div>
                <h1 className="mil-mb-0">Success Stories from Our Clients</h1>
                <p className="mil-text-m mil-soft mil-up">
                  Discover how VoyAgency has helped businesses optimize their travel programs, reduce costs, and enhance traveler satisfaction through tailored solutions.
                </p>
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* case studies */}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-0 mil-up">Global Tech Co.</h2>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Challenge:</strong> Global Tech Corporation faced significant challenges with managing their international travel program, including high costs, inefficient booking processes, and lack of visibility into travel spend.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Solution:</strong> VoyAgency implemented a comprehensive travel management solution, including a customized online booking tool, negotiated rates with airline and hotel partners, and a robust expense management system.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Results:</strong> Within six months, Global Tech Corporation saw a 20% reduction in travel costs, a 30% increase in booking efficiency, and improved compliance with their travel policy. Traveler satisfaction also increased, with employees appreciating the streamlined booking process and enhanced support.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/36.jpg"
                  alt="Global Tech Corporation"
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
              <h2 className="mil-mb-0 mil-up">Financial Services</h2>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Challenge:</strong> The Financial Services Firm needed to manage frequent travel for their consultants, who required flexible and reliable travel options. The firm struggled with last-minute bookings, high costs, and complex itineraries.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Solution:</strong> VoyAgency provided dedicated travel consultants to handle the firm's travel needs, offered negotiated rates with preferred airlines and hotels, and implemented a mobile app for easy access to travel itineraries and support.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Results:</strong> The firm experienced a 25% reduction in travel expenses and significantly improved traveler satisfaction. The consultants benefited from the flexibility and personalized service provided by VoyAgency’s travel consultants.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/37.jpg"
                  alt="Financial Services Firm"
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
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-0 mil-up">Manufacturing Co.</h2>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Challenge:</strong> The Manufacturing Company needed to coordinate travel for their sales team, who frequently traveled to various domestic and international locations. They faced issues with managing travel expenses and ensuring policy compliance.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Solution:</strong> VoyAgency introduced an integrated travel and expense management platform, provided training for employees on the new system, and negotiated discounted rates with key travel vendors.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Results:</strong> The company achieved a 15% reduction in travel costs, improved policy compliance, and better visibility into travel spend. The sales team reported increased efficiency in managing their travel arrangements.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/38.jpg"
                  alt="Manufacturing Company"
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
              <h2 className="mil-mb-0 mil-up">Non-Profit Org.</h2>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Challenge:</strong> The Non-Profit Organization needed to manage travel for their volunteers and staff while keeping costs low and ensuring safety and compliance with organizational policies.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Solution:</strong> VoyAgency provided a tailored travel management solution that included discounted rates for non-profits, a centralized booking system, and travel risk management services.
              </p>
              <p className="mil-text-m mil-soft mil-up">
                <strong>Results:</strong> The organization saw a 30% reduction in travel costs and improved travel safety and compliance. Volunteers and staff appreciated the ease of booking and the support provided by VoyAgency.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/39.jpg"
                  alt="Non-Profit Organization"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction2 />
    </PlaxLayout>
  );
};

export default CaseStudies;
