import React, { useState } from "react";
import styles from "./Paginator.module.scss";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      <button disabled={portionNumber > 1 ? false : true} onClick={() => setPortionNumber(1)}>
        &lt;&lt;
      </button>
      <button disabled={portionNumber > 1 ? false : true} onClick={() => setPortionNumber(portionNumber - 1)}>
        &lt;
      </button>

      <div className={styles.paginatorItemsList}>
        {pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page) => (
            <button className={currentPage === page ? styles.active : ""} key={page} onClick={(e) => onPageChanged(page)}>
              {page}
            </button>
          ))}
      </div>
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>&gt;</button>}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionCount)}>&gt;&gt;</button>}
    </div>
  );
};

export default Paginator;
