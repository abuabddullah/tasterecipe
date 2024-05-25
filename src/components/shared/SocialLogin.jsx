import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [userInfo, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userInfo) {
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
