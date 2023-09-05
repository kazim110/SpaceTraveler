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
      <h2>Missions</h2>
      {missionsList.map((mission) => (
        <div key={mission.id}>
          <h6>{mission.mission_id}</h6>
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;
