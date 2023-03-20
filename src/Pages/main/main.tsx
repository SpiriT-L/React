import React from 'react';
import { Helmet } from 'react-helmet-async';
import Search from '../../components/Search/Search';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>

      <div className={styles.mainContainer}>
        <h1>Main</h1>
        <Search />
      </div>
    </>
  );
};

export default Main;
