import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, step = 3 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  let firstPage = currentPage - step;
  let lastPage = currentPage + step;

  for (let i = 1; i <= pagesCount; i++) {
    if (lastPage > pagesCount) {
      lastPage = pagesCount;
    }
    if (firstPage <= 0) {
      firstPage = 1;
      lastPage = step * 2 + 1;
    }
    if (currentPage + step >= pagesCount) {
      firstPage = pagesCount - step * 2;
    }
    if (i >= firstPage && i <= lastPage) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.paginator}>
      <button onClick={(e) => onPageChanged(1)}>&lt;&lt;</button>
      <button onClick={(e) => onPageChanged(currentPage - 1 <= 0 ? 1 : currentPage - 1)}>&lt;</button>
      <div className={styles.paginatorItemsList}>
        {pages.map((page) => (
          <button className={currentPage === page ? styles.active : ""} key={page} onClick={(e) => onPageChanged(page)}>
            {page}
          </button>
        ))}
      </div>
      <button onClick={(e) => onPageChanged(currentPage + 1 >= pagesCount ? pagesCount : currentPage + 1)}>&gt;</button>
      <button onClick={(e) => onPageChanged(pagesCount)}>&gt;&gt;</button>
    </div>
  );
};

export default Paginator;
