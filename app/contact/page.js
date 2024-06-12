// import { PageBanner } from "@/components/Banner";
// import { CallToAction2 } from "@/components/CallToAction";
// import PlaxLayout from "@/layouts/PlaxLayout";
// const page = () => {
//   return (
//     <PlaxLayout bg={false}>
//       <PageBanner
//         pageName="Contact us"
//         title="Connect with Us: We are Here to Help You"
//       />

//       {/* contact */}
//       <div className="mil-blog-list mil-p-0-160">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-9">
//               <form>
//                 <div className="row">
//                   <div className="col-md-6 mil-mb-30">
//                     <input
//                       className="mil-input mil-up"
//                       type="text"
//                       placeholder="Name"
//                       name="name"
//                     />
//                   </div>
//                   <div className="col-md-6 mil-mb-30">
//                     <input
//                       className="mil-input mil-up"
//                       type="email"
//                       placeholder="Email"
//                       name="email"
//                     />
//                   </div>
//                   <div className="col-xl-12 mil-mb-30">
//                     <input
//                       className="mil-input mil-up"
//                       type="text"
//                       placeholder="Subject"
//                       name="Subject"
//                     />
//                   </div>
//                   <div className="col-xl-12 mil-mb-30 ">
//                     <textarea
//                       cols={30}
//                       rows={10}
//                       className="mil-up"
//                       placeholder="Message"
//                       name="message"
//                       defaultValue={""}
//                     />
//                   </div>
//                 </div>
//                 <div className="mil-up">
//                   <button type="submit" className="mil-btn mil-m">
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//               <div className="alert-success" style={{ display: "none" }}>
//                 <h5>Thanks, your message is sent successfully.</h5>
//               </div>
//               <div className="mil-p-160-0">
//                 <h5 className="mil-mb-30 mil-up">
//                   We are available on the following channels:
//                 </h5>
//                 <p className="mil-text-m mil-soft mil-mb-10 mil-up">
//                   Address: 500 4th Ave SW Calgary AB
//                 </p>
//                 <p className="mil-text-m mil-soft mil-mb-10 mil-up">
//                   Telephone: +1-888-227-3799
//                 </p>
//                 <p className="mil-text-m mil-soft mil-up">
//                   Email: support@Voyagency.travel
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* contact end */}
//       {/* call to action */}
//       <CallToAction2 />
//       {/* call to action end */}
//     </PlaxLayout>
//   );
// };
// export default page;

"use client";
import React, { useState } from 'react';
import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";

const defaultValue = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Page = () => {
  const [formData, setFormData] = useState(defaultValue);
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    validateForm()
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true)
      const response = await fetch('/api/sendmail', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status === 'success') {
        setError('')
        // setResponseMessage('Thank you for your message. We will be in touch soon.');
        alert('Thank you for your message. We will be in touch soon.')
        setFormData(defaultValue)
      } else {
        setError('An error occurred. Please try again.');
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Contact us"
        title="Connect with Us: We are Here to Help You"
      />
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="text"
                      placeholder="Name*"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                  </div>
                  <div className="col-md-6 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                  <div className="col-xl-12 mil-mb-30">
                    <input
                      className="mil-input mil-up"
                      type="text"
                      placeholder="Subject*"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <div className="error">{errors.subject}</div>}
                  </div>
                  <div className="col-xl-12 mil-mb-30 ">
                    <textarea
                      cols={30}
                      rows={10}
                      className="mil-up"
                      placeholder="Message*"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                  </div>
                </div>
                <div className="mil-up">
                  <button type="submit" className="mil-btn mil-m" disabled={loading}>
                    Send Message
                  </button>
                </div>
              </form>
              {responseMessage && (
                <div className="alert-success">
                  {console.log("Success message displayed:", responseMessage)}
                  <h5>{responseMessage}</h5>
                </div>
              )}
              {error && (
                <div className="alert-danger">
                  {console.log("Error message displayed:", error)}
                  <h5>{error}</h5>
                </div>
              )}
              <div className="mil-p-160-0">
                <h5 className="mil-mb-30 mil-up">
                  We are available on the following channels:
                </h5>
                <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Address: 500 4th Ave SW Calgary AB
                </p>
                <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                  Telephone: +1-888-227-3799
                </p>
                <p className="mil-text-m mil-soft mil-up">
                  Email: support@Voyagency.travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction2 />
    </PlaxLayout>
  );
};

export default Page;
