import { http } from './http';

export const getFilter = async (url: string) => {
  try {
    const res = await http.get(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getPromo = async () => {
  try {
    const res = await http.get('/posts/promotion');
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getMyPosts = async () => {
  try {
    const res = await http.get('/posts/member');
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getLikedPosts = async () => {
  try {
    const res = await http.get('/posts/heart');
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
