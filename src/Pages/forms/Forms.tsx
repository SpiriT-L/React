import React, { Component } from 'react';
import styles from './Forms.module.scss';
import { Form } from '../../types/types';

const EDUCATION = [
  {
    id: 1,
    value: 'Secondary education',
    title: 'Secondary education'
  },
  {
    id: 2,
    value: 'Secondary special education',
    title: 'Secondary special education'
  },
  {
    id: 2,
    value: 'Higher education',
    title: 'Higher education'
  }
];

class Forms extends Component {
  state: Form = {
    inputName: '',
    inputSurname: '',
    value: '',
    inputDate: '',
    event: '',
    inputGender: '',
    inputSelect: '',
    showData: {
      inputName: '',
      inputSurname: '',
      value: '',
      inputDate: '',
      event: '',
      inputGender: '',
      inputSelect: ''
    }
  };

  inputChangeName = ({ target: { value } }: { target: { value: string } }) => {
    this.setState({
      inputName: value
    });
  };
  inputChangeSurname = ({
    target: { value }
  }: {
    target: { value: string };
  }) => {
    this.setState({
      inputSurname: value
    });
  };
  inputChangeDate = ({ target: { value } }: { target: { value: string } }) => {
    this.setState({
      inputDate: value
    });
  };
  inputChangeGender = ({
    target: { value }
  }: {
    target: { value: string };
  }) => {
    this.setState({
      inputGender: value
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setGender(event: any) {
    console.log(event.target.value);
    return event.target.value;
  }

  inputChangeSelect = ({
    target: { value }
  }: {
    target: { value: string };
  }) => {
    this.setState({
      inputSelect: value
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleShow: (e: any) => void = (e: any) => {
    e.preventDefault();
    const { inputName, inputSurname, inputDate, inputSelect } = this.state;
    this.setState({
      inputName: '',
      inputSurname: '',
      inputDate: '',
      event: '',
      inputSelect: '',
      showData: {
        name: inputName,
        surname: inputSurname,
        date: inputDate,
        gender: this.setGender,
        education: inputSelect
      }
    });
  };

  render() {
    const { inputName, inputSurname, inputDate, inputSelect, showData } =
      this.state;
    const { name, surname, date, event, education } = showData;
    return (
      <section>
        <h2>Forms</h2>
        <form className={styles.form} name="form">
          <div className={styles.inputBlock}>
            <label className={styles.label} htmlFor="inputName">
              <h4>Name:</h4>
            </label>
            <input
              className={styles.input}
              id="inputName"
              type="text"
              placeholder="Enter name"
              value={inputName}
              onChange={this.inputChangeName}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="inputSurname">
              <h4>Surname:</h4>
            </label>
            <input
              className={styles.input}
              id="inputSurname"
              type="text"
              placeholder="Enter surname"
              value={inputSurname}
              onChange={this.inputChangeSurname}
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="inputDate">
              <h4>Date of birth:</h4>
            </label>
            <input
              className={styles.input}
              id="inputDate"
              type="date"
              value={inputDate}
              onChange={this.inputChangeDate}
            />
          </div>
          <div className={styles.inputBlock}>
            <label
              htmlFor="inputGender"
              className={styles.radio}
              onChange={this.setGender.bind(this)}>
              <h4>Gender:</h4>
              <input
                className={styles.inputRadio}
                type="radio"
                name="gender"
                id="male"
                value="MALE"
              />
              Male
              <input
                className={styles.inputRadio}
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
              />
              Female
            </label>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="inputSelect">
              <h4>Education:</h4>
            </label>
            <select
              className={(styles.input, styles.select)}
              name="education"
              id="inputSelect"
              value={inputSelect}
              onChange={this.inputChangeSelect}>
              {EDUCATION.map(({ id, value, title }) => (
                <option key={id} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="inputFile">
              <h4>Download Avatar:</h4>
            </label>
            <input className={styles.inputFile} id="inputFile" type="file" />
          </div>
          <div className={styles.inputBlockChecked}>
            <label htmlFor="inputCheckbox" className={styles.radio}>
              <input
                id="inputCheckbox"
                type="checkbox"
                className={styles.checkbox}
              />
              <h4>Agree</h4>
            </label>
          </div>
          <div className={styles.buttonBlock}>
            <button className={styles.formButton} onClick={this.handleShow}>
              Send
            </button>
          </div>
        </form>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h2>{date}</h2>
        <h2>{event}</h2>
        <h2>{education}</h2>
      </section>
    );
  }
}
export default Forms;
