import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout>
      <PageBanner
        pageName="Press"
        title="Featured News"
      />

      {/* banner end */}
      {/* blog list */}
  <div className="mil-blog-list mil-p-0-90">
  <div className="container">
  <div className="mil-blog-list">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/1.png" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Corporate Travel</p>
            <h4>Streamline Your Business Travel Operations</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/02.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Corporate Events</p>
            <h4>Plan Your Corporate Events with Ease for Business Travel</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/03.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Corporate Travel Packages</p>
            <h4>Customized Travel Packages for Corporate Clients</h4>
          </div>
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/04.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Travel Management</p>
            <h4>Efficient Travel Management Solutions</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/05.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Expense Reporting</p>
            <h4>Seamless and Expense Reporting Tools</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/06.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Group Travel</p>
            <h4>Organized Group Travel for Businesses</h4>
          </div>
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/07.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Travel Policy Compliance</p>
            <h4>Ensure Compliance with Travel Policies</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/08.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Risk Management</p>
            <h4>Travel Risk Management</h4>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-md-6">
        <Link href="release" className="mil-blog-card mil-mb-30 mil-up">
          <div className="mil-card-cover">
            <img src="img/inner-pages/blog/09.jpg" alt="cover" className="scale-img" data-value-1={1} data-value-2="1.2" />
          </div>
          <div className="mil-descr">
            <p className="mil-text-xs mil-accent mil-mb-15">Travel Support</p>
            <h4>24/7 Travel Support Services</h4>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>

    <div className="mil-text-center mil-mt-30 mil-up">
      <a href="release" className="mil-btn mil-m mil-add-arrow">
        Explore More Business Travel Services
      </a>
    </div>
  </div>
</div>

      {/* blog list end */}
    </PlaxLayout>
  );
};
export default page;
