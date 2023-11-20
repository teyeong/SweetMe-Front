import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LoginStateAtom } from '../../recoil/Login';
import { Study } from 'components/_common/props';
import { categories, contact, meeting } from 'components/_common/tags';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import { likePost, deleteLikePost } from 'api/studydetail';

const DetailBox = ({ study }: { study: Study }) => {
  const loginState = useRecoilValue(LoginStateAtom); // 로그인 여부

  const [categoryTag, setCategoryTag] = useState('');
  const [contactTag, setContactTag] = useState('');
  const [meetingTag, setMeetingTag] = useState('');
  const [people, setPeople] = useState(0);
  const [studyPeriod, setStudyPeriod] = useState('');
  const [dday, setDday] = useState(0);
  const [userLiked, setUserLiked] = useState(false);

  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;

  // 스터디 기간 형식 변경 함수
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    return `${dateObject.getFullYear()}.${(dateObject.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${dateObject.getDate().toString().padStart(2, '0')}`;
  };

  // 상세 정보 설정
  useEffect(() => {
    // 스터디 기간
    const formattedStartDate = formatDate(study.startDate);
    const formattedEndDate = formatDate(study.endDate);
    const formattedStudyPeriod = `${formattedStartDate}-${formattedEndDate}`;

    // 디데이 계산
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

    setStudyPeriod(formattedStudyPeriod);
    setCategoryTag(categories[study.category]);
    setContactTag(contact[study.contact]);
    setMeetingTag(meeting[study.meeting]);
    setPeople(study.people);
    setUserLiked(study.heart);
  }, [
    study.category,
    study.contact,
    study.meeting,
    study.people,
    study.heart,
    study.startDate,
    study.endDate,
    study.deadLine,
  ]);

  // 좋아요 API
  const handleEmptyHeartClick = () => {
    if (loginState) {
      likePost(postIdAsNumber).then((res) => {
        console.log(res);
      });
      setTimeout(() => {
        window.location.reload(); // 새로고침
      }, 500);
    } else {
      alert('로그인 후 이용 가능합니다.');
    }

    return;
  };

  // 좋아요 취소 API
  const handleFullHeartClick = () => {
    deleteLikePost(postIdAsNumber).then((res) => {
      console.log(res);
    });
    setTimeout(() => {
      window.location.reload(); // 새로고침
    }, 500);
    return;
  };

  return (
    <Container>
      <ListWrapper>
        <DetailList>
          <ListItem>
            <Title>카테고리</Title>
            <TagWrapper>
              <Tag src={categoryTag} alt="tag" />
            </TagWrapper>
          </ListItem>
          <ListItem>
            <Title>모집 마감</Title>
            <Info>{dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`}</Info>
          </ListItem>
          <ListItem className="last">
            <Title>모집 인원</Title>
            <Info>{people}</Info>
          </ListItem>
        </DetailList>

        <DetailList>
          <ListItem>
            <Title>지원 방법</Title>
            <TagWrapper>
              <Tag src={contactTag} alt="tag" />
            </TagWrapper>
          </ListItem>
          <ListItem>
            <Title>스터디 기간</Title>
            <Info>{studyPeriod}</Info>
          </ListItem>
          <ListItem className="last">
            <Title>대면/비대면</Title>
            <TagWrapper>
              <Tag src={meetingTag} alt="tag" />
            </TagWrapper>
          </ListItem>
        </DetailList>
      </ListWrapper>
      <UserLikedWrapper>
        {userLiked ? (
          <HeartIcon onClick={handleFullHeartClick} />
        ) : (
          <EmptyHeartIcon onClick={handleEmptyHeartClick} />
        )}
      </UserLikedWrapper>
    </Container>
  );
};

export default DetailBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailList = styled.ol``;

const ListItem = styled.li`
  display: flex;
  margin-bottom: 50px;
  font-size: 18px;

  &.last {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-size: 18px;
  margin-right: 35px;
  white-space: nowrap;
`;

const Info = styled.span`
  font-weight: bold;
`;

const TagWrapper = styled.div`
  position: relative;
`;

const Tag = styled.img`
  width: 100px;
  position: absolute;
  top: -6px;
`;

const UserLikedWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 5px;
`;

const HeartIcon = styled(IoMdHeart)`
  font-size: 30px;
  color: var(--navy);
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const EmptyHeartIcon = styled(IoMdHeartEmpty)`
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: var(--navy);
  }
`;
