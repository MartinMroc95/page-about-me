import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description || 'My Portfolio'} />
        <title>{title || 'My Portfolio'}</title>
        <html lang={lang || 'en'} />
      </Helmet>
      <App />
    </>
  );
};
