import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Header from 'components/_common/Header';
import { Container, Body, Border } from 'components/_common/pageLayout';
import DetailHeader from 'components/detailpage/DetailHeader';
import DetailBox from 'components/detailpage/DetailBox';
import DetailText from 'components/detailpage/DetailText';
import data from '../components/mainpage/dummy-data.json';
import BtnGroup from 'components/detailpage/BtnGroup';

const DetailPage = () => {
  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;
  console.log(data[postIdAsNumber - 1]);

  return (
    <Container>
      <Header />
      <DetailHeader study={data[postIdAsNumber - 1]} />
      <Border />
      <Body>
        <DetailBox study={data[postIdAsNumber - 1]} />
      </Body>
      <Border />
      <TextWrapper>
        <DetailText study={data[postIdAsNumber - 1]} />
        {/* 사용자가 작성한 글일때만 보이게 하기 */}
        <BtnGroup />
      </TextWrapper>
    </Container>
  );
};

export default DetailPage;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;
