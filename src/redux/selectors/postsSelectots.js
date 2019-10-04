export const getAllPosts = state => {
  return state.postsPage.posts;
};
export const getPhotos = state => {
  return state.postsPage.photos;
};
export const getUsers = state => {
  return state.postsPage.users;
};
export const getCurrentPage = state => {
  return state.postsPage.currentPage;
};
