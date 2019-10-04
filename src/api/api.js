const baseUrl = "https://jsonplaceholder.typicode.com/";

export const url = {
  albums: () => `${baseUrl}albums`,
  users: () => `${baseUrl}users`,
  photosInAlbums: id => `${baseUrl}photos?albumId=${id}`
};
