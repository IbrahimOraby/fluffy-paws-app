export const formSteps = [
  {
    key: "petProfile",
    title: "Basics",
    fields: [
      { name: "name", label: "What's his name?", type: "text" },
      { name: "age", label: "What's his age?", type: "number" },
      { name: "gender", label: "Is it male or female?", type: "text" },
      { name: "desexed", label: "Is he desexed?", type: "text" },
    ],
  },
  {
    key: "petTraits",
    title: "Personal",
    fields: [
      { name: "toilet", label: "Is he toilet trained?", type: "text" },
      { name: "diet", label: "What's his dietary?", type: "text" },
      { name: "breed", label: "What's his breed?", type: "text" },
      {
        name: "friendly",
        label: "Is he friendly with other animals?",
        type: "text",
      },
    ],
  },
  {
    key: "petHealth",
    title: "Health",
    fields: [
      { name: "vaccinations", label: "List his vaccinations", type: "text" },
      {
        name: "conditions",
        label: "What's his skin/coat health conditions",
        type: "text",
      },
      { name: "weight", label: "What's his weight?", type: "number" },
    ],
  },
  {
    key: "petPhoto",
    title: "Photo & Finish",
    fields: [
      { name: "photo", label: "Upload recent photo of your pet", type: "file" },
    ],
  },
];
