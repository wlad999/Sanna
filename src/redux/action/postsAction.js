import {
  getPostsRequest,
  getUsersRequest,
  getPhotosRequest
} from "../../api/request";
import { actionTypes } from "./constants";

export const getPostsAC = posts => ({
  type: actionTypes.GET_POSTS,
  posts
});
export const getPhotosAC = photos => ({
  type: actionTypes.GET_PHOTOS,
  photos
});
export const getUsersAC = users => ({
  type: actionTypes.GET_USERS,
  users
});

export const currentPageAC = currentPage => ({
  type: actionTypes.SET_CARRENT_PAGE,
  currentPage
});
export const getPostsThunk = () => {
  return dispatch => {
    getPostsRequest().then(response => {
      dispatch(getPostsAC(response.data));
    });
    getUsersRequest().then(resp => {
      dispatch(getUsersAC(resp.data));
    });
  };
};
export const getPhotosThunk = id => {
  return dispatch => {
    getPhotosRequest(id).then(response => {
      dispatch(getPhotosAC(response.data));
    });
  };
};

// ------------------------------------------------------------------------
