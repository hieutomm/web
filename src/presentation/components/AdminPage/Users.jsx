import { useEffect, useState } from "react";
import UserRepository from "../../../infrastructure/repositories/user_repository";

import GetUsersUseCase from "../../../usecases/user/get_all_user_usecase";
import CreateUserUseCase from "../../../usecases/user/create_user_usecase";
import UpdateUserUseCase from "../../../usecases/user/update_user_usecase";
import DeleteUserUseCase from "../../../usecases/user/delete_user_usecase";

const userRepository = new UserRepository();

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const usecase = new GetUsersUseCase(userRepository);
    const data = await usecase.execute();
    setUsers(data);
  };

  const handleAddUser = async () => {
    const usecase = new CreateUserUseCase(userRepository);
    await usecase.execute(newUser);
    setNewUser({ username: "", email: "", password: "", role: "user" });
    loadUsers();
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUpdatedUser(user);
  };

  const handleUpdateUser = async () => {
    const usecase = new UpdateUserUseCase(userRepository);
    await usecase.execute(editingUser.id, updatedUser);

    setEditingUser(null);
    loadUsers();
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      const usecase = new DeleteUserUseCase(userRepository);
      await usecase.execute(id);
      loadUsers();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Quản lý người dùng (Clean Architecture)</h2>

      {/* Add User */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Tên"
          className="form-control"
          value={newUser.username}
          onChange={(e) =>
            setNewUser({ ...newUser, username: e.target.value })
          }
        />

        <input
          type="email"
          className="form-control mt-2"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mt-2"
          placeholder="Mật khẩu"
          value={newUser.password}
          onChange={(e) =>
            setNewUser({ ...newUser, password: e.target.value })
          }
        />

        <select
          className="form-control mt-2"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-success mt-2" onClick={handleAddUser}>
          Thêm người dùng
        </button>
      </div>

      {/* Users Table */}
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* id */}
              <td>{user.id}</td>

              {/* username */}
              <td>
                {editingUser?.id === user.id ? (
                  <input
                    className="form-control"
                    value={updatedUser.username}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        username: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.username
                )}
              </td>

              {/* email */}
              <td>
                {editingUser?.id === user.id ? (
                  <input
                    className="form-control"
                    value={updatedUser.email}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>

              {/* role */}
              <td>
                {editingUser?.id === user.id ? (
                  <select
                    className="form-control"
                    value={updatedUser.role}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>

              {/* buttons */}
              <td>
                {editingUser?.id === user.id ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleUpdateUser}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEditUser(user)}
                  >
                    Sửa
                  </button>
                )}

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
