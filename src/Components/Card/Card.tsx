import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <img src="http://dummyimage.com/120" alt="img" className={styles.img} />
        <div className={styles.title}>
          <h4>Title</h4>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            corporis quis, sint minus libero nesciunt dolore hic excepturi eius
            sit?
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
