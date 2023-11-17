import { http } from './http';

export const getStudyDetail = async (postId: number) => {
  try {
    const res = await http.get(`/posts/${postId}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const changeRecruit = async (postId: number) => {
  try {
    const res = await http.patch(`/posts/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId: number) => {
  try {
    const res = await http.delete(`/posts/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
