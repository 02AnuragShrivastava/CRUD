import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const getUsers = async () => axios.get(API_URL);
export const addUser = async (user) => axios.post(API_URL, user);
export const updateUser = async (id, user) =>
  axios.put(`${API_URL}/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${API_URL}/${id}`);
