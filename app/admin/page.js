import { PageBanner } from "@/components/Banner";
import { CallToAction4 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        title="Business Travel Admin Management Solutions"
        pageName="Admin"
      />

      {/* banner end */}
      {/* service */}
      <div className="mil-features">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Business Travel Admin Management Solutions              
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Creating a comprehensive business travel administration solution involves developing 
              a platform that helps companies manage their travel arrangements efficiently. 
              This solution should streamline the booking process, ensure compliance with company 
              policies, handle expenses, and provide valuable insights through reporting. 
              Below is an outline for developing such a solution:
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/49.jpg"
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
              User Management              
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Admin Accounts</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Allow super-admins and admins to manage company-wide 
                    settings and monitor travel.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Employee Accounts</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Employees can book travel, submit expenses, 
                    and view their travel history.
                    </p>                  
                    </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame ml-up">
                <img
                  src="img/inner-pages/50.jpg"
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
              Travel Booking System
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Flights</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Integrate with major airlines for booking.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">
                      Hotels
                    </h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Connect with hotel booking platforms.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Travel Packages</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Custom packages for frequently visited destinations.                    
                    </p>                  
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Car Rentals</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Partnerships with car rental services.
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
                  src="img/inner-pages/51.jpg"
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
              Expense Management               
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Expense Reporting</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Employees can submit expenses for approval.                    
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Receipt Upload</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Upload receipts via mobile app or web.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Approval Workflow</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Multi-level approval system for expenses.
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
                  src="img/inner-pages/52.jpg"
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
              Policy Compliance              
              </h2>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Policy Setup</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Define company travel policies including spending limits, 
                    preferred vendors, etc.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Real-time Compliance Checks</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Automated checks to ensure bookings and expenses comply with policies.
                    </p>                  
                    </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Notifications</h5>
                    <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                    Alert employees and managers when there are policy violations.
                    </p>                  
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/53.jpg"
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
