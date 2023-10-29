import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

import logo from '../../assets/logo.svg';
import defaultProfile from '../../assets/defaultProfile.jpg';

const Header = () => {
  // 로그인 여부 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  // 카카오 로그인 여부 파악 함수 작성 예정

  const handleCreateClick = () => {
    // 로그인된 상태인 경우에만 라우팅 코드 추가 예정
    navigate('/create');
  };

  const handleLoginClick = () => {
    // 모달 추가 예정
  };

  // 로고 클릭 시 새로고침
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <>
      <Div>
        <div className="div"></div>
        <Logo src={logo} onClick={handleLogoClick} />
        <BtnContainer>
          {isLoggedIn ? (
            <Profile href="/mypage">
              {/* <Img /> 사용자 프로필 이미지 src로 받아서 사용 */}
            </Profile>
          ) : (
            <>
              <Btn onClick={handleCreateClick}>모집하기</Btn>
              <Btn onClick={handleLoginClick}>로그인</Btn>
            </>
          )}
        </BtnContainer>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 73vw;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 800px) {
    width: 80vw;
  }
  .div {
    width: 180px;
    margin-left: 15px;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 250px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 160px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Profile = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${defaultProfile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

const BtnContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  @media (max-width: 800px) {
    margin: 0;
    width: 130px;
  }
`;

const Btn = styled.button`
  font-family: 'suite';
  font-size: 18px;
  border: none;
  background-color: white;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

export default Header;
