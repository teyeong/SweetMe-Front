import { http } from './http';

export const requestPayment = async (postId: number) => {
  try {
    const res = await http.post(`/posts/${postId}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
