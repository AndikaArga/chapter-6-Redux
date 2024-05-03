import axios from "axios";
import { setPost, setPostDetails } from "../Reducers/postReducer";

// Function to get all the posts
export const getAllPosts = () => async (dispatch, getstate) => {
  try {
    console.log('getstate', getstate())
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch(setPost(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response.data.message);
      return;
    }
    console.log(error.message);
  }
};

// Function to get the details of a post
export const getPostDetails = (id) => async (dispatch, getstate) => {
  try {
    console.log('getstate baru', getstate())
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log('resnponse.data', response.data)
    dispatch(setPostDetails(response.data));
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response.data.message);
      return;
    }
    console.log(error.message);
  }
};
