export type Study = {
  postId: number;
  memberName: string;
  title: string;
  content: string;
  createdDate: string;
  deadLine: string;
  startDate: string;
  endDate: string;
  people: number;
  view: number;
  recruitment: boolean;
  category: string;
  meeting: string;
  contact: string;
  promotion: boolean;
  heartCount: number;
  heart: boolean;
};

export const defaultStudy: Study = {
  postId: 0,
  memberName: '',
  title: '',
  content: '',
  createdDate: '',
  deadLine: '',
  startDate: '',
  endDate: '',
  people: 0,
  view: 0,
  recruitment: false,
  category: '',
  meeting: '',
  contact: '',
  promotion: false,
  heartCount: 0,
  heart: false,
};

export type User = {
  nickname: string;
  email: string;
  profileImage: string;
};

export type Login = {
  nickname: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  isFirst: boolean;
};

export type StatusBtn = {
  onBtnChange: (selectedBtn: string) => void;
};

export type TagListProps = {
  tags: string[];
  onTagClick: (tag: string) => void;
};

export type ModalProps = {
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export interface formData {
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
