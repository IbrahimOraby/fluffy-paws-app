export const handleLoginSubmit = (value, setSubmitting,resetForm ) => {
    // Simulate an API call
    setTimeout(() => {
        console.log("Logging in with", value);
        setSubmitting(false); 
        resetForm()
    }, 1000);
}

export const handleSignupSubmit = (value, setSubmitting,resetForm ) => {
    // Simulate an API call
    setTimeout(() => {
        console.log("signing up with", value);
        setSubmitting(false); 
        resetForm()
    }, 1000);
}