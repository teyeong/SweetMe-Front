import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { User } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const UserInfoAtom = atom<User>({
  key: 'UserInfoAtom',
  default: {
    nickname: '',
    email: '',
    profileImage: '',
  },
  effects_UNSTABLE: [persistAtom],
});
