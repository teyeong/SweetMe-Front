import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Study } from 'components/_common/props';
import { recruitment } from 'components/_common/tags';
import { TagWrapper, Tag } from './tagLayout';
import defaultProfile from '../../assets/defaultProfile.jpg';

const DetailHeader = ({ study }: { study: Study }) => {
  const [recruitmentTag, setRecruitmentTag] = useState<string>('');

  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate(-1);
  };

  // 모집 여부 태그 설정
  useEffect(() => {
    if (study.recruitment === true) {
      setRecruitmentTag(recruitment['True']);
    } else if (study.recruitment === false) {
      setRecruitmentTag(recruitment['False']);
    }
  }, [study.recruitment]);

  return (
    <Wrapper>
      <TitleWrapper>
        <ArrowIcon onClick={handleIconClick} />
        <Title>{study.title}</Title>
      </TitleWrapper>
      <TopWrapper>
        <TagWrapper>
          <Tag src={recruitmentTag} />
        </TagWrapper>
        <CreateInfoWrapper>
          <CreaterInfoWrapper>
            <CreaterProfile>
              {/* <img src="유저 프로필" alt="" /> */}
            </CreaterProfile>
            <CreaterName>스위티</CreaterName>
          </CreaterInfoWrapper>
          <CreateDate>2023.09.17</CreateDate>
        </CreateInfoWrapper>
      </TopWrapper>
    </Wrapper>
  );
};

export default DetailHeader;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  &.arrrowIcon {
    cursor: pointer;
  }
`;

const ArrowIcon = styled(AiOutlineArrowLeft)`
  font-size: 27px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CreateInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreaterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const CreaterProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  background-image: url(${defaultProfile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CreaterName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const CreateDate = styled.span`
  font-size: 13px;
`;
