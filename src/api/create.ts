import { http } from './http';

interface formData {
  title: string;
  content: string;
  deadLine: string;
  startDate: string;
  endDate: string;
  people: number;
  category: string;
  meeting: string;
  contact: string;
}

export const submitForm = async (formData: formData) => {
  try {
    const res = await http.post(`/posts`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
