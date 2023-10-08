import styled from 'styled-components';
import { useState } from 'react';

import { StatusBtn } from '../../_common/props';

const SortTab = ({ onBtnChange }: StatusBtn) => {
  const [selectedBtn, setSelectedBtn] = useState<string>('최신순');

  const handleBtnClick = (status: string) => {
    setSelectedBtn(status);
    onBtnChange(status);
  };

  return (
    <Div>
      {['최신순', '조회수순', '좋아요순'].map((status) => (
        <Btn
          key={status}
          className={`button ${selectedBtn === status ? 'active' : ''}`}
          onClick={() => handleBtnClick(status)}
        >
          • {status}
        </Btn>
      ))}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  border: none;
  font-size: 18px;
  font-family: 'suite';
  width: max-content;
  height: 50px;
  background-color: white;
  //text-align: right;
  padding: 0;
  margin: 0 15px;
  cursor: pointer;
  &.active {
    font-weight: 700;
  }
`;

export default SortTab;
