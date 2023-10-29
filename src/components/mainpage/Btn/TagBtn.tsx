import styled from 'styled-components';
import { useState } from 'react';

import { StatusBtn } from '../../_common/props';
import { dev, language, daily } from 'components/_common/tags';
import TagList from './TagList';

const TagBtn = ({ onBtnChange }: StatusBtn) => {
  const [selectedBtn, setSelectedBtn] = useState<string>('');
  const [activeTag, setActiveTag] = useState<string>('');

  const handleBtnClick = (status: string) => {
    if (activeTag !== status || activeTag === '') {
      setSelectedBtn(status);
      setActiveTag(status);
    } else {
      setSelectedBtn('');
      setActiveTag('');
      onBtnChange('');
    }
  };

  const getTagsByCategory = (category: string) => {
    if (category === '개발') {
      return Object.keys(dev);
    } else if (category === '어학') {
      return Object.keys(language);
    } else if (category === '일상') {
      return Object.keys(daily);
    } else {
      return [];
    }
  };

  return (
    <Div>
      <div className="div">
        {['개발', '어학', '일상'].map((status) => (
          <Btn
            key={status}
            className={selectedBtn === status ? 'active' : ''}
            onClick={() => handleBtnClick(status)}
          >
            {status}
          </Btn>
        ))}
      </div>
      {selectedBtn && (
        <TagList
          tags={getTagsByCategory(selectedBtn)} // 선택한 버튼에 따라 태그 목록 전달
          onTagClick={onBtnChange}
        />
      )}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 73vw;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
  .div {
    display: flex;
    @media (max-width: 800px) {
      justify-content: center;
    }
  }
`;

const Btn = styled.button`
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'suite';
  width: 150px;
  height: 55px;
  background-color: #f6f6f6;
  color: black;
  cursor: pointer;
  &.active {
    background-color: #ffe2e2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (max-width: 800px) {
    margin: 0 10px;
  }
`;

export default TagBtn;
