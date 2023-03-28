import React, { Component } from 'react';
import styles from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';

interface State {
  searchValue: string;
}

export default class Search extends Component<object, State> {
  state: State = {
    searchValue: localStorage.getItem('searchValue') as string
  };

  render(): JSX.Element {
    return (
      <div className={styles.form}>
        <form className={styles.formImput}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchImput}
            placeholder="Search input"
            type="search"
            value={this.state.searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const valueEvent: string | null = event.target.value;
              this.setState({ searchValue: event.target.value });
              localStorage.setItem('searchValue', valueEvent);
            }}
          />
        </form>
      </div>
    );
  }
}
