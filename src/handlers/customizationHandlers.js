export const handleOrgFormSubmit = (allFormValues, currentStep, setOrgState) => {
  //* Filter the values to only include those for the current step
  const currentStepFields = currentStep.fields.map((field) => field.name);
  const currentStepValues =
    Object.entries(allFormValues).filter((item) => {
      const itemKey = item[0];
      return currentStepFields.includes(itemKey)
    })
  const currentStepValuesObject = Object.fromEntries(currentStepValues);
  //* Call the action function for the current step with the current step values as object
  console.log(currentStepValues)
  setOrgState[currentStep.action](currentStepValuesObject);
};
