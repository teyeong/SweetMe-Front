import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import OptionMenu from './OptionMenu';
import { categories, meeting, contact } from 'components/_common/tags';
import { CategoryAtom, MeetingAtom, ContactAtom } from '../../recoil/Tags';

interface DropdownProps {
  type: string;
  selectedTag?: string;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
}

interface TagObject {
  [key: string]: string;
}

const Dropdown = (props: DropdownProps) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // 카테고리 선택창
  const [isContactOpen, setIsContactOpen] = useState(false); // 지원 방법 선택창
  const [isMeetingOpen, setIsMeetingOpen] = useState(false); // 대면/비대면 선택창

  const categoryInfo = useRecoilValue(CategoryAtom); // 카테고리 태그 정보 가져오기
  const meetingInfo = useRecoilValue(MeetingAtom); // 지원 방법 태그 정보 가져오기
  const contactInfo = useRecoilValue(ContactAtom); // 대면/비대면 태그 정보 가져오기

  const handleDropdownClick = (type: string) => {
    if (type === 'category') {
      setIsContactOpen(false);
      setIsMeetingOpen(false);
      setIsCategoryOpen(!isCategoryOpen);
    } else if (type === 'contact') {
      setIsContactOpen(!isContactOpen);
    } else if (type === 'meeting') {
      setIsMeetingOpen(!isMeetingOpen);
    }
  };

  // 선택된 태그 이미지 화면에 나타내기
  const getSelectedTagImg = () => {
    // 태그 선택 후 형식
    const getImageInfo = (object: TagObject, selectedTag: string) => {
      return (
        <SelectedTagWrapper>
          <i className="fas fa-chevron-down arrow-down" />
          <SelectedTag src={object[selectedTag]} />
        </SelectedTagWrapper>
      );
    };

    // 태그 선택 전 기본 형식
    const getDefault = () => {
      return (
        <span>
          <i className="fas fa-chevron-down arrow-down" />
          <span>선택</span>
        </span>
      );
    };

    let content;

    switch (props.type) {
      case 'category':
        content = categoryInfo.isSelected
          ? getImageInfo(categories, categoryInfo.selectedTag)
          : getDefault();
        break;
      case 'contact':
        content = contactInfo.isSelected
          ? getImageInfo(contact, contactInfo.selectedTag)
          : getDefault();
        break;
      case 'meeting':
        content = meetingInfo.isSelected
          ? getImageInfo(meeting, meetingInfo.selectedTag)
          : getDefault();
        break;
      default:
        content = '';
    }
    return content;
  };

  return (
    <DropdownWrapper>
      <DropdownSelect
        type="button"
        onClick={() => handleDropdownClick(props.type)}
        className={
          props.type === 'category'
            ? isCategoryOpen
              ? 'isOpen'
              : ''
            : props.type === 'contact'
            ? isContactOpen
              ? 'isOpen'
              : ''
            : isMeetingOpen
            ? 'isOpen'
            : ''
        }
      >
        {getSelectedTagImg()}
      </DropdownSelect>
      {props.type === 'category' && isCategoryOpen && (
        <OptionMenu type={props.type} />
      )}
      {props.type === 'contact' && isContactOpen && (
        <OptionMenu type={props.type} />
      )}
      {props.type === 'meeting' && isMeetingOpen && (
        <OptionMenu type={props.type} />
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownSelect = styled.button`
  background-color: var(--gray);
  padding: 7px 20px;
  border-radius: 20px;
  font-size: 18px;
  white-space: nowrap;
  transition: opacity 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &.isOpen {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
    opacity: 1;
  }

  .arrow-down {
    font-size: 12px;
    margin-right: 7px;
    color: #948e8e;
  }

  .arrow-up {
    transform: rotate(180deg);
  }
`;

const SelectedTagWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 100ms ease-in-out;
  cursor: pointer;
`;

const SelectedTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
