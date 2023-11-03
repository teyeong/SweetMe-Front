import styled from 'styled-components';
import { useState } from 'react';

import { dev, language, daily, contact, meeting } from '../_common/tags';

type TagOptionProps = {
  type: 'dev' | 'lang' | 'daily' | 'contact' | 'meeting';
};

const TagList = ({ type }: TagOptionProps) => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  let tagObject: { [key: string]: string } = {};

  switch (type) {
    case 'dev':
      tagObject = dev;
      break;
    case 'lang':
      tagObject = language;
      break;
    case 'daily':
      tagObject = daily;
      break;
    case 'contact':
      tagObject = contact;
      break;
    case 'meeting':
      tagObject = meeting;
      break;
    default:
      break;
  }

  const handleTagClick = (tag: string) => {
    console.log(tag);
    setSelectedTag(tag); // 선택한 태그를 상태에 저장
  };

  return (
    <>
      {Object.keys(tagObject).map((e, index) => (
        <TagWrapper key={index} onClick={() => handleTagClick(e)}>
          <Tag src={tagObject[e]} />
        </TagWrapper>
      ))}
    </>
  );
};

export default TagList;

export const TagWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  transition: opacity 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Tag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
