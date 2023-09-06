import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../features/missions/missionsSlice';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
              <td className="memberTd midlleAlign"><button type="button" className="btn btn-secondary text-nowrap membershipBtn">NOT A MEMBER</button></td>
              <td className="joinBtnTd midlleAlign"><button type="button" className="btn text-nowrap btn-outline-dark joinMissioinBtn">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
