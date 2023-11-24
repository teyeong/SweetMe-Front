import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { categories } from '../_common/tags';
import { Study } from '../_common/props';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { likePost, deleteLikePost } from 'api/studydetail';

const StudyDetail = ({ study }: { study: Study }) => {
  const navigate = useNavigate();

  const [tagImg, setTagImg] = useState<string>(''); // 태그 이미지
  const [dday, setDday] = useState<number | null>(null); // 디데이 계산
  const [userLiked, setUserLiked] = useState(study.heart); //  좋아요 여부

  // 디데이 계산
  useEffect(() => {
    const today = new Date();

    const parts = study?.deadLine.split('-');
    if (parts) {
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const day = parseInt(parts[2]);
      const targetDateObj = new Date(year, month, day);

      const timeDiff = targetDateObj.getTime() - today.getTime();
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      setDday(daysRemaining);
    }
  }, [study.deadLine]);

  // 스터디 상세 페이지로 이동
  const handleStudyClick = () => {
    navigate(`/detail/${study?.postId}`);
  };

  // 태그 이미지 설정
  useEffect(() => {
    setTagImg(categories[study?.category]);
  }, [study.category]);

  const handleLikeClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    // detail 페이지 이동 막기
    e.stopPropagation();

    if (userLiked) {
      // 좋아요 취소 호출
      const res = await deleteLikePost(study.postId);
      if (res) {
        setUserLiked(!userLiked);
      } else {
        alert('로그인이 필요합니다.');
      }
    } else {
      // 좋아요 등록 호출
      const res = await likePost(study.postId);
      if (res) {
        setUserLiked(!userLiked);
      } else {
        alert('로그인이 필요합니다.');
      }
    }
  };

  return (
    <Div onClick={handleStudyClick}>
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
          <p>♥{study.heartCount}</p>
          <p>👀{study.view}</p>
        </div>
      </FirstDiv>
      <TitleText>{study.title}</TitleText>
      <LastDiv>
        <Tag src={tagImg}></Tag>
        {userLiked ? (
          <LikeBtn onClick={handleLikeClick}>
            <IoMdHeart className="icon full" />
          </LikeBtn>
        ) : (
          <LikeBtn onClick={handleLikeClick}>
            <IoMdHeartEmpty className="icon" />
          </LikeBtn>
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
  background-color: white;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
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

const LikeBtn = styled.div`
  margin: 0;
  display: block;
  font-size: 30px;
  width: 30px;
  margin: 0;
  :hover {
    opacity: 0.6;
  }
  .icon {
    display: flex;
    align-items: center;
  }
  .full {
    color: var(--navy);
  }
`;

export default StudyDetail;
