import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../features/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets</h2>
      {rocketsList.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
          <h3>{rocket.rocket_type}</h3>
          <p>{rocket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
