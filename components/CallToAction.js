import Link from "next/link";

export const CallToAction1 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
              LET’S EXPLORE THE WORLD WITH VOYAGENCY TRAVELS.
              </h2>
              <p className="mil-text-m mil-dark-soft mil-mb-60 mil-up">
               Experience the ultimate world getaway with VoyAgency Travels! Our all-inclusive tour 
               package features flight tickets, luxurious accommodations, a memorable cruise dinner, 
               beach excursions, and the best activities in Domestic. Explore pristine beaches, 
               indulge in water sports, savor local cuisine, and immerse yourself 
               in the vibrant culture. Book now for an unforgettable adventure.
              </p>
              <div className="mil-up mil-mb-60">
                <Link
                  href="/register"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Book A Trip
                </Link>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="img/home-2/6.jpg" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};


export const CallToAction2 = () => {
  return (
    <div className="mil-cta mil-up" style={{ position: "relative" }}>
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{
            backgroundImage: "url(img/home-3/5.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the color and opacity as needed
            }}
          ></div>
          <div className="row justify-content-between align-items-center" style={{ position: "relative", zIndex: 1 }}>
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up">
              Ready To Travel With Us <br/>
              On Your Next Trip?
              </h2>
              <p className="mil-text-m mil-mb-60 mil-light mil-up">
              Enjoy Trip With Us!  Experience Your  Imaginations Coming To Life
              </p>
              <div className="mil-up mil-mb-60">
                <Link
                  href="/register"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Book A Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
