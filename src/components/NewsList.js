import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ news }) => {

  return (
    <div className="row">
      {news.map(uniqueNew => (
        <News key={uniqueNew.url} uniqueNew={uniqueNew}></News>
      ))}
    </div>
  );
}

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}
export default NewsList;  