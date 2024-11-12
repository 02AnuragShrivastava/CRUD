import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item">
      <div>
        <strong>{user.name}</strong> - {user.email} - {user.dateOfBirth}
      </div>
      <div className="user-actions">
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default UserItem;
