import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useHookstate } from "@hookstate/core";
import { authState, errorState } from "../store/authstore";
import { login, signup } from "../api_calls/auth";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({});
  const authStore = useHookstate(authState);
  const errorStore = useHookstate(errorState);

  const handleClick = () => {
    setActive(!active);
  };

  const closeIcon = <button className="modal-close-btn">modal close</button>;

  const [openLogin, setLoginModal] = React.useState(false);
  const [openSignup, setSignupModal] = React.useState(false);
  const [openReset, setResetModal] = React.useState(false);

  useEffect(() => {
    errorStore.authErrors.set([]);
  }, [openLogin, openSignup, openReset]);

  return <>
    <nav className="navbar shadow-none sm:drop-shadow-[0px_4px_34px_rgba(0,0,0,0.1)] flex grow items-center flex-wrap bg-white-300 p-2 fixed top-0 flex-1 z-30 w-full">
      <Link href="/" className="inline-flex items-center p-2 mr-4 ">

        <Image src="/images/BranderMine logo.svg" width="165" height="31" />

      </Link>
      <button
        className=" inline-flex p-3 hover:bg-[#5022B8] hover:text-white rounded lg:hidden text-black ml-auto hover:text-blue outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            href="/premium"
            className="nav-menu mt-8 lg:mt-0 lg:inline-flex lg:w-auto w-full lg:items-start lg:justify-center flex text-[18px] text-black sm:text-[16px]">

            <img
              src="/images/premium logos icon.svg"
              className="w-5 h-4 mr-2  hidden sm:block"
            />{" "}Custom Logo
          </Link>
          <Link
            href="/logoMaker"
            className="nav-menu mt-2 lg:mt-0 lg:inline-flex lg:w-auto w-full items-center justify-center text-[18px] text-black sm:text-[16px]">
            
              Logo Maker
            
          </Link>
          <Link
            href="/branding-kit"
            className="nav-menu mt-2 lg:mt-0 lg:inline-flex lg:w-auto w-full items-center justify-center text-[18px] text-black sm:text-[16px]">
            
              Brand Kit
            
          </Link>
          <Link
            href="/logoIndustries"
            className="nav-menu mt-2 lg:mt-0 lg:inline-flex lg:w-auto w-full items-center justify-center text-[18px] text-black sm:text-[16px]">
            
              Logo Ideas
            
          </Link>
          <Link
            href="/blog"
            className="nav-menu mt-2 lg:mt-0 lg:inline-flex lg:w-auto w-full items-center justify-center text-[18px] text-black sm:text-[16px]">
            
              Blog
            
          </Link>
        </div>

        {authState.get().isAuthenticated && (
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center hidden lg:h-auto">
            <Link href="/dashboard/settings" legacyBehavior>
              <div className="relative">
                <p className="navbar-name bg-[#5022B8] text-white px-8 py-3 rounded-2xl relative mr-5">
                  Hello
                  {authState.get().authProfile
                    ? ", " + authState.get().authProfile["name"]
                    : ""}
                </p>

                <p className="border-4 border-white absolute top-0 right-0 flex items-center justify-center navbar-name2 bg-[#00B728] text-white rounded-full w-11 h-11">
                  {(authState.get().authProfile
                    ? authState.get().authProfile["name"]
                    : "User"
                  ).charAt(0)}
                </p>
              </div>
            </Link>
          </div>
        )}
        {!authState.get().isAuthenticated && (
          <div className="mt-8 lg:mt-0 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a
              className="nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center text-center lg:text-left"
              onClick={() => {
                setLoginModal(true);
                setSignupModal(false);
              }}
            >
              Login{" "}
              <sup>
                <small></small>
              </sup>
            </a>

            <button
              className="mt-4 lg:mt-0 nav-menu-btn lg:inline-flex lg:w-auto w-full rounded items-center justify-center  hover:bg-info "
              onClick={() => setSignupModal(true)}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </nav>

    <Modal
      open={
        openLogin ||
        (!authStore.get().isAuthenticated && authStore.get().isAuthRequired)
      }
      onClose={() => setLoginModal(false)}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "loginModal",
      }}
      closeIcon={closeIcon}
    >
      <div className="sm:p-[20px] p-[8px]">
        <h2 className="modal-txt1">Login to your Account</h2>
        <p className="modal-txt2">
          Enter to continue and explore within your grasp
        </p>

        <div className="flex justify-center">
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/apple.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/fb.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/google.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
        </div>

        <div className="flex justify-center my-4">
          <hr className="line sm:w-[118px] w-auto"></hr>
          <p className="modal-txt3">or sign in with</p>
          <hr className="line sm:w-[118px] w-auto"></hr>
        </div>

        <div class="relative  flex flex-wrap items-stretch">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginuser.svg" />
          </span>
          <input
            type="text"
            name="email"
            value={formData["email"]}
            disabled={authStore.get().isAuthenticating}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={
              "focus:ring-[#5022b8] focus:ring-2 login-input relative pl-14 px-5 w-full h-ful rounded " +
              (formData["email"] && !formData["email"].includes("@")
                ? "bg-red-100"
                : "bg-white")
            }
            placeholder="Enter your email"
          />
        </div>

        <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginpass.svg" />
          </span>
          <input
            type="password"
            name="password"
            value={formData["password"]}
            disabled={authStore.get().isAuthenticating}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={
              "focus:ring-2 login-input relative pl-14 px-5 w-full h-full rounded focus:ring-[#5022b8] " +
              (formData["password"] && formData["password"].length < 8
                ? "bg-red-100"
                : "bg-white")
            }
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between modal-txt4 my-4">
          <div>
            <input
              type="radio"
              id="Remember Me"
              label="Remember Me"
              aria-label="Remember Me"
              value={formData["remember_me"]}
              disabled={authStore.get().isAuthenticating}
              onChange={(e) =>
                setFormData({ ...formData, remember_me: e.target.value })
              }
              className="mr-2"
            />
            <label for="Remember Me">Remember Me</label>
          </div>

          <div>
            {" "}
            <p
              onClick={() => {
                setSignupModal(false);
                setResetModal(true);
              }}
            >
              Forgot password?
            </p>
          </div>
        </div>

        {errorStore.authErrors.get().length > 0 &&
          errorStore.authErrors.get().map((e) => {
            return (
              <Box mt={1}>
                <Alert severity="error">{capitalizeFirstLetter(e)}</Alert>
              </Box>
            );
          })}

        <button
          className="modal-btn my-4"
          disabled={authStore.get().isAuthenticating}
          onClick={async () => {
            if (!authStore.get().isAuthenticating) {
              if (!formData["email"] || !formData["password"]) {
                alert("Email and Password is required");
              } else {
                const logged = await login(
                  formData["email"],
                  formData["password"],
                );
                if (logged) {
                  setLoginModal(false);
                } else {
                  alert("Error Occured. Please try loging again");
                }
              }
            }
          }}
        >
          {authStore.get().isAuthenticating && (
            <div className="flex justify-center items-center p-2">
              <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
            </div>
          )}
          {!authStore.get().isAuthenticating && "Login to Continue"}
        </button>

        <p className="modal-txt5">
          Don’t have an account ?{" "}
          <a
            onClick={() => {
              setSignupModal(true);
              setLoginModal(false);
            }}
            className="text-decoration-none"
          >
            Sign up
          </a>
        </p>
      </div>
    </Modal>

    <Modal
      open={openSignup}
      onClose={() => setSignupModal(false)}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "loginModal",
      }}
      closeIcon={closeIcon}
    >
      <div className="sm:p-[20px] p-[8px] w-full">
        <h2 className="modal-txt1">Create an Account </h2>
        <p className="modal-txt2">
          Enter to continue and explore within your grasp
        </p>

        <div className="flex justify-center">
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/apple.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/fb.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
          <button className="social-login-button h-[58px] sm:w-[105px] w-auto px-4 sm:px-0">
            <img
              src="/images/button/google.svg"
              className="w-[30px] h-[30px] m-auto"
            />
          </button>
        </div>

        <div className="flex justify-center my-4">
          <hr className="line sm:w-[118px] w-auto"></hr>
          <p className="modal-txt3">or sign up with</p>
          <hr className="line sm:w-[118px] w-auto"></hr>
        </div>

        <div class="relative  flex flex-wrap items-stretch">
          <span class="absolute mr-4 left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginuser.svg" />
          </span>
          <input
            type="text"
            name="signup_name"
            className="focus:ring-[#5022b8] focus:ring-2 login-input relative pl-14 px-5 w-full h-full bg-white rounded"
            placeholder="Enter your name"
            value={formData["name"]}
            disabled={authStore.get().isAuthenticating}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginuser.svg" />
          </span>
          <input
            type="text"
            name="signup_email"
            value={formData["email"]}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={authStore.get().isAuthenticating}
            className={
              "focus:ring-[#5022b8] focus:ring-2 login-input relative pl-14 px-5 w-full h-ful rounded " +
              (formData["email"] && !formData["email"].includes("@")
                ? "bg-red-100"
                : "bg-white")
            }
            placeholder="Enter your email"
          />
        </div>

        <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginpass.svg" />
          </span>
          <input
            type="password"
            name="signup_password"
            value={formData["password"]}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            disabled={authStore.get().isAuthenticating}
            className={
              "focus:ring-2 login-input relative pl-14 px-5 w-full h-full rounded focus:ring-[#5022b8] " +
              (formData["password"] && formData["password"].length < 8
                ? "bg-red-100"
                : "bg-white")
            }
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between modal-txt4 my-4">
          <div>
            <input
              type="radio"
              id="Remember Me"
              label="Remember Me"
              aria-label="Remember Me "
              className="mr-2"
            />
            <label for="Remember Me">Remember Me</label>
          </div>

          <div>
            {" "}
            <p
              onClick={() => {
                setSignupModal(false);
                setResetModal(true);
              }}
            >
              Forgot password?
            </p>
          </div>
        </div>

        {errorStore.authErrors.get().length > 0 &&
          errorStore.authErrors.get().map((e) => {
            return (
              <Box mt={1}>
                <Alert severity="error">{capitalizeFirstLetter(e)}</Alert>
              </Box>
            );
          })}

        <button
          className="modal-btn my-4"
          onClick={async () => {
            if (!authStore.get().isAuthenticating) {
              if (
                !formData["email"] ||
                !formData["password"] ||
                !formData["name"]
              ) {
                alert("All fields are required");
              } else {
                const logged = await signup(
                  formData["email"],
                  formData["name"],
                  formData["password"],
                );
                if (logged) {
                  setSignupModal(false);
                } else {
                  alert("Error Occured. Please try loging again");
                }
              }
            }
          }}
        >
          {authStore.get().isAuthenticating && (
            <div className="flex justify-center items-center p-2">
              <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
            </div>
          )}
          {!authStore.get().isAuthenticating && "Create Account"}
        </button>

        <p className="modal-txt5">
          Do you have account ?{" "}
          <a
            onClick={() => {
              setSignupModal(false);
              setLoginModal(true);
            }}
            className="text-decoration-none"
          >
            Sign in
          </a>
        </p>
      </div>
    </Modal>

    <Modal
      open={openReset}
      onClose={() => setResetModal(false)}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "loginModal",
      }}
      closeIcon={closeIcon}
    >
      <div className="model-login-card">
        <h2 className="modal-txt1">Reset password</h2>
        <p className="modal-txt2 pb-4">
          Please enter your email address and we'll send you a link to reset
          your password.
        </p>

        <div class="relative flex flex-wrap items-stretch mt-4">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <img src="/images/button/loginuser.svg" />
          </span>
          <input
            type="text"
            name="email"
            className="focus:ring-[#5022b8] focus:ring-2 login-input relative pl-14 px-5 w-full h-full bg-white rounded"
            placeholder="Enter your email"
          />
        </div>

        <button className="modal-btn my-4">Submit</button>

        <div className="flex justify-center py-2">
          <hr className="line"></hr>
          <p className="modal-txt3">or</p>
          <hr className="line"></hr>
        </div>

        <p className="modal-txt5">
          <a
            onClick={() => {
              setLoginModal(true);
              setResetModal(false);
            }}
            className="text-decoration-none"
          >
            Back to Sign in
          </a>
        </p>
      </div>
    </Modal>
  </>;
};
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
