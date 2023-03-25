import styles from './Forms.module.scss';

export default function forms() {
  return (
    <>
      <h2>Forms</h2>
      <form className={styles.form} name="form">
        <div className={styles.inputBlok}>
          <label className={styles.label} htmlFor="inputName">
            <h4>Name:</h4>
          </label>
          <input
            className={styles.input}
            id="inputName"
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className={styles.inputBlok}>
          <label htmlFor="inputSurname">
            <h4>Surname:</h4>
          </label>
          <input
            className={styles.input}
            id="inputSurname"
            type="text"
            placeholder="Enter surname"
          />
        </div>
        <div className={styles.inputBlok}>
          <label htmlFor="inputDate">
            <h4>Date of birth:</h4>
          </label>
          <input className={styles.input} id="inputDate" type="date" />
        </div>
        <div className={styles.inputBlok}>
          <label htmlFor="inputGender" className={styles.radio}>
            <h4>Gender:</h4>
            <input
              className={styles.inputRadio}
              type="radio"
              name="gender"
              id="men"
            />{' '}
            Men
            <input
              className={styles.inputRadio}
              type="radio"
              name="gender"
              id="femen"
            />
            Femen
          </label>
        </div>
        <div className={styles.inputBlok}>
          <label htmlFor="inputSelect">
            <h4>Education:</h4>
          </label>
          <select className={styles.input} name="education" id="inputSelect">
            <option value="Choose"></option>
            <option value="middle">Middle</option>
            <option value="specialized secondary">Specialized secondary</option>
            <option value="higher">Higher</option>
          </select>
        </div>
        <div className={styles.inputBlok}>
          <label htmlFor="inputFile">
            <h4>Download Avatar:</h4>
          </label>
          <input className={styles.input} id="inputFile" type="file" />
        </div>
        <div className={styles.inputBlokChecked}>
          <label htmlFor="inputCheckbox" className={styles.radio}>
            <input
              id="inputCheckbox"
              type="checkbox"
              className={styles.checkbox}
            />
            <h4>Agree</h4>
          </label>
        </div>
      </form>
    </>
  );
}
