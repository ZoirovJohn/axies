"use client";
import { signUp } from "@/app/(auth)";
import { sweetMixinErrorAlert } from "@/app/sweetAlert";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

export default function Signup(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [input, setInput] = useState({
    nick: "",
    password: "",
    phone: "",
    type: "USER",
  });

  const doSignUp = useCallback(async () => {
    console.warn(input);
    try {
      console.log("doSignup worked");
      await signUp(input.nick, input.password, input.phone, input.type);
      const referrer = searchParams.get("referrer") ?? "/";
      router.push(referrer);
    } catch (err: any) {
      await sweetMixinErrorAlert(err.message);
    }
  }, [input, router, searchParams]);

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
              <h2 className="tf-title-heading ct style-1">Sigup To NFTs</h2>
              <div className="flat-form box-login-social">
                <div className="box-title-login">
                  <h5>Login with social</h5>
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
                  <h5>Or login with email</h5>
                </div>
                <div className="form-inner">
                  <form
                    action="#"
                    id="contactform"
                    onSubmit={(e) => {
                      e.preventDefault();
                      doSignUp();
                    }}
                  >
                    <input
                      id="name"
                      name="name"
                      tabIndex={1}
                      aria-required="true"
                      required
                      type="text"
                      placeholder="Your Full Name"
                      onChange={(e) => handleInput("nick", e.target.value)}
                      // onKeyDown={(event) => {
                      //   if (event.key == "Enter") doSignUp();
                      // }}
                    />
                    {/* <input
                      id="email"
                      name="email"
                      tabIndex={2}
                      aria-required="true"
                      type="email"
                      placeholder="Your Email Address"
                      required
                    /> */}
                    <input
                      id="phone"
                      name="phone"
                      tabIndex={2}
                      aria-required="true"
                      type="tel"
                      placeholder="Your Phone Number"
                      inputMode="numeric"
                      required
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, "");
                      }}
                      onChange={(e) => handleInput("phone", e.target.value)}
                      // onKeyDown={(event) => {
                      //   if (event.key == "Enter") doSignUp();
                      // }}
                    />
                    <input
                      id="pass"
                      name="pass"
                      tabIndex={3}
                      aria-required="true"
                      type="text"
                      placeholder="Set Your Password"
                      required
                      onChange={(e) => handleInput("password", e.target.value)}
                      // onKeyDown={(event) => {
                      //   if (event.key == "Enter") doSignUp();
                      // }}
                    />
                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox" />
                      </label>
                      <a className="forgot-pass">Forgot Password ?</a>
                    </div>
                    <button className="submit" type="submit">
                      Sing Up
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
                  Already have an account?
                  <a
                    href="/login"
                    style={{
                      color: "#4CAF50",
                      fontWeight: "bold",
                      textDecoration: "none",
                      marginLeft: "5px",
                    }}
                  >
                    Login
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
