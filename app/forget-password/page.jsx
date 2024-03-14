import React from "react";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="forgot-password_wrapper">
        <div data-aos="fade-up" className="forgot-password_main">
          <div className="forgot-password_form">
            <input
              className="forgot-password_form-input"
              type="text"
              placeholder="ایمیل / شماره موبایل"
            />
            <button style={{ marginTop: "1rem" }} className="forgot-password_form-btn">
              بازنشانی رمزعبور
            </button>
            <Link href={"/login-register"} className="forgot-password_back-login-btn">
              برگشت به ورود
            </Link>
          </div>
          <Link href={"/login-register"} className="forgot-password_redirect-home-btn">
            لغو
          </Link>
        </div>
        <section>
          <img
            src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
            alt=""
          />
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
