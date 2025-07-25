// organizationStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrganizationStore = create(
  // persist(
    (set) => ({
      // State
      organizationData: {
        info: null,
        documents: null,
        banking: null,
        branding: null,
        contact: null,
      },
      
    //   userData: {
    //     orgName: '',
    //     email: '',
    //     phone: '',
    //     address: '',
    //     website: '',
    //     taxId: ''
    //   },
      
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
      
      setFacilities: (data) => set((state) => ({
        organizationData: { ...state.organizationData, facilities: data },
        completedForms: { ...state.completedForms, facilities: true }
      })),
      
      setStaff: (data) => set((state) => ({
        organizationData: { ...state.organizationData, staff: data },
        completedForms: { ...state.completedForms, staff: true }
      })),
      
      setBusinessHours: (data) => set((state) => ({
        organizationData: { ...state.organizationData, businessHours: data },
        completedForms: { ...state.completedForms, businessHours: true }
      })),
      
      setGallery: (data) => set((state) => ({
        organizationData: { ...state.organizationData, gallery: data },
        completedForms: { ...state.completedForms, gallery: true }
      })),
      
      nextForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),
      prevForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex - 1 })),
      skipForm: () => set((state) => ({ currentFormIndex: state.currentFormIndex + 1 })),
      
    //   saveToFirestore: async () => {
    //     // TODO: Implement Firestore saving logic
    //     const organizationData = {
    //       ...get().userData,
    //       ...get().organizationData
    //     };
    //     // Logic to save to Firestore
    //   }
    }),
    {
      // name: 'organization-storage',
      // getStorage: () => localStorage,
    }
  // )
);

export default useOrganizationStore;
