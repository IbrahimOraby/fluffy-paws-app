import { Formik, useField } from "formik";
import React from "react";
import { Form } from "react-router";
import * as Yup from "yup";
import FilledButton from "../../ui/Buttons/FilledButton";
import Inputs from "../../ui/Inputs/Inputs";

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Inputs label={label} field={field} meta={meta} {...props} />
		</>
	);
};

const Signup = () => {
	return (
		<>
			<div className="flex justify-center items-center">
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						password: "", // added for our checkbox
						confirmPassword: "" // added for our select
					}}
					validationSchema={Yup.object({
						firstName: Yup.string()
							.max(15, "Must be 15 characters or less")
							.required("Required"),
						lastName: Yup.string()
							.max(20, "Must be 20 characters or less")
							.required("Required"),
						email: Yup.string()
							.email("Invalid email address")
							.required("Required"),
						password: Yup.string()
							.required("Password is required")
							.min(6, "Password must be at least 6 characters"),
						confirmPassword: Yup.string()
							.required("Confirm Password is required")
							.oneOf([Yup.ref("password")], "Passwords must match")
					})}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					<Form className="rounded-xl bg-base-200 px-16 py-8 grid grid-cols">
						<div className="grid grid-cols">
							<MyTextInput
								label="First Name"
								name="firstName"
								type="text"
								placeholder="Jane"
							/>

							<MyTextInput
								label="Last Name"
								name="lastName"
								type="text"
								placeholder="Doe"
							/>

							<MyTextInput
								label="Email Address"
								name="email"
								type="email"
								placeholder="jane@formik.com"
							/>
						</div>

						<div className="grid grid-cols">
							<MyTextInput label="Password" name="password" type="password" />

							<MyTextInput
								label="Confirm Password"
								name="confirmPassword"
								type="confirmPassword"
							/>
						</div>

						<FilledButton
							title="Sign Up"
							type="submit"
							className="w-full"
						></FilledButton>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Signup;
