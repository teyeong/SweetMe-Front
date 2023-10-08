import { useState } from 'react';
import styled from 'styled-components';

import { TagListProps } from 'components/_common/props';
import { categories } from 'components/_common/tags';

const TagList = ({ tags, onTagClick }: TagListProps) => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [activeTag, setActiveTag] = useState<string>('');

  const handleTagClick = (status: string) => {
    if (activeTag !== status || activeTag === '') {
      setSelectedTag(status);
      onTagClick(status);
      setActiveTag(status);
    } else {
      setSelectedTag('');
      onTagClick('');
      setActiveTag('');
    }
  };
  return (
    <Div>
      {tags.map((tag) => (
        <TagImg
          key={tag}
          src={categories[tag]}
          className={selectedTag === tag ? 'active' : ''}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </Div>
  );
};

const Div = styled.div`
  height: max-content;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
  background-color: #f6f6f6;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  border: 5px solid #ffe2e2;
`;

const TagImg = styled.img`
  margin: 0 10px;
  width: 120px;
  height: 44.384px;
  cursor: pointer;
  border: 5px solid #f6f6f6;
  &.active {
    border: 5px solid #ffe2e2;
    border-radius: 100px;
  }
`;

export default TagList;
