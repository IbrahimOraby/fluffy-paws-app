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
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  useEffect(() => {
    if (onStepChange) {
      onStepChange(step.title);
    }
  }, [stepIndex]);
  // const initialValues = {};
  // step.fields.forEach((f) => (initialValues[f.name] = ""));

  const initialValues = {};
  step.fields.forEach((f) => {
    switch (f.type) {
      case "checkbox":
        initialValues[f.name] = [];
        break;
      case "file":
        initialValues[f.name] = null;
        break;
      default:
        initialValues[f.name] = "";
    }
  });

  const handleSubmit = async (values) => {
    const filteredValues = {};
    step.fields.forEach((f) => {
      filteredValues[f.name] = values[f.name];
    });

    setData(filteredValues);

    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }

    useClientStore.getState().addNewPet();

    const uid = auth.currentUser?.uid;
    if (!uid) return alert("Please login first");

    const ok = await useClientStore.getState().saveLatestPet(uid);
    if (!ok) return alert("Error saving pet");

    useClientStore.getState().resetFormProgress();
    // alert("Pet saved ");
    navigate("/profile");
  };

  return (
    <PetFormStep
      enableReinitialize
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
