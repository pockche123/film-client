import React from "react";
import "./Login.css";
import { useState } from "react";
import GuestLogin from "../../components/login/GuestLogin";
import UserLogin from "../../components/login/UserLogin";
import LoginNav from "../../components/login/LoginNav";
import useAuth from "../../components/hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth() as any;
  const [guestLogin, setGuestLogin] = useState<boolean>(true);

  return (
    <div className="login-form" style={{ minHeight: "120vh" }}>
      <div className="login-form-container">
        <div className="login-nav">
          <LoginNav guestLogin={guestLogin} setGuestLogin={setGuestLogin} />
        </div>
        <div className="login-forms">
          {guestLogin ? <GuestLogin /> : <UserLogin />}
        </div>
      </div>
    </div>
  );
};

export default Login;
