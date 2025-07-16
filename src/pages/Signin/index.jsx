import React from "react";
import Inputs from "../../ui/Inputs/Inputs";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import FilledButton from "../../ui/Buttons/FilledButton";

const MyTextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input>. We can use field meta to show an error
	// message if the field is invalid and it has been touched (i.e. visited)
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
						firstName: "",
						lastName: "",
						email: "",
						acceptedTerms: false, // added for our checkbox
						jobType: "" // added for our select
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
						acceptedTerms: Yup.boolean()
							.required("Required")
							.oneOf([true], "You must accept the terms and conditions."),
						jobType: Yup.string()
							.oneOf(
								["designer", "development", "product", "other"],
								"Invalid Job Type"
							)
							.required("Required")
					})}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					<Form className="border bg-base-300 px-16 py-8">
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

						<FilledButton title="Sign Up"></FilledButton>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Signin;
