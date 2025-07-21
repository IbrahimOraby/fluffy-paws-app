import React from "react";
import Inputs from "../../ui/Inputs/Inputs";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import FilledButton from "../../ui/Buttons/FilledButton";

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
			<div
				className="flex justify-center items-center"
			>
				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email("Invalid email address")
							.required("Required"),
						password: Yup.string()
							.required("Password is required")
							.min(6, "Password must be at least 6 characters")
					})}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					<Form className="rounded-xl bg-base-200 px-16 py-8">
						<MyTextInput
							label="Email Address"
							name="email"
							type="email"
							placeholder="jane@formik.com"
							className="mb-0"
						/>

						<MyTextInput
							label="Password"
							name="password"
							type="password"
							className="mb-0"
						/>

						<FilledButton
							title="Sign In"
							type="submit"
							className="w-full"
						></FilledButton>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Signin;
