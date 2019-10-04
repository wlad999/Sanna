import * as Axios from "axios";
import * as api from "./api";

Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.get["Content-Type"] = "application/json";
Axios.defaults.headers.put["Content-Type"] = "application/json";

export const getPostsRequest = () => {
  return Axios.get(api.url.albums())
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
export const getUsersRequest = () => {
  return Axios.get(api.url.users())
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
export const getPhotosRequest = id => {
  return Axios.get(api.url.photosInAlbums(id))
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
