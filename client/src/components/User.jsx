import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { userId, username } = user; // Destructure book object

  return <p key={userId}>{username}</p>;
}

User.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
