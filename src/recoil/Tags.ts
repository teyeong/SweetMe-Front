import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const MeetingAtom = atom<TagAtom>({
  key: 'MeetingAtom',
  default: {
    isSelected: false,
    selectedTag: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const ContactAtom = atom<TagAtom>({
  key: 'ContactAtom',
  default: {
    isSelected: false,
    selectedTag: '',
  },
  effects_UNSTABLE: [persistAtom],
});
