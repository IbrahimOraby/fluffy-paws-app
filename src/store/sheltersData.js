import { create } from "zustand";
import { getAllCollectionDocs, getReviews } from "../services/firestore_service";

const sheltersDataStore = create((set) => ({
  organizations: [],
  personalSitters: [],
  loading: false,
  error: null,

  fetchOrganizations: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllCollectionDocs("organizations");

      const dataWithReviews = await Promise.all(
        data.map(async (org) => ({
          ...org,
          reviews: await getReviews("organizations", org.id),
        }))
      );

      set({ organizations: dataWithReviews, loading: false });
    } catch (err) {
      console.error("Failed to fetch organizations:", err);
      set({ error: err.message || "Unknown error", loading: false });
    }
  },

  fetchPersonalSitters: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllCollectionDocs("personalSitters");

      const dataWithReviews = await Promise.all(
        data.map(async (sitter) => ({
          ...sitter,
          reviews: await getReviews("personalSitters", sitter.uid),
        }))
      );

      set({ personalSitters: dataWithReviews, loading: false });
    } catch (err) {
      console.error("Failed to fetch personal sitters:", err);
      set({ error: err.message || "Unknown error", loading: false });
    }
  },
}));

export default sheltersDataStore;
