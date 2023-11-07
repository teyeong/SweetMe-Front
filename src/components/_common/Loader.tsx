import styled from 'styled-components';

const Loader = () => {
  return (
    <Div>
      <LoaderContainer></LoaderContainer>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderContainer = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(135, 133, 162, 0.2);
  border-top: 5px solid #8785a2;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
`;

export default Loader;
