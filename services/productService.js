import api from "@/utils/api"; // Axios instance

export const getProducts = async (category = "") => {
  try {
    const url = category ? `/products/category/${category}` : "/products";
    const response = await api.get(url);
    return response.data.products; // Ensure correct data extraction
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};
