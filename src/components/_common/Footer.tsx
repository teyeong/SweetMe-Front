import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Div>
        <Copyright>© Sweetie</Copyright>
        <div>
          <Text>이용약관</Text>
          <Text>개인정보처리방침</Text>
          <Text>서비스 소개</Text>
        </div>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  div {
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    width: 250px;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  padding-left: 40px;
`;

const Text = styled.p`
  font-size: 13px;
`;

export default Footer;
