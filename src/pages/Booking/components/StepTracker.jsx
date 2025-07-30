import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Your Selection", "Booking Details", "Payment"];

export default function StepTracker({ currentStep }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={{
          "& .MuiStepLabel-root .Mui-completed": {
            color: "#be5985",
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "#be5985",
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "#be5985",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#be5985",
          },
          "& .MuiStepConnector-line": {
            borderColor: "#ccc",
          },
          "& .MuiStepConnector-active .MuiStepConnector-line": {
            borderColor: "#be5985",
          },
          "& .MuiStepConnector-completed .MuiStepConnector-line": {
            borderColor: "#be5985",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
