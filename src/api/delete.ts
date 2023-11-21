import { http } from './http';

// 글 삭제
export const deletePost = async (postId: number) => {
  try {
    const res = await http.delete(`/posts/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
