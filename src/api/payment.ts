import { http } from './http';

export const requestPayment = async (postId: number) => {
  try {
    const res = await http.post(`/payment`, {
      postId: postId,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
