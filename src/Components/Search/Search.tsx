import React from 'react';
// import axios from 'axios';
import styles from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <>
      <h1>search</h1>
      <div className={styles.form}>
        <form className={styles.formImput}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchImput}
            placeholder="Search input"
            type="search"
            name="q"
            id=""
            // value="{username}"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const valueEvent: string | null = event.target.value;
              localStorage.setItem('inputValue', valueEvent);
              const getInputValue: string | null =
                localStorage.getItem('inputValue');

              // console.log(valueEvent);
              // console.log(username);
              // console.log(event);
              return getInputValue;
            }}
          />
        </form>
      </div>
      {/* <div className={styles.countries}>
        {countries.map((country: any, index: number) => {
          return <CountryItem country={country} key={index} />;
        })}
      </div> */}
    </>
  );
};

export default Search;
