import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import styles from "./Posts.module.css";
import Posts from "./Posts";
import {
  getPostsThunk,
  getPhotosThunk,
  getPhotosAC,
  currentPageAC
} from "../../redux/action/postsAction";
import {
  getAllPosts,
  getUsers,
  getCurrentPage,
  getPhotos
} from "../../redux/selectors/postsSelectots";

class PostsContainer extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getPostsThunk();
  }

  render() {
    const {
      posts,
      photos,
      users,
      getPhotosAC,
      getPhotosThunk,
      currentPage,
      currentPageAC
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          {posts.length > 0 && users.length > 0 ? (
            <Posts
              posts={posts}
              photos={photos}
              getPhotosAC={getPhotosAC}
              users={users}
              getPhotosThunk={getPhotosThunk}
              currentPage={currentPage}
              currentPageAC={currentPageAC}
            />
          ) : (
            "Waiting litle bet"
          )}
        </div>
        <Footer className={styles.footer} />
      </div>
    );
  }
}
let MSTP = state => ({
  posts: getAllPosts(state),
  photos: getPhotos(state),
  users: getUsers(state),
  currentPage: getCurrentPage(state)
});

export default connect(
  MSTP,
  {
    getPostsThunk,
    getPhotosAC,
    currentPageAC,
    getPhotosThunk
  }
)(PostsContainer);
