import React from "react";
import Inputs from "../../ui/Inputs/Inputs";
import { Formik, Form, useField } from "formik";
import FilledButton from "../../ui/Buttons/FilledButton";
import { loginSchema } from "../../schemas/userSchema";
import { handleLoginSubmit } from "../../handlers/formHandlers";
import Paragraph from "./../../ui/Typography/Paragraph/Paragraph";
import MyPasswordInput from "../Signup/components/MyPasswordInput";
import { GoogleStaticIcon } from "../../ui/Icons/StaticIcons";
import GoogleAuthButton from "../../ui/Buttons/GoogleAuthButton";
import SubHeading from "../../ui/Typography/SubHeadings/SubHeading";
import ActionLink from "../../ui/Links/ActionLink";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Inputs label={label} field={field} meta={meta} {...props} />
    </>
  );
};

const Signin = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleLoginSubmit(values, setSubmitting, resetForm);
          }}
          //   validateOnChange={false}
          validateOnBlur={true}
        >
          {({ isSubmitting }) => (
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
                  Don't have an account? <ActionLink path={'/signup'} className="text-paragraph-md">Sign up</ActionLink>
                </Paragraph>

              </div>

              <div className="w-full ">
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                  className="mb-0 w-full"
                />

                <MyPasswordInput
                  label="Password"
                  name="password"
                  className="mb-0 w-full"
                />

                <FilledButton
                  className="w-full bg-primary-color hover:bg-hover-color text-white rounded-lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </FilledButton>
              </div>
              <div className="divider">OR</div>
              <GoogleAuthButton
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
