import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const allRockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved);

  return (
    <div className="myProfile">
      <div className="missionsWrapper">
        <h2>My Missions</h2>
        {/* Missions will go here, it's empty for now */}
      </div>
      <div className="rocketsWrapper">
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id} className="rocketRow">
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
