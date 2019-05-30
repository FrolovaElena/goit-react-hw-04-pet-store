import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './Pets.module.css';

const Pets = ({ items, match, location }) => {
  return (
    <Fragment>
      <h2 className="title conteyner">All available pets</h2>
      <ul className={styles.petsList}>
        {items.map(item => (
          <li className={styles.petsListItem} key={item.id}>
            <Link
              className={styles.name}
              to={{
                pathname: `${match.path}/${item.id}`,
                state: { from: location },
              }}
            >
              <img src={item.image} alt="" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Pets.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: propTypes.shape().isRequired,
  location: propTypes.shape().isRequired,
};

export default withRouter(Pets);
