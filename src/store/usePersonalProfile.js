import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePersonalFormStore = create(
  persist(
    (set) => ({
      //states
      personalFormData: {
        contact: null,
        availabilityFrequency: null,
        petPreferences: null,
        experience: null,
        homeInfo: null,
        profileSetup: null,
        aboutMe: null
      },

      completedForms: {
        contact: false,
        availabilityFrequency: false,
        petPreferences: false,
        experience: false,
        homeType: false,
        hasKids: false,
        profileSetup: false,
        aboutMe: false
      },

      currentFormIndex: 0,

      //actions
      setContact: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, contact: data },
          completedForms: { ...state.completedForms, contact: true }
        })),

      setAvailabilityFrequency: (data) => {
        set((state) => ({
          personalFormData: {
            ...state.personalFormData,
            availabilityFrequency: data
          },
          completedForms: {
            ...state.personalFormData,
            availabilityFrequency: true
          }
        }));
      },

      setPetPreferences: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, petPreferences: data },
          completedForms: { ...state.completedForms, petPreferences: true }
        })),

      setExperience: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, experience: data },
          completedForms: { ...state.completedForms, experience: true }
        })),

      setHomeInfo: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, homeInfo: data },
          completedForms: { ...state.completedForms, homeInfo: true }
        })),

      setProfileSetup: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, profileSetup: data },
          completedForms: { ...state.completedForms, profileSetup: true }
        })),

      setAboutMe: (data) =>
        set((state) => ({
          personalFormData: { ...state.personalFormData, aboutMe: data },
          completedForms: { ...state.completedForms, aboutMe: true }
        })),

      //steps
      nextForm: () =>
        set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),
      prevForm: () =>
        set((state) => ({ currentFormIndex: state.currentFormIndex - 1 })),

      //reset
      resetForm: () => {
        localStorage.removeItem("personal-storage");
        set(() => ({
          personalFormData: {
            contact: null,
            availabilityFrequency: null,
            petPreferences: null,
            experience: null,
            homeInfo: null,
            profileSetup: null,
            aboutMe: null
          },
          completedForms: {
            contact: false,
            availabilityFrequency: false,
            petPreferences: false,
            experience: false,
            homeType: false,
            hasKids: false,
            profileSetup: false,
            aboutMe: false
          },
          currentFormIndex: 0
        }));
      }
    }),
    {
      name: "personal-storage",
      getStorage: () => localStorage,
      onRehydrateStorage: (state) => {
        console.log("rehydrated state:", state);
      }
    }
  )
);

export default usePersonalFormStore;
