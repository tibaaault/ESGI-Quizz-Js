import http from "../http";

export const categoryService = {
  async fetchCategories() {
    try {
      const response = await http.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
};
