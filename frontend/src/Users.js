import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.url}>
                <td>{user.username}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
