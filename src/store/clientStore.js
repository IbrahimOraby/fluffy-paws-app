import { create } from "zustand";
import { persist } from "zustand/middleware";
import { addPetDoc } from "../services/firestore_service";
const useClientStore = create(
  persist(
    (set, get) => ({
      petData: {
        petProfile: null,
        petTraits: null,
        petHealth: null,
        petPhoto: null,
      },

      userData: {
        firstName: "",
        lastName: "",
        email: "",
        photo: "",
        pets: [],
      },

      completedForms: {
        petProfile: false,
        petTraits: false,
        petHealth: false,
        petPhoto: false,
      },

      currentFormIndex: 0,

      setPetProfile: (data) =>
        set((state) => ({
          petData: { ...state.petData, petProfile: data },
          completedForms: { ...state.completedForms, petProfile: true },
        })),

      setPetTraits: (data) =>
        set((state) => ({
          petData: { ...state.petData, petTraits: data },
          completedForms: { ...state.completedForms, petTraits: true },
        })),

      setPetHealth: (data) =>
        set((state) => ({
          petData: { ...state.petData, petHealth: data },
          completedForms: { ...state.completedForms, petHealth: true },
        })),

      setPetPhoto: (data) =>
        set((state) => ({
          petData: { ...state.petData, petPhoto: data },
          completedForms: { ...state.completedForms, petPhoto: true },
        })),

      addNewPet: () =>
        set((state) => {
          const newPet = {
            id: Date.now(),
            ...state.petData.petProfile,
            ...state.petData.petTraits,
            health: state.petData.petHealth,
            photo: state.petData.petPhoto,
          };

          return {
            petData: {
              petProfile: null,
              petTraits: null,
              petHealth: null,
              petPhoto: null,
            },
            completedForms: {
              petProfile: false,
              petTraits: false,
              petHealth: false,
              petPhoto: false,
            },
            currentFormIndex: 0,
            userData: {
              ...state.userData,
              pets: [...state.userData.pets, newPet],
            },
          };
        }),

      resetFormProgress: () =>
        set(() => ({
          currentFormIndex: 0,
          petData: {
            petProfile: null,
            petTraits: null,
            petHealth: null,
            petPhoto: null,
          },
          completedForms: {
            petProfile: false,
            petTraits: false,
            petHealth: false,
            petPhoto: false,
          },
        })),

      nextForm: () =>
        set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),

      prevForm: () =>
        set((state) => ({ currentFormIndex: state.currentFormIndex - 1 })),

      skipForm: () =>
        set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),

      saveLatestPet: async (uid) => {
        if (!uid) throw new Error("No UID provided");

        const { userData } = get();
        const latestPet = userData.pets.at(-1);
        if (!latestPet) return false;

        try {
          await addPetDoc(uid, latestPet);
          console.info(" Pet saved");
          return true;
        } catch (err) {
          console.error(" Firestore error:", err);
        }
      },
    }),
    {
      name: "client-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useClientStore;
