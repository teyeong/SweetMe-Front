import styled from 'styled-components';
import { useState, useContext } from 'react';

import { dev, language, daily, contact, meeting } from '../_common/tags';
import { TagContext } from './TagProvider';

type TagOptionProps = {
  type: 'dev' | 'lang' | 'daily' | 'contact' | 'meeting';
};

const TagList = ({ type }: TagOptionProps) => {
  const {
    categoryTag,
    setCategoryTag,
    meetingTag,
    setMeetingTag,
    contactTag,
    setContactTag,
  } = useContext(TagContext);
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

  const handleTagClick = (type: string, tag: string) => {
    if (type === 'contact') {
      setContactTag(tag);
    } else if (type === 'meeting') {
      setMeetingTag(tag);
    } else {
      setCategoryTag(tag);
    }
  };

  return (
    <>
      {Object.keys(tagObject).map((e, index) => (
        <TagWrapper key={index} onClick={() => handleTagClick(type, e)}>
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
