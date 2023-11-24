import styled from 'styled-components';
import { useState } from 'react';

import { StatusBtn } from '../../_common/props';

const RecruitBtn = ({ onBtnChange }: StatusBtn) => {
  const [selectedBtn, setSelectedBtn] = useState<string>('모집 중');

  const handleBtnClick = (status: string) => {
    setSelectedBtn(status);
    onBtnChange(status);
  };

  return (
    <Div>
      {['모집 중', '모집 완료'].map((status) => (
        <Btn
          key={status}
          className={`button ${selectedBtn === status ? 'active' : ''}`}
          onClick={() => handleBtnClick(status)}
        >
          {status}
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
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'suite';
  width: 110px;
  height: 45px;
  background-color: #f6f6f6;
  color: black;
  cursor: pointer;
  &.active {
    background-color: #ffe2e2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (max-width: 800px) {
    margin: 0 5px;
  }
`;

export default RecruitBtn;
