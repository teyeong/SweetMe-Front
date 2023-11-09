import styled from 'styled-components';

import { Study } from 'components/_common/props';

const DetailText = ({ study }: { study: Study }) => {
  return (
    <Container>
      <Text>{study.text}</Text>
    </Container>
  );
};

export default DetailText;

const Container = styled.div`
  width: 100%;
  padding: 30px;
  font-size: 18px;
  text-align: left;
`;

const Text = styled.p`
  margin-bottom: 8px;
  white-space: pre-wrap;
`;
