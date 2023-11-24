import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import styled from 'styled-components';
import StudyDetail from './StudyDetail';
import Loader from '../_common/Loader';
import { getPromo } from 'api/study';
import { Study } from 'components/_common/props';

const AdList = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // slides를 담는 컨테이너를 저장하는 ref
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // interval을 저장하는 ref
  const [current, setCurrent] = useState(1); // 현재 위치 상태
  const [translateX, setTranslateX] = useState(330); // X축 이동으로 위치
  const [itemCnt, setItemCnt] = useState(4); // 아이템 개수
  const [isTransiting, setIsTransiting] = useState(false); // 버튼이 클릭된 상태인지 확인
  const [isLoading, setIsLoading] = useState<boolean>(false); // 아이템 가져오기 로딩
  const [data, setData] = useState<Study[]>([]); // 홍보 중인 데이터

  // 데이터 불러오기 api 호출
  const getData = async () => {
    const res = await getPromo();
    setData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  // 화면 너비에 따른 아이템 개수 설정 useEffect
  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (data.length < 4) {
      setItemCnt(4);
      return;
    }
    if (windowWidth <= 660) {
      setItemCnt(1);
    } else if (windowWidth <= 990) {
      setItemCnt(2);
    } else if (windowWidth <= 1320) {
      setItemCnt(3);
    } else {
      setItemCnt(4);
    }
  }, [window.innerWidth]);

  // 데이터 설정 useMemo
  const slides = useMemo(() => {
    let items;
    if (data.length > 3) {
      items = data.map((study, index) => (
        <StudyDetail key={index} study={study} />
      ));
      return [
        <StudyDetail key={data.length + 1} study={data[data.length - 1]} />,
        ...items,
        <StudyDetail key={data.length + 2} study={data[0]} />,
        <StudyDetail key={data.length + 3} study={data[1]} />,
        <StudyDetail key={data.length + 4} study={data[2]} />,
        <StudyDetail key={data.length + 5} study={data[3]} />,
      ];
    } else if (data.length <= 3 && data.length > 1) {
      items = data.map((study, index) => (
        <StudyDetail key={index} study={study} />
      ));
      setCurrent(0);
      setTranslateX(0);
      return [...items];
    }
    return <StudyDetail study={data[0]} />;
  }, [data]);

  // 레이아웃
  useLayoutEffect(() => {
    if (containerRef.current) {
      setTranslateX((containerRef.current.clientWidth * current) / itemCnt);
    }
  }, [itemCnt]);

  // isTransiting을 false로 바꾸는 함수
  const handleTransitionEnd = () => setIsTransiting(false);

  // transition이 끝났을 때 isTransiting을 false로 바꿈
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener(
        'transitionend',
        handleTransitionEnd,
      );
      return () => {
        containerRef.current?.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        );
      };
    }
  }, [containerRef.current]);

  // 버튼 클릭 핸들러
  const actionHandler = (mode: string) => {
    if (data.length <= 3) {
      // 길이가 3보다 작거나 같은 경우 버튼 클릭 금지
      return;
    }
    if (containerRef.current) {
      containerRef.current.style.transitionDuration = '1s';

      // 현재 버튼 눌린 상태임을 표시
      setIsTransiting(true);

      // 왼쪽 버튼 클릭
      if (mode === 'prev') {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(data.length);
        } else {
          setTranslateX(
            (containerRef.current.clientWidth * (current - 1)) / itemCnt,
          );
          setCurrent((prev) => --prev);
        }
      }
      // 오른쪽 버튼 클릭
      else if (mode === 'next') {
        if (current >= data.length) {
          setTranslateX(
            (containerRef.current.clientWidth * (data.length + 1)) / itemCnt,
          );
          setCurrent(1);
        } else {
          setTranslateX(
            (containerRef.current.clientWidth * (current + 1)) / itemCnt,
          );
          setCurrent((prev) => ++prev);
        }
      }
    }
  };

  // 무한 캐러셀 효과
  useEffect(() => {
    const transitionEnd = () => {
      if (containerRef.current) {
        if (current <= 1) {
          containerRef.current.style.transitionDuration = '0ms';
          setTranslateX((containerRef.current.clientWidth * current) / itemCnt);
        }

        if (current >= data.length) {
          containerRef.current.style.transitionDuration = '0ms';
          setTranslateX(
            (containerRef.current.clientWidth * data.length) / itemCnt,
          );
        }
      }
    };

    document.addEventListener('transitionend', transitionEnd);

    return () => {
      document.removeEventListener('transitionend', transitionEnd);
    };
  }, [current]);

  // 5초마다 자동으로 넘어감
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => actionHandler('next'), 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  return (
    <>
      {data.length > 0 && (
        <Div>
          <BtnDiv>
            <LeftBtn
              onClick={() => {
                // trasition이 끝날 때까지 버튼 클릭 금지
                if (!isTransiting) {
                  actionHandler('prev');
                }
              }}
            />
            <RightBtn
              onClick={() => {
                // trasition이 끝날 때까지 버튼 클릭 금지
                if (!isTransiting) {
                  actionHandler('next');
                }
              }}
            />
          </BtnDiv>
          {isLoading ? (
            <Loader />
          ) : (
            <ItemDiv>
              <div
                ref={containerRef}
                style={{
                  transform: `translateX(${-translateX}px)`,
                }}
              >
                {slides}
              </div>
            </ItemDiv>
          )}
        </Div>
      )}
    </>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 250px;
  background-color: #ffe2e2;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const BtnDiv = styled.div`
  width: 1320px;
  display: flex;
  margin: auto;
  margin-bottom: 0;
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

const LeftBtn = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 25px solid #8785a2;
  margin-right: 5px;
  cursor: pointer;
`;

const RightBtn = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid #8785a2;
  margin-left: 5px;
  cursor: pointer;
`;

const ItemDiv = styled.div`
  width: 1320px;
  background-color: #ffe2e2;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  @media (max-width: 1320px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 660px;
  }
  @media (max-width: 660px) {
    width: 330px;
  }

  div {
    display: flex;
  }
`;

export default AdList;
