import axios from "axios";

export const getAllusers = async (id) => {
  id = id || "";
  return await axios.get(`http://localhost:8000/user/${id}`);
};
export const createUser = async (users) => {
  return await axios.post("http://localhost:8000/user/add", users);
};
export const editUser = async (id, user) => {
  return await axios.put(`http://localhost:8000/user/${id}`, user);
};
export const deleteUser = async (id) => {
  return await axios.delete(`http://localhost:8000/user/${id}`);
};
