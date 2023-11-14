import { http } from './http';

export const filter = async (url: string) => {
  try {
    const res = await http.get(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const promo = async () => {
  try {
    const res = await http.get('/posts/promotion');
    console.log('프로모', res.data);
    return res;
  } catch (err) {
    console.error(err);
  }
};
