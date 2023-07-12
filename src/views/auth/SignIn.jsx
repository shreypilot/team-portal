import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const navigate = useNavigate()
  const errorInLogin = ()=>{
    console.log("Unable to login user")
  }
  return (
    <div className="flex items-center justify-center w-full h-full px-2 mt-16 mb-16 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <GoogleLogin onSuccess={()=>{ navigate('/admin/default')}} onError={errorInLogin} />
      </div>
    </div>
  );
}
