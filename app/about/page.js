import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">About us</div>
                <h1 className="mil-mb-60">
                 We get it! We're business owners who travel for work, just like you.</h1>
                 <p className="mil-text-m mil-soft mil-up">
                 We want the best corporate travel deals; we want to travel in style but hate the post-trip administrative burden.<br/>
                 We know what works for small businesses. We're building something revolutionary. Are you ready to join us? 
                 </p>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Evolution 
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              Our co-founders, Vibhor and Rohit, know the pain points of a small business traveler.
              Vibhor runs a decade old travel agency in Toronto. He travels frequently for business, 
              across Canada and internationally. Rohit, on the other hand, was a business consultant 
              with a Big 4 firm based in Gurgaon and 
              followed Monday to Thursday travel routine for years.  Both, Vibhor and Rohit, are 
              savvy travelers and experienced technologists. 
              </p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              In 2024, they collaborated to start VoyAgency, a travel agency focused on the needs of small businesses.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/001.jpg"
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
      {/* features end */}
      {/* facts */}
      {/* <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={7}>
                  7
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5>Registered Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="1.6">
                  1.6
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5>Regular Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={170}>
                  170
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Countries with our coverage</h5>
            </div>
          </div>
        </div>
      </div> */}
      {/* facts end */}
      {/* call to action */}
      {/* <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Our Strengths: The Trust <br />
                  Base of our users
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Connected Global Network</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Discover how our global network, spanning more than 170
                    countries, facilitates international transactions and
                    connects people around the world.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Robust Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Learn about the security standards that are at the heart of
                    Plax, guaranteeing the protection of our users' financial
                    and personal information.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Continuous Innovation</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Explore how constant innovation drives our growth, allowing
                    us to offer advanced and accessible financial solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* call to action end */}
      {/* features */}
      {/* <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Our Values are foundations of Trust
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Our values, from transparency to accountability, are the
                foundation of our organizational culture and reflect our
                unwavering.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Absolute Transparency:</h5>
                    <p className="mil-text-m mil-soft">
                      Discover how transparency is ingrained in our culture,
                      providing our users with clarity and confidence in every
                      transaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Commitment to Safety:</h5>
                    <p className="mil-text-m mil-soft">
                      Explore our unwavering commitment to security, ensuring
                      every transaction is conducted with the highest standards
                      of protection.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/2.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* features end */}
      {/* team */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
              Corporate Perks for Small Business 
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              You don’t need to be IBM, to get the same corporate deals! VoyAgency through it’s 
              revolutionary platform will get you the same deals (or even better!).   
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">We offer business travel solutions for solopreneurs, entrepreneurs, and small business owners.</h5>
                    <p className="mil-text-m mil-soft">
                     Reliable, value for money service  
                    </p>
                    <p className="mil-text-m mil-soft">
                     Low service fees, more savings  
                    </p>
                    <p className="mil-text-m mil-soft">
                    Latest technology to empower the traveler. 
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Our Philosophy</h5>
                    <p className="mil-text-m mil-soft">
                    Seamless pre and post trip booking experience. 
                    </p>
                    <p className="mil-text-m mil-soft">
                    Empower the small business owner.  
                    </p>
                    <p className="mil-text-m mil-soft">
                    Balance of human touch and technology. 
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/002.jpg"
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
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-light mil-up">
                  Meet Those Who Make VoyAgency Possible
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/10.jpg" alt="portrait" />
                  </div>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-6">
                  <h5 className="mil-light mil-mb-15">Vibhor Chhabra</h5>
                  <p className="mil-text-xs mil-soft team-content">With over 18 years of experience in technology and travel sectors across Canada, USA and India, Vibhor holds strong expertise in strategy, business development and supplier relationships. He has previously worked with Publicis Groupe, Oracle, IBM and KPMG Canada. Prior to co-founding Voyagency, Vibhor owned and operated a business and leisure travel agency in Toronto, Canada. Vibhor is a Canadian national and holds an MBA from the Schulich School of Business, York University.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 col-sm-6">
                <div className="mil-team-card flex-drc mil-mb-30 mil-up">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <h5 className="mil-light mil-mb-15">Rohit Arora</h5>
                  <p className="mil-text-xs mil-soft team-content">
                  Rohit is an entrepreneur with over 20 years with unmatched expertise in corporate travel management and expense management domains. Prior to founding his own ventures, Rohit worked with PwC as their Global Lead for Digital Finance Transformation. In his previous roles, he has led over 50 large scale projects to drive innovation and digital adoption across business finance operations. Rohit is an Indian national and holds Bachelors and Masters degree in Mathematics and Computing from the Indian Institute of Technology, Delhi.
                  </p>
                  </div>
                <div className="col-xl-6 col-md-6 col-sm-6 flex-end">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/03.jpg" alt="portrait" />
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/07.jpg" alt="portrait" />
                  </div>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-6">
                  <h5 className="mil-light mil-mb-15">Puneet Chhabra</h5>
                  <p className="mil-text-xs mil-soft team-content">

                  Puneet is an experienced technology leader and a strategist with over 25 years experience in large-scale global technology implementations and services delivery management. Puneet holds a bachelor’s degree in Electrical engineering from Indian Institute of Technology, Roorkee, India and advance course in software technology from Indian Institute of Technology, Delhi, India.
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 col-sm-6">
                <div className="mil-team-card flex-drc mil-mb-30 mil-up">
                  <div className="col-xl-6 col-md-6 col-sm-6">
                  <h5 className="mil-light mil-mb-15">Anurag Khetarpal</h5>
                  <p className="mil-text-xs mil-soft team-content">
                  Anurag is a seasoned investor based in Dubai with close to 30 years of experience in investment management and venture capital. Anurag holds a masters degree in Economics from University of Mumbai.
                  </p>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-6 flex-end">
                  <div className="mil-portrait mil-mb-30">
                    <img src="img/inner-pages/team/4.jpg" alt="portrait" />
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* team */}
      {/* quote */}
      {/* quote end */}
      {/* call to action */}
      {/* <CallToAction2 /> */}
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
