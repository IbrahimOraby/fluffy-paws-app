import React from "react";
import FilledButton from "../../../ui/Buttons/FilledButton";

function PersonalSetup() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-10 font-bold text-2xl text-center text-primary-color-500 bg-light-color">
        Welcome to your Personal Fluffy Paw sitter profile!{" "}
      </header>

      <div className="flex-1  flex justify-center items-center p-4"></div>

      <footer className="p-4 bg-light-color text-primary-color-500 text-right">
        {/* {currentFormIndex > 0 && ( */}
        <FilledButton
          type="button"
          className="mr-4 text-primary-color-500 hover:text-primary-color-700 rounded-4xl border-primary-color-500"
          onClick={() => {}}
        >
          Previous
        </FilledButton>
        {/* )} */}
        <FilledButton
          onClick={() => {
            // if (currentFormIndex === 0) {
            //   nextForm();
            // } else {
            //   formikRef.current.submitForm();
            // }
          }}
          //   disabled={currentFormIndex === steps.length}
        >
          Continue
        </FilledButton>
      </footer>
    </div>
  );
}

export default PersonalSetup;
