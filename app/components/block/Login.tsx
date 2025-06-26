"use client";
import { logIn } from "@/app/(auth)";
import { sweetMixinErrorAlert } from "@/app/sweetAlert";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Login(): JSX.Element {
  const { t } = useTranslation("common");
  const router = useRouter();
  const searchParams = useSearchParams();

  const [input, setInput] = useState({
    nick: "",
    password: "",
    phone: "",
    type: "USER",
  });

  const doLogin = useCallback(async () => {
    console.warn(input);
    try {
      console.log("doSignup worked");
      await logIn(input.nick, input.password);
      const referrer = searchParams.get("referrer") ?? "/";
      router.push(referrer);
    } catch (err: any) {
      await sweetMixinErrorAlert(err.message);
    }
  }, [input]);

  // HANDLERS

  const handleInput = useCallback((name: any, value: any) => {
    setInput((prev) => {
      console.log("name:", name);
      console.log("value:", value);

      return { ...prev, [name]: value };
    });
  }, []);

  return (
    <>
      <section className="tf-login tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-1">{t("LoginToNft")}</h2>
              <div className="flat-form box-login-social">
                <div className="box-title-login">
                  <h5>{t("LoginWithSocial")}</h5>
                </div>
                <ul>
                  <li>
                    <a className="sc-button style-2 fl-button pri-3">
                      <i className="icon-fl-google-2" />
                      <span>Google</span>
                    </a>
                  </li>
                  <li>
                    <a className="sc-button style-2 fl-button pri-3">
                      <i className="icon-fl-facebook" />
                      <span>Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flat-form box-login-email">
                <div className="box-title-login">
                  <h5>{t("LoginWithEmail")}</h5>
                </div>
                <div className="form-inner">
                  <form
                    action="#"
                    id="contactform"
                    onSubmit={(e) => {
                      e.preventDefault();
                      doLogin();
                    }}
                  >
                    <input
                      id="name"
                      name="name"
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="text"
                      placeholder={t("LoginWithEmail") ?? "Your Name"}
                      onChange={(e) => handleInput("nick", e.target.value)}
                    />
                    <input
                      id="pass"
                      name="pass"
                      tabIndex={3}
                      aria-required="true"
                      type="text"
                      placeholder={t("LoginPassword") ?? "Set Your Password"}
                      required
                      onChange={(e) => handleInput("password", e.target.value)}
                    />

                    <div className="row-form style-1">
                      <label>
                        {t("LoginRemember")}
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                      <a className="forgot-pass">{t("LoginForgot")}</a>
                    </div>
                    <button className="submit" type="submit">
                      {t("Login")}
                    </button>
                  </form>
                </div>
                <h5
                  style={{
                    marginTop: "25px",
                    fontSize: "16px",
                    fontWeight: "normal",
                  }}
                >
                  {t("LoginNotRegistered")}
                  <a
                    href="/signup"
                    style={{
                      color: "#4CAF50",
                      fontWeight: "bold",
                      textDecoration: "none",
                      marginLeft: "5px",
                    }}
                  >
                    {t("Sign Up")}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
