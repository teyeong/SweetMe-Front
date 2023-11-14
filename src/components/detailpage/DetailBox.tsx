import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { Study } from 'components/_common/props';
import { categories, contact, meeting } from 'components/_common/tags';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

const DetailBox = ({ study }: { study: Study }) => {
  const [categoryTag, setCategoryTag] = useState('');
  const [contactTag, setContactTag] = useState('');
  const [meetingTag, setMeetingTag] = useState('');
  const [userLiked, setUserLiked] = useState(false);

  // 카테고리 태그 설정
  useEffect(() => {
    setCategoryTag(categories[study.category]);
  }, [study.category]);

  // 연락 태그 설정
  useEffect(() => {
    setContactTag(contact[study.contact]);
  }, [study.contact]);

  // 대면/비대면 태그 설정
  useEffect(() => {
    setMeetingTag(meeting[study.meeting]);
  }, [study.meeting]);

  // 좋아요 여부 설정
  useEffect(() => {
    setUserLiked(study.userLiked);
  }, [study.userLiked]);

  const handleHeartClick = () => {
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
            <Info>D-7</Info>
          </ListItem>
          <ListItem className="last">
            <Title>모집 인원</Title>
            <Info>3명</Info>
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
            <Info>2023.09.24-2023.12.20</Info>
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
        {study.userLiked ? (
          <HeartIcon onClick={handleHeartClick} />
        ) : (
          <EmptyHeartIcon onClick={handleHeartClick}></EmptyHeartIcon>
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
  &:hover {
    opacity: 0.6;
  }
`;

const EmptyHeartIcon = styled(IoMdHeartEmpty)`
  font-size: 30px;
`;
