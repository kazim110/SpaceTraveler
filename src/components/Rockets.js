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
      <h1>Rockets</h1>
      {rocketsList.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
