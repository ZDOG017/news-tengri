import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={`${styles.button} ${styles.arrow}`}
      >
        &laquo;
      </button>
      <div className={styles.list} style={{ overflowX: 'auto' }}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={`${styles.button} ${index + 1 === currentPage ? styles.active : ''}`}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={`${styles.button} ${styles.arrow}`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
