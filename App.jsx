import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./index.css";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setEditingUser(null);
  };

  return (
    <div className="container">
      <UserForm editingUser={editingUser} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default App;
