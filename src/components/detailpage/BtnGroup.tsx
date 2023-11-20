import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import DeleteModal from './DeleteModal';

import { changeRecruit, deletePost } from 'api/studydetail';

const BtnGroup = () => {
  const [activeBtn, setActiveBtn] = useState(''); // 한번에 하나의 버튼만 활성화

  const [showPaymentModal, setShowPaymentModal] = useState(false); // 결제 모달
  const [showDeleteModal, setShowDeleteModal] = useState(false); // 삭제 모달
  const [isDelete, setIsDelete] = useState(false); // 삭제 여부 확인

  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;
  const navigate = useNavigate();

  // 수정 버튼 클릭 -> 수정 페이지로 이동
  const handleEdit = () => {
    setActiveBtn('edit');
    navigate(`/edit/${postId}`);
  };

  // 삭제 버튼 클릭 -> 삭제 모달 팝업
  const handleDelete = () => {
    if (activeBtn === 'delete') {
      setActiveBtn('');
      setShowDeleteModal(false);
    } else {
      setActiveBtn('delete');
      setShowPaymentModal(false); // 한 번에 하나의 모달창만 활성화
      setShowDeleteModal(true);
    }
  };

  // 삭제 모달 삭제/확인 버튼 선택 시
  useEffect(() => {
    if (isDelete) {
      // 삭제 api
      deletePost(postIdAsNumber).then((res) => {
        console.log('삭제완료');
        alert('삭제되었습니다.');
      });
      navigate('/');
    }
  }, [isDelete]);

  // 홍보 버튼 클릭 -> 결제 모달 팝업
  const handlePayment = () => {
    if (activeBtn === 'payment') {
      setActiveBtn('');
      setShowPaymentModal(false);
    } else {
      setActiveBtn('payment');
      setShowDeleteModal(false); // 한 번에 하나의 모달창만 활성화
      setShowPaymentModal(true);
    }
  };

  // 모집 완료 버튼 클릭 -> 모집 완료 PATCH API
  const handleRecruit = async () => {
    if (activeBtn === 'recruit') {
      setActiveBtn('');
    } else {
      setActiveBtn('recruit');
    }
    changeRecruit(postIdAsNumber).then((res) => {
      console.log(res);
      window.location.reload(); // 새로고침
    });
  };

  return (
    <Wrapper>
      <Btn
        onClick={handleEdit}
        className={activeBtn === 'edit' ? 'isActive' : ''}
      >
        수정
      </Btn>
      <BtnWrapper>
        <Btn
          onClick={handleDelete}
          className={activeBtn === 'delete' ? 'isActive' : ''}
        >
          삭제
        </Btn>
        {showDeleteModal ? <DeleteModal setIsDelete={setIsDelete} /> : ''}
      </BtnWrapper>
      <BtnWrapper>
        <Btn
          onClick={handlePayment}
          className={activeBtn === 'payment' ? 'isActive' : ''}
        >
          홍보
        </Btn>
        {showPaymentModal ? <PaymentModal /> : ''}
      </BtnWrapper>
      <Btn
        onClick={handleRecruit}
        className={activeBtn === 'recruit' ? 'isActive' : ''}
      >
        모집 완료
      </Btn>
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
