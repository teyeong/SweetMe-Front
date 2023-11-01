import React from 'react';

import Header from 'components/_common/Header';
import Form from 'components/createpage/Form';
import { Container, Body } from 'components/_common/pageLayout';

const EditPage = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Form></Form>
      </Body>
    </Container>
  );
};

export default EditPage;
