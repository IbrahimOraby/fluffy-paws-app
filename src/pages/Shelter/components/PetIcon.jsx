import { StaticCatIcon, StaticDogIcon } from "../../../ui/Icons/StaticIcons";

export default function PetIcon({ petType }) {
  return petType === "dog" ? (
    <StaticDogIcon size={16} color="#be5985" />
  ) : (
    <StaticCatIcon size={16} color="#be5985" />
  );
}
