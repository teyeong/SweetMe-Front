import StudyDetail from './StudyDetail';
import TagBtn from './Btn/TagBtn';
import SortBtn from './Btn/SortBtn';
import RecruitBtn from './Btn/RecruitBtn';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { Study } from 'components/_common/props';
import { sort, recuitment } from 'components/_common/filter';
import Loader from 'components/_common/Loader';

import { filter } from 'api/study';

const StudyList = () => {
  // 태그 상태 저장 useState
  const [selectedRecruitBtn, setSelectedRecruitBtn] = useState<string>('전체');
  const [selectedSortBtn, setSelectedSortBtn] = useState<string>('최신순');
  const [selectedTagBtn, setSelectedTagBtn] = useState<string>('');

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // 데이터 가져오기 로딩
  const [itemList, setItemList] = useState<Study[]>([]); // 데이터 24개씩 자르기
  const [isLeft, setIsLeft] = useState<boolean>(false); // 남은 데이터 유무
  const [index, setIndex] = useState<number>(24); // 자른 데이터 인덱스

  useEffect(() => {
    if (itemList.length < data.length) {
      setIsLeft(true);
    } else {
      setIsLeft(false);
    }
  }, [itemList]);

  const handleMoreClick = () => {
    if (index + 24 > data.length) {
      console.log(data.length);
      setItemList(itemList.concat(data.slice(index, data.length)));
      console.log(itemList.concat(data.slice(index, data.length)));
      setIsLeft(false);
    } else {
      setItemList(itemList.concat(data.slice(index, index + 24)));
      setIndex(index + 24);
    }
  };

  // 데이터 불러오기 api 호출
  useEffect(() => {
    console.log(selectedRecruitBtn, selectedSortBtn, selectedTagBtn);
    const sortValue = sort[selectedSortBtn];
    const recuitValue = recuitment[selectedRecruitBtn];
    let apiURL = `/posts/filtering?sort=${sortValue}`;
    setIsLoading(true);
    const getData = async () => {
      if (recuitValue === 'null') {
        if (selectedTagBtn) {
          // recuitment 없음 & tag 있음 api 주소
          apiURL += `&category=${selectedTagBtn}`;
        }
      } else {
        if (selectedTagBtn) {
          // recuitment 있음 & tag 있음 api 주소
          apiURL += `&category=${selectedTagBtn}&recruitment=${recuitValue}`;
        } else {
          // recuitment 있음 & tag 없음 api 주소
          apiURL += `&recruitment=${recuitValue}`;
        }
      }
      const res = await filter(apiURL);
      setData(res?.data);
      setItemList(res?.data.slice(0, 24));
      setIsLoading(false);
      console.log(res?.data);
    };
    getData();
  }, [selectedRecruitBtn, selectedSortBtn, selectedTagBtn]);

  return (
    <Div>
      <BtnDiv>
        <RecruitBtn onBtnChange={(status) => setSelectedRecruitBtn(status)} />
        <SortBtn onBtnChange={(status) => setSelectedSortBtn(status)} />
      </BtnDiv>
      <div className="line" />
      <TagBtn onBtnChange={(status) => setSelectedTagBtn(status)} />
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDiv className={`${data.length === 0 && 'empty'}`}>
          {itemList.map((study) => {
            return <StudyDetail key={study.postId} study={study} />;
          })}
          {isLeft && <MoreBtn onClick={handleMoreClick}>더보기</MoreBtn>}
        </ItemDiv>
      )}
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
  margin: 10px 0;
  @media (max-width: 1320px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 660px;
  }
  @media (max-width: 660px) {
    width: 330px;
  }
  &.empty {
    width: 100%;
    height: 210px;
  }
`;

const MoreBtn = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border-radius: 50%;
  background-color: rgba(135, 133, 162, 0.5);
  cursor: pointer;
`;

export default StudyList;
