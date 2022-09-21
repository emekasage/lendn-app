import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./news.css";

const News = () => {
  const [articles, setArticles] = useState([]);

  //endpoint to get news from api
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=a8bfcd5eb2f6477bb8fcbded3eb577c3"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <div className="news">
      <div className="row p-4">
        <div className="col-12">
          <div className="bg-white rounded border border-white pt-5 px-5 pb-0">
            <span className="fw-bold mb-4 bgText">News</span>
            <div className="row my-4">
              {articles &&
                articles.slice(0, 6).map((newsItem, index) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-4"
                      key={index}
                    >
                      <div className="card">
                        <img
                          src={newsItem.urlToImage}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{newsItem.title}</h5>
                          <p className="card-text">{newsItem.description}</p>
                          <a
                            href={newsItem.url}
                            target="_blank"
                            className="btn btn-primary"
                            rel="noreferrer"
                          >
                            Go to News
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
