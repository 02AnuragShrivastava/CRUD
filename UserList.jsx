import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../utils/Api";
import UserItem from "./UserItem";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>Registered Users</h1>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={() => handleDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
