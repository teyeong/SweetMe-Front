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
