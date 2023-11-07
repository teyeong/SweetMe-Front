import styled from 'styled-components';
import { useState } from 'react';

import OptionMenu from './OptionMenu';

import { categories } from 'components/_common/tags';

interface DropdownProps {
  type?: string;
  selectedTag?: string;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = (props: DropdownProps) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [isTagSelected, setIsTagSelected] = useState(true);

  const handleDropdownClick = (type: string) => {
    if (type === 'category') {
      setIsCategoryOpen(!isCategoryOpen);
    } else if (type === 'contact') {
      setIsContactOpen(!isContactOpen);
    } else if (type === 'meeting') {
      setIsMeetingOpen(!isMeetingOpen);
    }
  };

  return (
    <DropdownWrapper>
      <DropdownSelect
        type="button"
        onClick={() => handleDropdownClick(props.type as string)}
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
        <i className="fas fa-chevron-down arrow-down" />
        선택
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
`;

// const SelectedTagWrapper = styled.div`
//   width: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* overflow: hidden; */
//   margin-right: 5px;
//   transition: opacity 100ms ease-in-out;
//   cursor: pointer;
// `;

// const SelectedTag = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
