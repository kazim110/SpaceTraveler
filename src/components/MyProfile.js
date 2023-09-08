import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const missionReserved = missionsList.filter((mission) => mission.reserved);
  const allRockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved);

  return (
    <div className="myProfile">
      <div className="TableContainer">

        <h3>My Missions</h3>
        <table className="table table-bordered profileMissionTable">
          <tbody>
            {missionReserved.map((mission) => (
              <tr key={mission.id}>
                <td className="MissionName">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="TableContainer">
        <h3 className="my-rockets">My Rockets</h3>
        <table className="table table-bordered profileMissionTable">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id} className="rocketRow">
                <td className="MissionName">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
