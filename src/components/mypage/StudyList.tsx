import { useEffect, useState } from 'react';
import styled from 'styled-components';

import data from '../mainpage/dummy-data.json';
import StudyDetail from 'components/mainpage/StudyDetail';
import book from '../../assets/mypage/book-icon.svg';

type StudyListProps = {
  type: string;
};

const StudyList = ({ type }: StudyListProps) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (type === 'POST') {
      setTitle('작성');
      // 작성 글 목록 불러오기 api
    } else if (type === 'LIKE') {
      setTitle('좋아요');
      // 좋아요 글 목록 불러오기 api
    }
  }, [type]);
  return (
    <Div>
      <TitleDiv>
        <img src={book} />
        <p>{title}한 글 목록</p>
      </TitleDiv>
      <ItemDiv>
        {data.map((study) => {
          return <StudyDetail key={study.postId} study={study} />;
        })}
      </ItemDiv>
    </Div>
  );
};

const Div = styled.div`
  margin-left: 270px;
  padding: 20px;
`;

const TitleDiv = styled.p`
  display: flex;
  img {
    width: 32px;
    margin-right: 25px;
  }
  p {
    font-size: 26px;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export default StudyList;
