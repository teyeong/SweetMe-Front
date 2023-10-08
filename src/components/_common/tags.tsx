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

import preview from '../../assets/tags/시사.png';
import reading from '../../assets/tags/독서.png';
import workout from '../../assets/tags/운동.png';
import wakeup from '../../assets/tags/기상.png';

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
  '개발-프론트엔드': frontend,
  '개발-백엔드': backend,
  '개발-게임': game,
  '개발-인공지능': ai,
  '개발-알고리즘': algo,
  '개발-기타': etc,
  '어학-영어': eng,
  '어학-중국어': chi,
  '어학-일본어': jpn,
  '어학-프랑스어': fra,
  '어학-독일어': ger,
  '어학-스페인어': spa,
  '어학-기타': etc,
  '일상-시사': preview,
  '일상-독서': reading,
  '일상-운동': workout,
  '일상-기상': wakeup,
  '일상-기타': etc,
} as TagObject;

const dev = {
  '개발-프론트엔드': frontend,
  '개발-백엔드': backend,
  '개발-게임': game,
  '개발-인공지능': ai,
  '개발-알고리즘': algo,
  '개발-기타': etc,
} as TagObject;

const language = {
  '어학-영어': eng,
  '어학-중국어': chi,
  '어학-일본어': jpn,
  '어학-프랑스어': fra,
  '어학-독일어': ger,
  '어학-스페인어': spa,
  '어학-기타': etc,
} as TagObject;

const daily = {
  '일상-시사': preview,
  '일상-독서': reading,
  '일상-운동': workout,
  '일상-기상': wakeup,
  '일상-기타': etc,
} as TagObject;

const contact = {
  구글폼: google,
  '네이버 폼': naver,
  오픈채팅: chat,
  이메일: email,
} as TagObject;

const meeting = {
  대면: offline,
  비대면: online,
} as TagObject;

const recruitment = {
  True: open,
  False: closed,
} as TagObject;

export { categories, dev, language, daily, contact, meeting, recruitment };
