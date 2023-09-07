import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../features/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rocketsList.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button className="reserve-button" type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
