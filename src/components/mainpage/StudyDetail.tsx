import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { categories } from '../_common/tags';
import { Study } from '../_common/props';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

const StudyDetail = ({ study }: { study: Study }) => {
  const navigate = useNavigate();

  const [tagImg, settagImg] = useState<string>('');

  const [dday, setDday] = useState<number | null>(null);

  // 디데이 계산
  useEffect(() => {
    const today = new Date();

    const parts = study.deadline.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);
    const targetDateObj = new Date(year, month, day);

    const timeDiff = targetDateObj.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDday(daysRemaining);
  }, [study.deadline]);

  // 스터디 상세 페이지로 이동
  const handleStudyClick = () => {
    navigate(`/detail/${study.postId}`);
  };

  // 태그 이미지 설정
  useEffect(() => {
    settagImg(categories[study.category]);
  }, [study.category]);

  const handleLikeClick = () => {
    // 좋아요 버튼 api 호출
  };

  return (
    <Div onClick={handleStudyClick} className={study.recruitment ? 'end' : ''}>
      <EndDiv className={study.recruitment ? 'end' : ''}>
        <div>
          모집
          <br />
          완료
        </div>
      </EndDiv>
      <FirstDiv>
        {dday !== null && (
          <DdayText>
            {dday === 0
              ? 'D-Day'
              : dday > 0
              ? `D-${dday}`
              : `D+${Math.abs(dday)}`}
          </DdayText>
        )}
        <div>
          <p>♥{study.likes}</p>
          <p>👀{study.view}</p>
        </div>
      </FirstDiv>
      <TitleText>{study.title}</TitleText>
      <LastDiv>
        <Tag src={tagImg}></Tag>
        {study.userLiked ? (
          <LikeBtn onClick={handleLikeClick} />
        ) : (
          <EmptyLikeBtn onClick={handleLikeClick}>
            <IoMdHeartEmpty className="icon" />
          </EmptyLikeBtn>
        )}
      </LastDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 300px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 5px solid #ffc7c7;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 15px;
  cursor: pointer;
  position: relative;
`;

const EndDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(135, 133, 162, 0.5);
  border-radius: 10px;
  visibility: hidden;
  &.end {
    visibility: visible;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border-radius: 50%;
    background-color: #ffc7c7;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const FirstDiv = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-left: 5px;
    }
  }
`;

const DdayText = styled.p`
  font-size: 24px;
  margin: 0;
`;

const TitleText = styled.p`
  font-size: 24px;
  margin: auto 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const LastDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Tag = styled.img`
  margin: 0;
  width: 100px;
`;

const LikeBtn = styled(IoMdHeart)`
  font-size: 30px;
  margin: 0;
  color: rgb(255, 0, 0);
  :hover {
    color: rgba(255, 0, 0, 0.5);
  }
`;

const EmptyLikeBtn = styled.div`
  margin: 0;
  display: block;
  font-size: 30px;
  width: 30px;
  margin: 0;
  :hover {
    color: rgba(255, 0, 0, 0.5);
  }
  .icon {
    display: flex;
    align-items: center;
  }
`;

export default StudyDetail;
