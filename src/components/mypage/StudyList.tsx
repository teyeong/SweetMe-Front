import { useEffect, useState } from 'react';
import styled from 'styled-components';

//import data from '../mainpage/dummy-data.json';
import StudyDetail from 'components/mainpage/StudyDetail';
import book from '../../assets/mypage/book-icon.svg';
import { Study } from 'components/_common/props';
import Loader from 'components/_common/Loader';
import { getLikedPosts, getMyPosts } from 'api/study';

type StudyListProps = {
  type: string;
};

const StudyList = ({ type }: StudyListProps) => {
  const [title, setTitle] = useState(''); // 작성, 좋아요 중 하나

  const [data, setData] = useState<Study[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // 데이터 가져오기 로딩
  const [itemList, setItemList] = useState<Study[]>([]); // 데이터 24개씩 자르기
  const [isLeft, setIsLeft] = useState<boolean>(false); // 남은 데이터 유무
  const [index, setIndex] = useState<number>(24); // 자른 데이터 인덱스

  const getPostData = async () => {
    const res = await getMyPosts();
    if (res?.status === 200) {
      setData(res.data);
      setItemList(res.data.slice(0, 24));
    }
  };

  const getLikeData = async () => {
    const res = await getLikedPosts();
    if (res?.status === 200) {
      setData(res.data);
      setItemList(res.data.slice(0, 24));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (type === 'POST') {
      setTitle('작성');
      // 작성 글 목록 불러오기 api
      getPostData();
    } else if (type === 'LIKE') {
      setTitle('좋아요');
      // 좋아요 글 목록 불러오기 api
      getLikeData();
    }
    setIsLoading(false);
  }, [type]);

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

  return (
    <Div>
      <TitleDiv>
        <img src={book} />
        <p>{title}한 글 목록</p>
      </TitleDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDiv>
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
  margin-left: 270px;
  padding: 20px;
`;

const TitleDiv = styled.div`
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
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const MoreBtn = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius: 50%;
  background-color: rgba(135, 133, 162, 0.5);
  cursor: pointer;
`;

export default StudyList;
