import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({
  name,
  age,
  gender,
  color,
  breed,
  description,
  image,
  onClick,
}) => (
  <Fragment>
    <div className="conteyner">
      <h2 className="title">All about {name}</h2>
      <img src={image} alt="" width={300} />
      <div className={styles.pasportData}>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Color: </b>
          {color}
        </p>
        <p>
          <b>Breed: </b>
          {breed}
        </p>
      </div>
      <p>{description}</p>
      <button type="button" className="button" onClick={onClick}>
        Return
      </button>
    </div>
  </Fragment>
);

Pet.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  gender: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  breed: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Pet;
