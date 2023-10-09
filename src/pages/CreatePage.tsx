import styled from 'styled-components';

import Header from 'components/_common/Header';
import Form from 'components/createPage/Form';

const CreatePage = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Form></Form>
      </Body>
    </Container>
  );
};

export default CreatePage;

const Container = styled.div`
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: calc(100% - 180px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
