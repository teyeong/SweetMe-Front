import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Login } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const LoginStateAtom = atom<boolean>({
  key: 'LoginStateAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const LoginAtom = atom<Login>({
  key: 'LoginAtom',
  default: {
    nickname: '',
    email: '',
    accessToken: '',
    refreshToken: '',
    isFirst: false,
  },
  effects_UNSTABLE: [persistAtom],
});
