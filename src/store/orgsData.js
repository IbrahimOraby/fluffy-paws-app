import { create } from "zustand";
import { getAllCollectionDocs } from "../services/firestore_service";

const orgsDataStore = create((set) => ({
  organizations: [],
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
}));

export default orgsDataStore;
