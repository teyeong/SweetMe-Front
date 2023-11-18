import { atom } from 'recoil';

interface TagAtom {
  isSelected: boolean;
  selectedTag: string;
}

export const CategoryAtom = atom<TagAtom>({
  key: 'CategoryAtom',
  default: {
    isSelected: false,
    selectedTag: '',
  },
});

export const MeetingAtom = atom<TagAtom>({
  key: 'MeetingAtom',
  default: {
    isSelected: false,
    selectedTag: '',
  },
});

export const ContactAtom = atom<TagAtom>({
  key: 'ContactAtom',
  default: {
    isSelected: false,
    selectedTag: '',
  },
});
