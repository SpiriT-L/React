import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.items}>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
