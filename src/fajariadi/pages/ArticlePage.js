import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import ArtikelHeader from '../../dhika/Artikel/header/ArtikelHeader';
import { ContextStore } from '../../context/store/ContextStore';
import { getArticleById } from '../../context/actions/fetchingActions';
import axios from 'axios';
import Loader from '../components/Loader';

const ArticlePage = ({ match }) => {
  const { articleIdState, articleIdDispatch } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    articleIdDispatch(getArticleById(match));

    window.scrollTo({ top: 0 });

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [match.params.id]);

  // console.log('ARTICLE SATUU', articleIdState);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <ArtikelHeader />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default ArticlePage;
