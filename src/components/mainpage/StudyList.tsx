import StudyDetail from './StudyDetail';
import TagBtn from './Btn/TagBtn';
import SortBtn from './Btn/SortBtn';
import RecruitBtn from './Btn/RecruitBtn';
import data from './dummy-data.json';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StudyList = () => {
  const [selectedRecruitBtn, setSelectedRecruitBtn] = useState<string>('전체');
  const [selectedSortBtn, setSelectedSortBtn] = useState<string>('최신순');
  const [selectedTagBtn, setSelectedTagBtn] = useState<string>('');

  useEffect(() => {
    // 데이터 불러오기 api 추가
    console.log('selectedTagBtn', selectedTagBtn);
  }, [selectedRecruitBtn, selectedSortBtn, selectedTagBtn]);

  return (
    <Div>
      <BtnDiv>
        <RecruitBtn onBtnChange={(status) => setSelectedRecruitBtn(status)} />
        <SortBtn onBtnChange={(status) => setSelectedSortBtn(status)} />
      </BtnDiv>
      <div className="line" />
      <TagBtn onBtnChange={(status) => setSelectedTagBtn(status)} />
      <ItemDiv>
        {data.map((study) => {
          return <StudyDetail key={study.postId} study={study} />;
        })}
      </ItemDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .line {
    width: 100%;
    height: 1px;
    background-color: black;
    margin: 15px 0;
    @media (max-width: 800px) {
      margin-top: 0;
    }
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 73vw;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 10px);
  }
`;

const ItemDiv = styled.div`
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1320px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 660px;
  }
  @media (max-width: 660px) {
    width: 330px;
  }
`;

export default StudyList;
