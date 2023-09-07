import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function UserList({ allUsers }) {
  return (
    <>
      {allUsers.length > 0 ? (
        allUsers.map(({ userId, username }) => (
          <User key={userId} user={{ userId, username }} />
        ))
      ) : (
        <p>No users available.</p>
      )}
    </>
  );
}

UserList.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
