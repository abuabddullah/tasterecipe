import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [userInfo, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      const userData = {
        name: userInfo?.displayName,
        email: userInfo?.email,
        photo: userInfo?.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data?.token);
        });
      navigate(from, { replace: true });
    }
  }, [userInfo, navigate, from, userLoading]);

  return (
    <div className="m-6 mt-0 grid grid-cols-2 gap-3">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info text-white"
      >
        Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn btn-info text-white"
      >
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
