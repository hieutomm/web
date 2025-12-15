import axios from "axios";
import api from "../../service/apiservice";
export default class AuthRepository {
  async login(email, password) {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    return response.data; // Trả về user + token
  }

  async register(data) {
    const response = await axios.post("http://localhost:8080/api/auth/register", data);
    return response.data;
  }

   async getAll() {
    const res = await api.get("/users");
    return res.data;
  }

  async getById(id) {
    const res = await api.get(`/users/${id}`);
    return res.data;
  }

  async create(payload) {
    const res = await api.post("/users", payload);
    return res.data;
  }

  async update(id, payload) {
    const res = await api.put(`/users/${id}`, payload);
    return res.data;
  }

  async delete(id) {
    // chú ý: không để dấu slash bổ sung: /users/{id}
    const res = await api.delete(`/users/${id}`);
    return res.data;
  }


}
