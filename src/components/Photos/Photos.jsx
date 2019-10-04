import React from "react";
import styles from "./Photos.module.css";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Photos = props => {
  let [PhotoPage, setPhotoPage] = useState(1);
  const closeModal = () => {
    props.setOnModal();
    props.getPhotosAC([]);
  };

  let pagesCount;
  let pageSize = 9;
  if (props.photos && props.photos.length > 0) {
    pagesCount = Math.ceil(props.photos.length / pageSize);
  }

  if (PhotoPage - pagesCount === 1) {
    setPhotoPage(PhotoPage - 1);
  }

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let reversPhotos = props.photos.map(el => el).reverse();
  let arrOfPhotos = reversPhotos.filter(el => {
    if (
      reversPhotos.indexOf(el) < PhotoPage * 9 &&
      reversPhotos.indexOf(el) >= PhotoPage * 9 - 9
    ) {
      return el;
    }
  });

  return (
    <div className={styles.box}>
      <button onClick={closeModal}>X</button>
      <div>{props.currentAlbum}</div>
      <div className={styles.scroll}>
        {arrOfPhotos.map(post => {
          return <img src={post.thumbnailUrl} alt="" />;
        })}
      </div>
      <Pagination
        pages={pages}
        currentPage={PhotoPage}
        setCurrentPage={setPhotoPage}
      />
    </div>
  );
};
export default Photos;
