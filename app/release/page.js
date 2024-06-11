import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout>
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">Press</div>
                <h1 className="mil-mb-60">
                 Corporate Travel
                </h1>
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>
                    <Link href="home-3">December 9, 2023</Link>
                  </li>
                  <li>
                    <Link href="about">48 Comments</Link>
                  </li>
                  <li>
                    <Link href="about">356 Shared</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* publication */}
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="mil-pub-cover mil-up">
                <img
                  src="img/inner-pages/blog/1.png"
                  alt="cover"
                  className="scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
            <div className="col-xl-9 mil-p-80-80">
              <h2 className="mil-mb-60 mil-up">
               Streamline Your Business Travel Operations
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
               Managing business travel can be complex and time-consuming. At VoyAgency, 
               we specialize in simplifying corporate travel, allowing you to focus on your business. 
               Our travel management solutions save time, reduce costs, and enhance the travel 
               experience for your employees. With efficient booking processes, cost savings from 
               negotiated rates, and automated compliance checks, we ensure adherence to your travel 
               policies.
              </p>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
               Our real-time reporting and analytics provide insights into travel spend, 
               while our 24/7 support team assists with any travel-related issues. We prioritize 
               traveler safety with robust risk management solutions 
               and offer seamless expense management integration 
               to reduce administrative burdens. 
              </p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
              Choose VoyAgency for a more efficient 
               and hassle-free business travel experience, and optimize your travel operations, 
               control costs, and ensure traveler safety and satisfaction. 
               ontact us today to learn more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mil-up">
              <div className="mil-pub-cover mil-inner mil-mb-30">
                <img
                  src="img/inner-pages/blog/03.jpg"
                  alt="cover"
                  className="scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
            <div className="col-sm-6 mil-up">
              <div className="mil-pub-cover mil-inner mil-mb-30">
                <img
                  src="img/inner-pages/blog/02.jpg"
                  alt="cover"
                  className="scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 mil-p-50-80">
              <h4 className="mil-mb-60">
               Efficient Booking Processes
              </h4>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
              Our advanced booking platform enables quick and easy reservations for flights, hotels, and car rentals.
              Access a wide range of travel options tailored to your company's preferences and budget.
              </p>
              <ul className="mil-pup-tags mil-mb-80 mil-up">
                <li>
                  <a href="#.">search</a>
                </li>
                <li>
                  <a href="#.">Booking</a>
                </li>
                <li>
                  <a href="#.">Digital Platform</a>
                </li>
                <li>
                  <a href="#.">Easy Reservations</a>
                </li>
              </ul>
              <div className="mil-share-frame mil-mb-80 mil-up">
                <h6>Share:</h6>
                <ul className="mil-pup-share">
                  <li>
                    <a href="#.">
                      <i className="fab fa-facebook-f" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fab fa-twitter" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="fab fa-linkedin-in" />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mil-next-post">
                <Link href="publication" className="mil-descr mil-up">
                  <p className="mil-text-m mil-soft mil-mb-15">
                    Read next posts
                  </p>
                  <h5>Plan Your Corporate Events with Ease for Business Travel</h5>
                </Link>
                <Link href="publication" className="mil-cover mil-up">
                  <img src="img/inner-pages/blog/04.jpg" alt="cover" />
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9">
              <h4 className="mil-mb-60 mil-up">(48) Comments</h4>
              <ul className="mil-comments mil-mb-80">
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/1.jpg" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Samir Holm</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/2.jpg" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Menphik Bakke</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/3.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Zaida Andresen</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power of
                            choice is untrammelled and when nothing prevents our
                            being able to do what we like best, every pleasure
                            is to be welcomed and every pain avoided.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/4.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Amin Lien</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided.
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mil-comment mil-up">
                    <div className="mil-avatar">
                      <img src="img/faces/5.png" alt="user" />
                    </div>
                    <div className="mil-comment-text">
                      <h6 className="mil-mb-10">Yamina Frediksen</h6>
                      <p className="mil-text-xs mil-soft mil-mb-15">
                        December 10, 2023 at 10:13
                      </p>
                      <p className="mil-text-s mil-soft">
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided.
                      </p>
                      <a href="#." className="mil-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/1.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Haidar Knudsen</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/6.png" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Jane Boonboots</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            Was born and I will give you a complete account of
                            the system, and expound the actual teachings of the
                            great explorer of the truth.
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mil-comment mil-up">
                        <div className="mil-avatar">
                          <img src="img/faces/2.jpg" alt="user" />
                        </div>
                        <div className="mil-comment-text">
                          <h6 className="mil-mb-10">Amin Lien</h6>
                          <p className="mil-text-xs mil-soft mil-mb-15">
                            December 10, 2023 at 10:13
                          </p>
                          <p className="mil-text-s mil-soft">
                            But I must explain to you how all this mistaken idea
                          </p>
                          <a href="#." className="mil-reply">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-xl-9">
              <h4 className="mil-mb-60 mil-up">Leave your comment</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="your e-mail"
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      placeholder="Your website/social profile"
                    />
                  </div>
                  <div className="col-xl-12 mil-mb-30 ">
                    <textarea
                      cols={30}
                      rows={10}
                      className="mil-up"
                      placeholder="Write your comment here"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mil-checkbox-frame mil-mb-30 mil-up">
                  <div className="mil-checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" />
                  </div>
                  <p className="mil-text-xs mil-soft">
                    I agree that the data submitted, collected and stored *
                  </p>
                </div>
                <div className="mil-up">
                  <button type="submit" className="mil-btn mil-m">
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* publication end */}
    </PlaxLayout>
  );
};
export default page;
