"use client";
import { sweetMixinSuccessAlert } from "@/app/sweetAlert";
import Image from "next/image";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Contact(): JSX.Element {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const authMember = useReactiveVar(userVar);

  useEffect(() => {
    if (!authMember?.memberNick) {
      window.location.href = "/";
    }
  }, [authMember]);

  if (!authMember?.memberNick) {
    return <></>;
  }

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
                {t("ContactUsDropMessage")}
              </h2>
              <h5 className="sub-title style-1">
                {t("ContactUsDropMessageText")}{" "}
                <a
                  href="mailto:zoirovtokhirjon@gmail.com"
                  style={{ color: "#007bff", fontWeight: "bold" }}
                >
                  zoirovtokhirjon@gmail.com
                </a>
                .
              </h5>

              <div className="form-inner">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!isValidEmail) {
                      alert("Please enter a valid email.");
                      return;
                    }
                    // You can handle sending the data here
                    sweetMixinSuccessAlert(
                      "Your message has successfully sent to Admin, they will contact you as soon as possible!"
                    );
                    window.location.reload();
                  }}
                  className="form-submit"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("ContactUsName") ?? "Your Full Name"}
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("ContactUsEmail") ?? "Your Email Address"}
                    required
                  />
                  {!isValidEmail && email.length > 0 && (
                    <p style={{ color: "red" }}>{t("ContactUsInvalidEmail")}</p>
                  )}
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t("ContactUsMessage") ?? "Message"}
                    required
                  ></textarea>
                  <button type="submit" className="submit">
                    {t("ContactUsSendMessage")}
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
