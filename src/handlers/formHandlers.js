import { signInUser, signInWithGoogle, signUpUser } from "../services/auth_service";
import { addNewUser } from "../services/firestore_service";
import { splitFullNameFormatter } from './../utils/stringHelpers';

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
    const userData = {
        email: value.email,
        firstName: value.firstName,
        lastName:value.lastName,
        role: null
    }
    try {
        const userCredentials = await signUpUser(userName, value.email, value.password);
        await addNewUser(userData, userCredentials.user.uid);
        navigate('/select-role');
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            setFieldError("email", "Email already in use.");
        }
        else {
            setFieldError("general", "An unexpected error occurred. Please try again later.");
            console.log(error)
        }
    }
    finally {
        setSubmitting(false);
    }
}


//recieve error setter from formik and navigate function from formik
export const handleGoogleAuth = async (setFieldError, navigate) => {
    try {
        const { user, token, isNewUser, providerId } = await signInWithGoogle();
        const {firstName, lastName} = splitFullNameFormatter(user.displayName);
        if (isNewUser) {
            const userData = {
                email: user.email,
                firstName: firstName,
                lastName:lastName,
                role: null
            }
            await addNewUser(userData, user.uid);
            navigate('/select-role');
        }
        else {
            navigate('/')

        }

    } catch (error) {
        if (error.code === "auth/invalid-credential") {
            setFieldError("general", "Invalid Google credentials. Please try again.");
        }
    }

}