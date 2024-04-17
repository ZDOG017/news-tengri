import styles from "./styles.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category)}
          className={`${styles.item} ${selectedCategory === category ? styles.active : ''}`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
