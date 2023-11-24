interface FilterObject {
  [key: string]: string;
}

export const sort = {
  최신순: 'DATE',
  조회수순: 'VIEW',
  좋아요순: 'HEART',
} as FilterObject;

export const recuitment = {
  '모집 중': '0',
  '모집 완료': '1',
} as FilterObject;
