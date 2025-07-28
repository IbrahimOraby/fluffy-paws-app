import { Formik, Form } from "formik";
import { loginSchema } from "../../schemas/userSchema";
import { handleGoogleAuth, handleLoginSubmit } from "../../handlers/formHandlers";

import { GoogleStaticIcon } from "../../ui/Icons/StaticIcons";
import GoogleAuthButton from "../../ui/Buttons/GoogleAuthButton";
import SubHeading from "../../ui/Typography/SubHeadings/SubHeading";
import ActionLink from "../../ui/Links/ActionLink";
import Paragraph from "./../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../ui/Buttons/FilledButton";


import { useNavigate } from "react-router";
import MyTextInput from "../../ui/Inputs/MyTextInput";
import MyPasswordInput from "../../ui/Inputs/MyPasswordInput";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            handleLoginSubmit(values, setSubmitting, setFieldError, navigate);
          }}
          validateOnBlur={true}
        >
          {({ isSubmitting, errors, setFieldError }) => (
            <Form className="rounded-xl w-xl border-2 border-base-300 px-8 py-8 flex flex-col gap-4 items-center">
              <Paragraph
                type="h1"
                className=" text-paragraph-color font-light! text-lg "
              >
                Welcome to Fluffy Paws
              </Paragraph>
              <div className="divider my-0"></div>
              <div className="w-full flex flex-col gap-1">
                <SubHeading className="text-subheader-lg text-header-color">
                  Continue to your account
                </SubHeading>
                <Paragraph className="text-paragraph-sm text-paragraph-color">
                  Enter the following details to login to your account
                </Paragraph>
                <Paragraph className="text-paragraph-sm text-paragraph-color font-semibold">
                  Don't have an account?{" "}
                  <ActionLink path={"/signup"} className="text-paragraph-md">
                    Sign up
                  </ActionLink>
                </Paragraph>
              </div>

              <div className="w-full ">
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  className="mb-0 w-full"
                />

                <MyPasswordInput
                  label="Password"
                  name="password"
                  className="mb-0 w-full"
                />
                {
                  /* Display general error if exists
                    e.g "service is down - invalid credential"
                  */

                  <div
                    className={`text-error text-sm-color h-6 mb-2 ${
                      errors.general ? "visible" : "invisible"
                    }`}
                  >
                    {errors.general}
                  </div>
                }

                <FilledButton
                  className="w-full bg-primary-color hover:bg-primary-color-500 text-white rounded-lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </FilledButton>
              </div>
              <div className="divider">OR</div>
              <GoogleAuthButton
              type="button"
              onClick={()=>{handleGoogleAuth(setFieldError, navigate)}}
                icon={<GoogleStaticIcon />}
                className="btn bg-white text-black border-gray-400 hover:border-black w-full font-normal text-base"
              >
                Continue with google
              </GoogleAuthButton>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Signin;
