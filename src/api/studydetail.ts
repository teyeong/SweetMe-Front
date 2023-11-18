import { http } from './http';

// 모집글 상세 조회
export const getStudyDetail = async (postId: number) => {
  try {
    const res = await http.get(`/posts/${postId}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 모집여부 변경
export const changeRecruit = async (postId: number) => {
  try {
    const res = await http.patch(`/posts/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 글 삭제
export const deletePost = async (postId: number) => {
  try {
    const res = await http.delete(`/posts/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 좋아요 생성
export const likePost = async (postId: number) => {
  try {
    const res = await http.post(`/posts/${postId}/hearts`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 좋아요 삭제
export const deleteLikePost = async (postId: number) => {
  try {
    const res = await http.delete(`/posts/${postId}/hearts`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
