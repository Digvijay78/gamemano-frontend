import api from "@/utils/api";

export const getCategories = async (category) => {
  try {
    const response = await api.get(`/products/categories${category}`);
    return response.data; // Returns an array of categories
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
