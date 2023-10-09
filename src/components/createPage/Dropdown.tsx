import styled from 'styled-components';
import { useState } from 'react';

import OptionMenu from './OptionMenu';

const Dropdown = ({ type }: { type: 'category' | 'contact' | 'meeting' }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

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
        onClick={() => handleDropdownClick(type)}
        className={
          type === 'category'
            ? isCategoryOpen
              ? 'isOpen'
              : ''
            : type === 'contact'
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
      {type === 'category' && isCategoryOpen && <OptionMenu type={type} />}
      {type === 'contact' && isContactOpen && <OptionMenu type={type} />}
      {type === 'meeting' && isMeetingOpen && <OptionMenu type={type} />}
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
