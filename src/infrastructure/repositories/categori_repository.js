import axios from "axios";
import { Category } from "../../domain/models/category.js";

export default class CategoryRepository {
    async getAllCategories() {
        const res = await axios.get("http://localhost:8080/api/categories");
        return res.data.map(c => new Category(c));
    }
      async addCategory(data) {
    const res = await axios.post("http://localhost:8080/api/categories", data);
    return res.data;
  }

  async updateCategory(id, data) {
    const res = await axios.put(
      `http://localhost:8080/api/categories/${id}`,
      data
    );
    return res.data;
  }

  async deleteCategory(id) {
    return await axios.delete(`http://localhost:8080/api/categories/${id}`);
  }
}
