import React, { useContext, useEffect } from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import ArtikelHeader from '../../dhika/Artikel/header/ArtikelHeader';
import { ContextStore } from '../../context/store/ContextStore';
import {
  getArticleById,
  getArticles,
} from '../../context/actions/fetchingActions';
import axios from 'axios';

const ArticlePage = ({ match }) => {
  const {
    tableArticleState,
    tableArticleDispatch,
    articleIdState,
    articleIdDispatch,
  } = useContext(ContextStore);

  useEffect(() => {
    const getTableArticle = async () => {
      const res = await axios.get(
        'http://localhost:5000/input/article_get_all_datas'
      );

      tableArticleDispatch(getArticles(res.data.data));
    };

    const getArticleId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/article_get_by_id/${match.params.id}`
      );

      articleIdDispatch(getArticleById(res.data.data));
    };

    getTableArticle();
    getArticleId();
  }, [match]);

  console.log('ARTICLES', tableArticleState);
  console.log('ARTICLE ID', articleIdState);

  return (
    <div>
      <Navbar />
      <ArtikelHeader />
      <Footer colored />
    </div>
  );
};

export default ArticlePage;
