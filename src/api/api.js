import Axios from "axios";

const url = "http://localhost:4000/style";

export const fetchPosts = () => Axios.get(url);
export const createPost = (newPost) => Axios.post(url, newPost);
export const updatePost = (id, updatePost) =>
  Axios.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => Axios.delete(`${url}/${id}`);
export const likePost = (id) => Axios.patch(`${url}/${id}/likePost`);
