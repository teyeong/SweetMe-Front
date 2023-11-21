import { http } from './http';
import { formData } from '../components/_common/props';

export const createPost = async (formData: formData) => {
  try {
    const res = await http.post(`/posts`, formData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
