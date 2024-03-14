import React, { useState } from "react";
import Link from "next/link";
import Sms from "./Sms";

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const hideOtpForm = () => setIsLoginWithOtp(false);

  return (
    <>
      {!isLoginWithOtp ? (
        <>
          <div className="login_wrapper">
            <input
              className="login_input"
              type="text"
              placeholder="ایمیل/شماره موبایل"
            />
            <input
              className="login_input"
              type="password"
              placeholder="رمز عبور"
            />
            <div className="login-checkbox">
              <input type="checkbox" name="" id="" />
              <p>مرا به یاد داشته باش</p>
            </div>
            <button className="login-btn">ورود</button>
            <Link href={"/forget-password"} className="login_forgot-pass">
              رمز عبور را فراموش کرده اید؟
            </Link>
            <button
              onClick={() => setIsLoginWithOtp(true)}
              className="login-btn"
            >
              ورود با کد یکبار مصرف
            </button>
            <span>ایا حساب کاربری ندارید؟</span>
            <button onClick={showRegisterForm} className="login_btn-light">
              ثبت نام
            </button>
          </div>
          <Link href={"/"} className="login_redirect-home-btn ">
            لغو
          </Link>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Login;
