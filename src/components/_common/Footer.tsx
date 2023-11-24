import styled from 'styled-components';

import githubMark from '../../assets/github-mark.png';

const Footer = () => {
  return (
    <>
      <Div>
        <Wrapper>
          <Copyright>© Sweetie</Copyright>
          <a
            href="https://github.com/SweetMe-Sweetie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={githubMark} />
          </a>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 160px;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  width: 73vw;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
`;

const Copyright = styled.p`
  font-size: 15px;
`;

export default Footer;
