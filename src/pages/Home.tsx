import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import type { User } from "../types/User";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userApi";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);


  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (user: User) => {
  if (editingUser) {
    await updateUser(editingUser.id!, user);
  } else {
    await createUser(user);
  }

  setEditingUser(undefined);   // 👈 RESET FORM
  loadUsers();
};


  return (
    <>
    

      <UserForm
        initialData={editingUser}
        onSubmit={handleSubmit}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={async (id) => {
          await deleteUser(id);
          loadUsers();
        }}
      />
    </>
  );
}
