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
    <div className="mil-cta mil-up">
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{ backgroundImage: "url(img/home-3/5.png)" }}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up">
                Discover the freedom <br />
                of Total Financial Control
              </h2>
              <p className="mil-text-m mil-mb-60 mil-dark-soft mil-up">
                Join Plax and take the first step towards a more <br /> balanced
                and hassle-free financial life.
              </p>
              <div className="mil-buttons-frame mil-up">
                <a href="https://apps.apple.com/" target="_blank" className="mil-btn mil-md">
                  App Store
                </a>
                <a href="https://play.google.com/" target="_blank" className="mil-btn mil-border mil-md">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
