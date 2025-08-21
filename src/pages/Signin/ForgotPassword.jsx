import { useState } from "react";
import { Formik, Form } from "formik";
import Paragraph from "../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../ui/Buttons/FilledButton";
import MyTextInput from "../../ui/Inputs/MyTextInput";
import { resetPassword } from "../../services/auth_service";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen flex justify-center items-center">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await resetPassword(values.email);
            setMessage(" Password reset link has been sent to your email");
          } catch (error) {
            setMessage(" Error: " + error.message);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="rounded-xl w-xl border-2 border-base-300 px-8 py-8 flex flex-col gap-4 items-center">
            <Paragraph type="h1" className="text-lg">
              Reset your password
            </Paragraph>

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              className="w-full"
            />

            <FilledButton
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-color hover:bg-primary-color-500 text-white rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send reset link"}
            </FilledButton>

            {message && <p className="text-sm mt-3">{message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
