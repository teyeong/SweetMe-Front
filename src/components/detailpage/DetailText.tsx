import styled from 'styled-components';

const DetailText = ({ content }: { content: string }) => {
  return (
    <Container>
      <Text>{content}</Text>
    </Container>
  );
};

export default DetailText;

const Container = styled.div`
  width: 100%;
  padding: 30px;
  font-size: 20px;
  text-align: left;
`;

const Text = styled.p`
  margin-bottom: 8px;
  white-space: pre-wrap;
`;
