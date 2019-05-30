import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.menu}>
    <li>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pets"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
