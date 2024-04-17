import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header} onClick={() => navigate('/')}>
      <h1 className={styles.title}>NEWS TENGRI</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
