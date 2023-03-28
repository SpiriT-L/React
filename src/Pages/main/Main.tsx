import { Helmet } from 'react-helmet-async';
import Search from '../../components/Search/Search';
import styles from './Main.module.scss';
import Card from '../../components/Card/Card';

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <div className={styles.mainContainer}>
        <h1>Main</h1>
        <Search />
        <Card />
      </div>
    </div>
  );
};

export default Main;
