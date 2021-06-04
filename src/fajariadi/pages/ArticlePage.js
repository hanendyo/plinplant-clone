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
    const getArticleId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/article_get_by_id/${match.params.id}`
      );

      articleIdDispatch(getArticleById(res.data.data[0]));
    };

    window.scrollTo({
      top: 0,
    });

    setLoading(true);

    getArticleId();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [match.params.id]);

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
