import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import DeleteModal from './DeleteModal';

import { changeRecruit, deletePost } from 'api/studydetail';

const BtnGroup = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isBtnActive, setBtnActive] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;
  const navigate = useNavigate();

  // 결제 모달
  const handlePayment = () => {
    setShowPaymentModal(!showPaymentModal);
    setBtnActive(!isBtnActive);
  };

  // 수정 페이지로 이동
  const handleEdit = () => {
    navigate(`/edit/${postId}`);
  };

  // 삭제 모달
  const handleDelete = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  // 삭제 모달 삭제/확인 버튼 선택 시
  useEffect(() => {
    if (isDelete) {
      // 삭제 api
      deletePost(postIdAsNumber).then((res) => {
        console.log(res);
        alert('삭제되었습니다.');
      });
      navigate('/');
    } else {
      // check 필요
      setShowDeleteModal(false);
    }
  }, [isDelete]);

  // 모집 완료 api
  const handleRecruit = async () => {
    changeRecruit(postIdAsNumber).then((res) => {
      console.log(res);
    });
  };

  return (
    <Wrapper>
      <Btn onClick={handleEdit}>수정</Btn>
      <BtnWrapper>
        <Btn onClick={handleDelete}>삭제</Btn>
        {showDeleteModal ? <DeleteModal setIsDelete={setIsDelete} /> : ''}
      </BtnWrapper>
      <BtnWrapper>
        <Btn onClick={handlePayment} className={isBtnActive ? 'isActive' : ''}>
          홍보
        </Btn>
        {showPaymentModal ? <PaymentModal /> : ''}
      </BtnWrapper>
      <Btn onClick={handleRecruit}>모집 완료</Btn>
    </Wrapper>
  );
};

export default BtnGroup;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

const Btn = styled.div`
  width: 100px;
  height: 38px;
  border: 2px solid var(--navy);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 200ms ease-in-out,
    color 200ms ease-in-out;

  &:hover {
    background-color: var(--navy);
    color: white;
  }

  &.isActive {
    background-color: var(--navy);
    color: white;
  }
`;

const BtnWrapper = styled.div`
  position: relative;
`;
