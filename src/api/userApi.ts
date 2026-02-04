import axios from "axios";
import type { User } from "../types/User";


const API_URL = "https://user-crud-test-urq2.onrender.com/users";

export const getUsers = () => axios.get<User[]>(API_URL);
export const createUser = (user: User) => axios.post(API_URL, user);
export const updateUser = (id: number, user: User) =>
  axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) =>
  axios.delete(`${API_URL}/${id}`);
