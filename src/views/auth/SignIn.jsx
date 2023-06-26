import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useGoogleLogin } from '@react-oauth/google';

export default function SignIn() {
  //  const { signIn, loaded } = useGoogleLogin({
  //    clientId: "YOUR_GOOGLE_CLIENT_ID",
  //    onSuccess: (response) => {
  //      const email = response.profileObj.email;
  //      if (email.endsWith("@gagahealth.com")) {
  //        // User signed in successfully with a valid domain
  //        // Perform necessary actions (e.g., store the token, redirect, etc.)
  //      } else {
  //        // Display an error or show a message indicating access is restricted
  //      }
  //    },
  //    onFailure: (error) => {
  //      console.log("Google sign-in failed:", error);
  //      // Display an error or show a message indicating sign-in failure
  //    },
  //  });

  //  if (!loaded) {
  //    return null;
  //  }
  return (
    <div className="flex items-center justify-center w-full h-full px-2 mt-16 mb-16 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <button className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="text-xl rounded-full">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </button>

        {/* <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
          Sign In
        </button> */}
      </div>
    </div>
  );
}
