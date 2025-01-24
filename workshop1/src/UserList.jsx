import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]); // État pour stocker les utilisateurs

  useEffect(() => {
    // Récupérer les données depuis une API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)) // Mettre à jour l'état avec les données
      .catch((error) => console.error("Erreur :", error));
  }, []); // Le tableau vide [] signifie que l'effet se déclenche une seule fois

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;