import { sweetMixinSuccessAlert } from "@/app/sweetAlert";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return (
    <>
      <form
        className="form-submit"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isValidEmail) {
            alert("Please enter a valid email.");
            return;
          }
          // You can handle sending the data here
          sweetMixinSuccessAlert("Successfully subscribed!");
          window.location.reload();
        }}
      >
        <input
          name="email"
          className="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="info@yourgmail.com"
          required
        />
        <button id="submit" name="submit" type="submit">
          <i className="icon-fl-send" />
        </button>
      </form>
    </>
  );
}
