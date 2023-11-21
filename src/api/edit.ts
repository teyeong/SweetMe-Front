import { http } from './http';
import { formData } from '../components/_common/props';

// 글 수정
export const editPost = async (postId: number, formData: formData) => {
  try {
    const res = await http.put(`/posts/${postId}`, formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};
