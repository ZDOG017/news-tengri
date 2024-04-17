import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../api/apiNews";
import Image from "../Image/Image";
import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getNewsById(id)
      .then(item => {
        if (item) {
          setNewsItem(item);
        } else {
          setError("No news item found with the provided ID.");
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load the news details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!newsItem) return <p>No news details found.</p>;

  return (
    <div className={styles.container}>
      {newsItem.image && <Image image={newsItem.image} className={styles.image} />}
      <div className={styles.content}>
        <h1 className={styles.title}>{newsItem.title}</h1>
        <p className={styles.meta}>
          {formatTimeAgo(newsItem.published)} by {newsItem.author || "Unknown"}
        </p>
        <p className={styles.category}>
          {newsItem.category && `Category: ${newsItem.category.join(", ")}`}
        </p>
        <p className={styles.description}>{newsItem.description}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
