import { Formik, Form } from "formik";
import { signupSchema } from "../../schemas/userSchema";
import {
  handleGoogleAuth,
  handleSignupSubmit,
} from "../../handlers/formHandlers";
import { GoogleStaticIcon } from "../../ui/Icons/StaticIcons";

import ActionLink from "../../ui/Links/ActionLink";
import Paragraph from "./../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "./../../ui/Typography/SubHeadings/SubHeading";
import FilledButton from "../../ui/Buttons/FilledButton";
import GoogleAuthButton from "../../ui/Buttons/GoogleAuthButton";

import MyTextInput from "./components/MyTextInput";
import MyPasswordInput from "./components/MyPasswordInput";

import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center">
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            handleSignupSubmit(values, setSubmitting, setFieldError, navigate);
          }}
          //   validateOnChange={false}
          validateOnBlur={true}
        >
          {({ isSubmitting, errors, setFieldError }) => (
            <Form className="rounded-xl w-lg border-2 border-base-300 px-8 py-8 flex flex-col gap-4 items-center">
              <Paragraph
                type="h1"
                className=" text-paragraph-color font-light! text-lg "
              >
                Welcome to Fluffy Paws
              </Paragraph>
              <div className="divider my-0"></div>
              <div className="w-full flex flex-col gap-1">
                <SubHeading className="text-subheader-lg text-header-color">
                  Create an account
                </SubHeading>
                <Paragraph className="text-paragraph-sm text-paragraph-color">
                  Enter the following details to create your account
                </Paragraph>
                <Paragraph className="text-paragraph-sm text-paragraph-color font-semibold">
                  Do you have an account?{" "}
                  <ActionLink path={"/signin"} className="text-paragraph-md">
                    Log in
                  </ActionLink>
                </Paragraph>
              </div>

              <div className="w-full ">
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@email.com"
                  className="mb-0 w-full"
                />
                <MyTextInput
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  className="mb-0 w-full"
                />{" "}
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="string"
                  placeholder="Doe"
                  className="mb-0 w-full"
                />
                <MyPasswordInput
                  label="Password"
                  name="password"
                  className="mb-0 w-full"
                  placeholder="Must have at least 6 characters and one special character"
                />
                {
                  /* Display general error if exists
                    e.g "service is down"
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
                  className="w-full bg-primary-color hover:bg-hover-color text-white rounded-lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating your account..." : "Sign up"}
                </FilledButton>
              </div>
              <div className="divider">OR</div>
              <GoogleAuthButton
                type="button"
                onClick={() => handleGoogleAuth(setFieldError, navigate)}
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

export default Signup;
