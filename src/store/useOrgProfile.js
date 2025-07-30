// organizationStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrganizationStore = create(
  persist(
    (set) => ({
      // State
      organizationData: {
        info: null,
        documents: null,
        banking: null,
        branding: null,
        contact: null,
      },
      completedForms: {
        info: false,
        documents: false,
        banking: false,
        branding: false,
        contact: false
      },
      currentFormIndex: 0,

      // Actions
      setInfo: (data) => set((state) => ({
        organizationData: { ...state.organizationData, info: data },
        completedForms: { ...state.completedForms, info: true }
      })),

      setDocuments: (data) => set((state) => ({
        organizationData: { ...state.organizationData, documents: data },
        completedForms: { ...state.completedForms, documents: true }
      })),

      setBanking: (data) => set((state) => ({
        organizationData: { ...state.organizationData, banking: data },
        completedForms: { ...state.completedForms, banking: true }
      })),

      setBranding: (data) => set((state) => ({
        organizationData: { ...state.organizationData, branding: data },
        completedForms: { ...state.completedForms, branding: true }
      })),

      setContact: (data) => set((state) => ({
        organizationData: { ...state.organizationData, contact: data },
        completedForms: { ...state.completedForms, contact: true }
      })),


      nextForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),
      prevForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex - 1 })),
      skipForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),

      resetForm: () => {
        localStorage.removeItem('organization-storage'); 
        set(() => ({
          organizationData: {
            info: null,
            documents: null,
            banking: null,
            branding: null,
            contact: null,
          },
          completedForms: {
            info: false,
            documents: false,
            banking: false,
            branding: false,
            contact: false
          },
          currentFormIndex: 0,
        }));
      }

    }),
    {
      name: 'organization-storage',
      getStorage: () => localStorage,
      onRehydrateStorage: (state) => { console.log('rehydrated state:', state); }
    }
  )
);

export default useOrganizationStore;
