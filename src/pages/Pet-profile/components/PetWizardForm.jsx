import { useEffect, useState } from "react";
import PetFormStep from "./PetFormStep.jsx";
import { formSteps } from "../../../data/formSteps.js";
import {
  petProfileSchema,
  petTraitsSchema,
  petHealthSchema,
  petPhotoSchema,
} from "../../../schemas/petSchema.js";
import useClientStore from "../../../store/clientStore.js";

const schemas = {
  petProfile: petProfileSchema,
  petTraits: petTraitsSchema,
  petHealth: petHealthSchema,
  petPhoto: petPhotoSchema,
};

export default function PetWizardForm({ onStepChange }) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = formSteps[stepIndex];
  const isLast = stepIndex === formSteps.length - 1;
  const setData = useClientStore(
    (s) => s[`set${step.key.charAt(0).toUpperCase() + step.key.slice(1)}`]
  );

  useEffect(() => {
    if (onStepChange) {
      onStepChange(step.title);
    }
  }, [stepIndex]);
  const initialValues = {};
  step.fields.forEach((f) => (initialValues[f.name] = ""));

  const handleSubmit = (values) => {
    setData(values);
    if (!isLast) setStepIndex((i) => i + 1);
    else alert("Finished!");
  };

  return (
    <PetFormStep
      step={step}
      stepIndex={stepIndex}
      initialValues={initialValues}
      validationSchema={schemas[step.key]}
      onSubmit={handleSubmit}
      onBack={() => setStepIndex((i) => i - 1)}
      isLast={isLast}
    />
  );
}
