import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Dropdown from './Dropdown';
import { Border } from 'components/_common/pageLayout';
import { CategoryAtom, MeetingAtom, ContactAtom } from '../../recoil/Tags';

import { submitForm } from 'api/create';

const initialDate = {
  year: 0,
  month: 0,
  day: 0,
};

const Form = () => {
  const categoryTag = useRecoilValue(CategoryAtom);
  const meetingTag = useRecoilValue(MeetingAtom);
  const contactTag = useRecoilValue(ContactAtom);
  const [title, setTitle] = useState('');
  const [people, setPeople] = useState(0);
  const [deadline, setDeadline] = useState(initialDate);
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(initialDate);
  const [formattedDeadline, setFormattedDeadline] = useState('');
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const peopleAsNum = parseInt(e.target.value);
    setPeople(peopleAsNum);
  };

  // 날짜 저장 공통 함수
  const handleDateChange = (
    className: string,
    value: string,
    setDateFunc: any,
  ) => {
    setDateFunc((prevState: []) => ({
      ...prevState,
      [className]: parseInt(value),
    }));
  };

  // 모집 마감일 저장
  const onDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = e.target;
    if (className.includes('year')) {
      handleDateChange('year', value, setDeadline);
    } else if (className.includes('month')) {
      handleDateChange('month', value, setDeadline);
    } else if (className.includes('day')) {
      handleDateChange('day', value, setDeadline);
    }
  };

  // 시작 날짜 저장
  const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = e.target;
    if (className.includes('year')) {
      handleDateChange('year', value, setStartDate);
    } else if (className.includes('month')) {
      handleDateChange('month', value, setStartDate);
    } else if (className.includes('day')) {
      handleDateChange('day', value, setStartDate);
    }
  };

  // 끝 날짜 저장
  const onEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = e.target;
    if (className.includes('year')) {
      handleDateChange('year', value, setEndDate);
    } else if (className.includes('month')) {
      handleDateChange('month', value, setEndDate);
    } else if (className.includes('day')) {
      handleDateChange('day', value, setEndDate);
    }
  };

  // 날짜 형식 변환
  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
      2,
      '0',
    )} 00:00:00`;
  };
  useEffect(() => {
    const formattedDeadline = formatDate(
      deadline.year,
      deadline.month,
      deadline.day,
    );
    const formattedStartDate = formatDate(
      startDate.year,
      startDate.month,
      startDate.day,
    );
    const formattedEndDate = formatDate(
      endDate.year,
      endDate.month,
      endDate.day,
    );

    setFormattedDeadline(formattedDeadline);
    setFormattedStartDate(formattedStartDate);
    setFormattedEndDate(formattedEndDate);
  }, [deadline, startDate, endDate]);

  // 글 작성 내용 저장
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // 스터디 작성 내용 POST API
  const handleSubmit = () => {
    const formData = {
      title: title,
      content: content,
      deadLine: formattedDeadline,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      people: people,
      category: categoryTag.selectedTag,
      meeting: meetingTag.selectedTag,
      contact: contactTag.selectedTag,
    };

    submitForm(formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <Wrapper>
      <Title
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
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
                <DateInput
                  type="number"
                  className="year"
                  onChange={onDeadlineChange}
                  min="2023"
                />
                <p>년</p>
                <DateInput
                  type="number"
                  className="month"
                  onChange={onDeadlineChange}
                  min="1"
                  max="12"
                />
                <p>월</p>
                <DateInput
                  type="number"
                  className="day"
                  onChange={onDeadlineChange}
                  min="1"
                  max="31"
                />
                <p>일</p>
              </DateSelect>
            </InputListItem>
            <InputListItem>
              <InputListTitle className="short">스터디 기간</InputListTitle>
              <DateSelect>
                <DateInput
                  type="number"
                  className="year start"
                  onChange={onStartDateChange}
                  min="2023"
                />
                <p>년</p>
                <DateInput
                  type="number"
                  className="month start"
                  onChange={onStartDateChange}
                  min="1"
                  max="12"
                />
                <p>월</p>
                <DateInput
                  type="number"
                  className="day start"
                  onChange={onStartDateChange}
                  min="1"
                  max="31"
                />
                <p>일</p>
                <p> ~ </p>
                <DateInput
                  type="number"
                  className="year end"
                  onChange={onEndDateChange}
                  min="2023"
                />
                <p>년</p>
                <DateInput
                  type="number"
                  className="month end"
                  onChange={onEndDateChange}
                  min="1"
                  max="12"
                />
                <p>월</p>
                <DateInput
                  type="number"
                  className="day end"
                  onChange={onEndDateChange}
                  min="1"
                  max="31"
                />
                <p>일</p>
              </DateSelect>
            </InputListItem>
            <InputListItem className="last">
              <InputListTitle className="default">모집 인원</InputListTitle>
              <NumInput type="number" onChange={onChangePeople} min="1" />
              <p>명</p>
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
      <TextInput
        placeholder="내용을 입력하세요"
        onChange={onChangeContent}
        wrap="hard"
      />
      <Footer>
        <CompleteButton type="submit" onClick={handleSubmit}>
          완료
        </CompleteButton>
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
  width: 85%;
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

  p {
    margin-right: 8px;
  }
`;

const DateInput = styled.input`
  background-color: var(--gray);
  border-radius: 5px;
  height: 26px;
  font-size: 18px;
  text-align: center;

  &.year {
    width: 60px;
  }

  &.month,
  &.day {
    width: 40px;
  }
`;

const NumInput = styled.input`
  background-color: var(--gray);
  border-radius: 5px;
  height: 26px;
  width: 40px;
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
  resize: none;

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
  height: 38px;
  border: 2px solid var(--navy);
  border-radius: 20px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out color 200ms ease-in-out;

  &:hover {
    background-color: var(--navy);
    color: white;
  }
`;
