import React from 'react';
import PropTypes from 'prop-types';
// module styles
import styles from './Form.module.css';
import useSelect from '../hokks/useSelect';
const Form = ({ saveCategory }) => {
  // create select info
  const OPTIONS = [
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  // custom hook
  const [category, NewsSelect] = useSelect('general', OPTIONS);

  // save to the category
  const handleSubmit = e => {
    e.preventDefault();
    saveCategory(category);
  }

  return (
    <div className={`${styles.buscar} row`} >
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Find news for category</h2>
          <NewsSelect />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="search"
            />
          </div>
        </form>
      </div>
    </div >
  );
}

Form.propTypes = {
  saveCategory: PropTypes.func.isRequired
}

export default Form;