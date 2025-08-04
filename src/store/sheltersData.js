import { create } from "zustand";
import { getAllCollectionDocs } from "../services/firestore_service";

const sheltersDataStore = create((set) => ({
  organizations: [],
  personalSitters: [],
  loading: false,
  error: null,

  fetchOrganizations: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllCollectionDocs("organizations");
      set({ organizations: data, loading: false });
    } catch (err) {
      console.error("Failed to fetch organizations:", err);
      set({ error: err.message || "Unknown error", loading: false });
    }
  },

  fetchPersonalSitters: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllCollectionDocs("personalSitters");
      set({ personalSitters: data, loading: false });
    } catch (err) {
      console.error("Failed to fetch personal sitters:", err);
      set({ error: err.message || "Unknown error", loading: false });
    }
  },
}));

export default sheltersDataStore;
