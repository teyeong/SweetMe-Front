import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from 'components/_common/Header';
import Form from 'components/createpage/Form';
import { Container } from 'components/_common/pageLayout';
import { Study } from 'components/_common/props';
import { defaultStudy } from 'components/_common/props';

import { getStudyDetail } from 'api/studydetail';

const EditPage = () => {
  const [studyDetail, setStudyDetail] = useState<Study>(defaultStudy);

  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;

  useEffect(() => {
    getStudyDetail(postIdAsNumber).then((res) => {
      setStudyDetail(res?.data);
    });
  }, [postIdAsNumber]);

  return (
    <Container>
      <Header />
      <Form edit={studyDetail} />
    </Container>
  );
};

export default EditPage;
