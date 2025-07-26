import { create } from "zustand";

const usePersonalFormStore = create((set) => ({
  //   personalFormData: {
  //     // intro: null, // Desktop 7: Steps overview
  //     contact: null, // Desktop 8: Address and phone number
  //     availabilityFrequency: null, // Desktop 9: How often do you want to look after pets?
  //     // availabilityDays: null, // Desktop 10: What days are you available?
  //     petPreferences: null, // Desktop 11: What pets can you look after?
  //     experience: null,
  //     homeType: null, // Desktop 12: Experience and home type

  //     householdInfo: null, // Desktop 13: Do you have kids at home? + age group
  //     profilePicture: null, // Desktop 16: Upload your profile picture
  //     // finalTouch: null, // Desktop 15: Finish Your Profile (pre-submission screen)
  //     idUpload: null, // Desktop 17: Upload your ID
  //     aboutMe: null // Desktop 18: Tell us a bit about yourself
  //   },

  //states
  personalFormData: {
    contact: null,
    availabilityFrequency: null,
    petPreferences: null,
    experience: null,
    homeType: null,
    householdInfo: null,
    profilePicture: null,
    idUpload: null,
    aboutMe: null
  },

  completedForms: {
    contact: false,
    availabilityFrequency: false,
    petPreferences: false,
    experience: false,
    homeType: false,
    householdInfo: false,
    profilePicture: false,
    idUpload: false,
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
      completedForms: { ...state.personalFormData, availabilityFrequency: true }
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

  setHomeType: (data) =>
    set((state) => ({
      personalFormData: { ...state.personalFormData, homeType: data },
      completedForms: { ...state.completedForms, homeType: true }
    })),

  setHouseholdInfo: (data) =>
    set((state) => ({
      personalFormData: { ...state.personalFormData, householdInfo: data },
      completedForms: { ...state.completedForms, householdInfo: true }
    })),

  setProfilePicture: (data) =>
    set((state) => ({
      personalFormData: { ...state.personalFormData, profilePicture: data },
      completedForms: { ...state.completedForms, profilePicture: true }
    })),

  setIdUpload: (data) =>
    set((state) => ({
      personalFormData: { ...state.personalFormData, idUpload: data },
      completedForms: { ...state.completedForms, idUpload: true }
    })),

  setAboutMe: (data) =>
    set((state) => ({
      personalFormData: { ...state.personalFormData, aboutMe: data },
      completedForms: { ...state.completedForms, aboutMe: true }
    })),

  nextForm: () =>
    set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),
  prevForm: () =>
    set((state) => ({ currentFormIndex: state.currentFormIndex - 1 }))
}));

export default usePersonalFormStore;
