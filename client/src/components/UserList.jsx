import { useState, useEffect } from 'react';
import { getAllUsers } from '../fetching';

function UserList() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const users = await getAllUsers();
      setAllUsers(users);
    }
    fetchData();
  }, []);

  return (
    <>
      {allUsers.length > 0 ? (
        <table style={{margin: 'auto'}}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            { allUsers.map(({ userId, username, email, role }) => (
              <tr key={userId}>
                <td>{ username }</td>
                <td>{ email }</td>
                <td>{ role }</td>
              </tr>
            )) }
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
    </>
  );
}

UserList.propTypes = {
};

export default UserList;
