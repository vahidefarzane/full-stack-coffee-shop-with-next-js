import { useState } from "react";
import SMS from "./SMS";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

  const hideOtpForm = () => setIsRegisterWithOtp(false);

  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className="register_wrapper">
            <input className="register_input" type="text" placeholder="نام" />
            <input
              className="register_input"
              type="text"
              placeholder="شماره موبایل  "
            />
            <input
              className="register_input"
              type="email"
              placeholder="ایمیل (دلخواه)"
            />

            {isRegisterWithPass && (
              <input
                className="register_input"
                type="password"
                placeholder="رمز عبور"
              />
            )}

            <p
              style={{ marginTop: "1rem" }}
              className="register_btn"
              onClick={() => setIsRegisterWithOtp(true)}
            >
              ثبت نام با کد تایید
            </p>

            <button
              style={{ marginTop: ".7rem" }}
              onClick={() => setIsRegisterWithPass(true)}
              className="register_btn"
            >
              ثبت نام با رمزعبور
            </button>
            <p onClick={showloginForm} className="forgot-password_back-login-btn">
              برگشت به ورود
            </p>
          </div>
          <p className="forgot-password_redirect-home-btn">لغو</p>
        </>
      ) : (
        <SMS hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
