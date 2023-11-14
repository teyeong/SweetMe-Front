import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import bigLogo from '../../assets/big-logo.svg';
import { UserInfoAtom } from 'recoil/User';

const Welcome = () => {
  const userInfo = useRecoilValue(UserInfoAtom);
  return (
    <Div>
      <p>환영합니다. {userInfo.nickname} 님</p>
    </Div>
  );
};

const Div = styled.div`
  margin-left: 270px;
  padding: 20px 20px 20px 30px;
  height: calc(100vh - 160px);
  width: calc(100vw - 270px);
  position: fixed;
  p {
    font-size: 26px;
  }
  background-image: url(${bigLogo});
  background-repeat: no-repeat;
  background-position: center center;
`;

export default Welcome;
