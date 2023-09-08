import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../features/missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsList.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionsList.length]);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Discription</th>
            <th scope="col">Status</th>
            <th scope="col">Join</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <tr key={mission.id}>
              <td className="MissionName">{mission.mission_name}</td>
              <td className="MissionDescription">{mission.description}</td>
              <td className="memberTd midlleAlign">
                {mission.reserved ? (
                  <span className="badge bg-info">Active Member</span>
                ) : (
                  <span className="badge bg-secondary">NOT A MEMBER</span>
                )}
              </td>
              <td className="joinBtnTd midlleAlign">
                {mission.reserved ? (
                  <button
                    type="button"
                    data-testid="leaveMissionBtn"
                    className="btn text-nowrap btn-outline-danger leaveMissionBtn"
                    onClick={() => {
                      handleLeaveMission(mission.id);
                    }}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid="joinMissionBtn"
                    className="btn text-nowrap btn-outline-dark joinMissioinBtn"
                    onClick={() => {
                      handleJoinMission(mission.id);
                    }}
                  >
                    Join Mission
                  </button>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
