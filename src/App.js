import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import axios from 'axios';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {
  const [categoryNews, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultApi = async () => {
      try {
        const key = '380538d9527b416ea1b10ce87e903d26';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoryNews}&apiKey=${key}`;

        const consultNews = await axios.get(url);
        saveNews(consultNews.data.articles);

      } catch (error) {
        console.log(error);
      }
    }

    consultApi();
  }, [categoryNews]);

  return (
    <Fragment>
      <Header title="Search news" />

      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
