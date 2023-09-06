import React from 'react';
import { connect, useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const missionReserved = missionsList.filter((mission) => mission.reserved);

  return (
    <div className="MissionTableContainer">
      <h5>My Missions</h5>
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
  );
};

const mapStateToProps = (state) => ({
  missions: state.missions,
});

export default connect(mapStateToProps)(MyProfile);
