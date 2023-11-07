import game from '../../assets/tags/게임.png';
import frontend from '../../assets/tags/프론트엔드.png';
import backend from '../../assets/tags/백엔드.png';
import ai from '../../assets/tags/인공지능.png';
import algo from '../../assets/tags/알고리즘.png';

import eng from '../../assets/tags/영어.png';
import chi from '../../assets/tags/중국어.png';
import jpn from '../../assets/tags/일본어.png';
import fra from '../../assets/tags/프랑스어.png';
import ger from '../../assets/tags/독일어.png';
import spa from '../../assets/tags/스페인어.png';

import issue from '../../assets/tags/시사.png';
import book from '../../assets/tags/독서.png';
import exercise from '../../assets/tags/운동.png';
import get_up from '../../assets/tags/기상.png';

import etc from '../../assets/tags/기타.png';

import google from '../../assets/tags/구글폼.png';
import naver from '../../assets/tags/네이버 폼.png';
import chat from '../../assets/tags/오픈채팅.png';
import email from '../../assets/tags/이메일.png';

import offline from '../../assets/tags/대면.png';
import online from '../../assets/tags/비대면.png';

import open from '../../assets/tags/모집 중 태그.png';
import closed from '../../assets/tags/모집 완료 태그.png';

interface TagObject {
  [key: string]: string;
}

const categories = {
  FRONTEND: frontend,
  BACKEND: backend,
  GAME: game,
  AI: ai,
  ALGORITHM: algo,
  DEV_ETC: etc,
  ENGLISH: eng,
  CHINESE: chi,
  JAPANESE: jpn,
  FRENCH: fra,
  GERMAN: ger,
  SPANISH: spa,
  LAN_ETC: etc,
  ISSUE: issue,
  BOOK: book,
  EXERCISE: exercise,
  GET_UP: get_up,
  DAILY_ETC: etc,
} as TagObject;

const dev = {
  FRONTEND: frontend,
  BACKEND: backend,
  GAME: game,
  AI: ai,
  ALGORITHM: algo,
  DEV_ETC: etc,
} as TagObject;

const language = {
  ENGLISH: eng,
  CHINESE: chi,
  JAPANESE: jpn,
  FRENCH: fra,
  GERMAN: ger,
  SPANISH: spa,
  LAN_ETC: etc,
} as TagObject;

const daily = {
  ISSUE: issue,
  BOOK: book,
  EXERCISE: exercise,
  GET_UP: get_up,
  DAILY_ETC: etc,
} as TagObject;

const contact = {
  GOOGLE_FORM: google,
  NAVER_FORM: naver,
  KAKAO_OPENCHAT: chat,
  EMAIL: email,
} as TagObject;

const meeting = {
  OFFLINE: offline,
  ONLINE: online,
} as TagObject;

const recruitment = {
  False: open,
  True: closed,
} as TagObject;

export { categories, dev, language, daily, contact, meeting, recruitment };
