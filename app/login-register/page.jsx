"use client";
import { useState } from "react";
import { authTypes } from "@/utils/constants";

import Login from "@/components/templates/Login";
import Register from "@/components/templates/Register";

const login_register = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);
  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <div className="login-register-wrapper">
      <div className="component-wrapper" data-aos="fade-up">
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>
      <section>
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default login_register;
