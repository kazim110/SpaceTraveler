import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const allRockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h1>My Profile</h1>
      <h2>Reserved Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
