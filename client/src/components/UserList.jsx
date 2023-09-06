import React from 'react';
import PropTypes from 'prop-types';
import User from './User'; // Import your User component

function UserList({ users }) {
  return (
    <>
      {users.length > 0 ? (
        users.map(({ userId, username }) => (
          <User key={userId} user={{ userId, username }} />
        ))
      ) : (
        <p>No users available.</p>
      )}
    </>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
