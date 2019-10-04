import { actionTypes } from "../action/constants";

let initialState = {
  posts: [],
  photos: [],
  users: [],
  currentPage: 1
};

const potsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case actionTypes.GET_PHOTOS:
      return {
        ...state,
        photos: action.photos
      };

    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.users
      };

    case actionTypes.SET_CARRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    default:
      return state;
  }
};

export default potsReducer;
