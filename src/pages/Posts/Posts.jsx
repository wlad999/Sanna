import React from "react";
import styles from "./Posts.module.css";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Photos from "../../components/Photos/Photos";

const Posts = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);
  props.currentPageAC(currentPage);
  let [onModal, setOnModal] = useState(false);
  let [currentAlbum, setAlbum] = useState(false);
  const showModal = (id, title) => {
    props.getPhotosThunk(id);
    setOnModal(true);
    setAlbum(title);
  };

  let pagesCount;
  let pageSize = 9;
  if (props.posts && props.posts.length > 0) {
    pagesCount = Math.ceil(props.posts.length / pageSize);
  }
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if (currentPage === 0) {
    setCurrentPage(pagesCount);
  }
  if (currentPage > pagesCount) {
    setCurrentPage(1);
  }

  let reversPosts = props.posts.map(el => el).reverse();
  let arrOfPosts = reversPosts.filter(el => {
    if (
      reversPosts.indexOf(el) < currentPage * 9 &&
      reversPosts.indexOf(el) >= currentPage * 9 - 9
    ) {
      return el;
    }
  });

  const userNameOfAlbum = userId => {
    return props.users.find(user => user.id === userId);
  };

  return (
    <div className={styles.box}>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.scroll}>
        {arrOfPosts.map(post => {
          return (
            <div className={styles.page} key={post.id}>
              <div className={styles.album}>{post.title}</div>
              <div className={styles.second}>
                <button onClick={() => showModal(post.id, post.title)}>
                  VIEW
                </button>
                <div>{userNameOfAlbum(post.userId).name}</div>
              </div>
            </div>
          );
        })}
      </div>
      {onModal && (
        <Photos
          photos={props.photos}
          setOnModal={setOnModal}
          getPhotosAC={props.getPhotosAC}
          currentAlbum={currentAlbum}
        />
      )}
    </div>
  );
};
export default Posts;
