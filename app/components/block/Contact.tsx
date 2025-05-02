"use client";
import Image from "next/image";

export default function Contact(): JSX.Element {
  return (
    <>
      <section className="tf-contact tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-feature-contact">
                <Image
                  height={522}
                  width={522}
                  src="/assets/images/blog/thumb-8.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="tf-title-heading style-2 mg-bt-12">
                Drop Us a Message
              </h2>
              <h5 className="sub-title style-1">
                Have a question or need support? Fill out the form below and
                we'll get back to you as soon as possible.
              </h5>
              <div className="form-inner">
                <form
                  action="contact/contact-process2.php"
                  method="post"
                  id="contactform"
                  className="form-submit"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                  />
                  <textarea id="message" name="message" placeholder="Message" />
                  <button
                    type="button"
                    className="submit"
                    onClick={() => window.location.reload()}
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
