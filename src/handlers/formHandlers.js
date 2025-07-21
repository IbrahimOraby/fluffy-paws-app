import { signInUser, signInWithGoogle, signUpUser } from "../services/auth_service";

export const handleLoginSubmit = async (value, setSubmitting, setFieldError, navigate) => {
    try {
        await signInUser(value.email, value.password);
        navigate('/');
    } catch (error) {
        if (error.code === "auth/invalid-credential") {
            setFieldError("general", "Incorrect email or password. Please try again.");
        }
        else {
            setFieldError("general", "An unexpected error occurred. Please try again later.");
        }
    }

    finally {
        setSubmitting(false);
    }
}


export const handleSignupSubmit = async (value, setSubmitting, setFieldError, navigate) => {
    const userName = value.firstName + " " + value.lastName;
    try {
        await signUpUser(userName, value.email, value.password);
        navigate('/');
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            setFieldError("email", "Email already in use.");
        }
        else {
            setFieldError("general", "An unexpected error occurred. Please try again later.");
        }
    }
    finally {
        setSubmitting(false);
    }
}


//recieve error setter from formik and navigate function from formik
export const handleGoogleAuth = async (setFieldError, navigate) => {
    try {
        await signInWithGoogle();
        navigate('/');
    } catch (error) {
        if (error.code === "auth/invalid-credential") {
            setFieldError("general", "Invalid Google credentials. Please try again.");
        }
    }

}