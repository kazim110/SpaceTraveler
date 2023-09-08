import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, bookRocket, cancelRocketBooking } from '../features/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketsList.length]);

  const handleBookRocket = (id) => {
    dispatch(bookRocket(id));
  };

  const handleCancelRocket = (id) => {
    dispatch(cancelRocketBooking(id));
  };

  return (
    <div className="rockets-container">
      {rocketsList.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>
              {rocket.reserved && <span className="badge">Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                className="cancel-button"
                type="button"
                onClick={() => handleCancelRocket(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="reserve-button"
                type="button"
                onClick={() => handleBookRocket(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
