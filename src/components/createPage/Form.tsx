import styled from 'styled-components';
import { useState } from 'react';

import Dropdown from './Dropdown';
import { Border } from 'components/_common/pageLayout';

const Form = () => {
  return (
    <Wrapper>
      <Title type="text" placeholder="제목을 입력하세요"></Title>
      <Border />
      <MainWrapper>
        <MainLeft>
          <InputList>
            <InputListItem>
              <InputListTitle className="default">카테고리</InputListTitle>
              <Dropdown type="category" />
            </InputListItem>
            <InputListItem>
              <InputListTitle className="default">모집 마감</InputListTitle>
              <DateSelect>
                <DateInput type="number" className="year " />년
                <DateInput type="number" className="month " />월
                <DateInput type="number" className="day " />일
              </DateSelect>
            </InputListItem>
            <InputListItem>
              <InputListTitle className="short">스터디 기간</InputListTitle>
              <DateSelect>
                <DateInput type="number" className="year start" />년
                <DateInput type="number" className="month start" />월
                <DateInput type="number" className="day start" />일
                <span> ~ </span>
                <DateInput type="number" className="year end" />년
                <DateInput type="number" className="month end" />월
                <DateInput type="number" className="day end" />일
              </DateSelect>
            </InputListItem>
            <InputListItem className="last">
              <InputListTitle className="default">모집 인원</InputListTitle>
              <NumInput type="number" />명
            </InputListItem>
          </InputList>
        </MainLeft>

        <MainRight>
          <InputList>
            <InputListItem>
              <InputListTitle className="default">지원 방법</InputListTitle>
              <Dropdown type="contact" />
            </InputListItem>
            <InputListItem>
              <InputListTitle className="short">대면/비대면</InputListTitle>
              <Dropdown type="meeting" />
            </InputListItem>
          </InputList>
        </MainRight>
      </MainWrapper>
      <Border />
      <TextInput placeholder="내용을 입력하세요"></TextInput>
      <Footer>
        <CompleteButton type="submit">완료</CompleteButton>
      </Footer>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.input`
  width: 300px;
  border-bottom: 1px #d9d9d9 solid;
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 80px;

  &:focus {
    border-color: pink;
  }
`;

const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputList = styled.ol``;

const InputListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  font-size: 18px;

  &.last {
    margin-bottom: 0;
  }
`;

const InputListTitle = styled.li`
  white-space: nowrap;

  &.default {
    margin-right: 35px;
  }

  &.short {
    margin-right: 20px;
  }
`;

const DateSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

const DateInput = styled.input`
  background-color: var(--gray);
  border-radius: 5px;
  height: 24px;
  font-size: 18px;
  text-align: center;

  &.year {
    width: 50px;
  }

  &.month,
  &.day {
    width: 30px;
  }
`;

const NumInput = styled.input`
  background-color: var(--gray);
  border-radius: 5px;
  height: 24px;
  width: 30px;
  font-size: 18px;
  text-align: center;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px;
  font-size: 18px;
  text-align: left;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const CompleteButton = styled.button`
  width: 100px;
  height: 35px;
  border: 1px #d9d9d9 solid;
  border-radius: 25px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out color 200ms ease-in-out;

  &:hover {
    background-color: var(--navy);
    color: white;
    border-color: white;
  }
`;
