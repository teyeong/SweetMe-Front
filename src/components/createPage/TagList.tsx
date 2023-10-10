import styled from 'styled-components';

import { dev, language, daily, contact, meeting } from '../_common/tags';

const DevObject = dev;
const LangObject = language;
const DailyObject = daily;

const ContactObject = contact;
const MeetingObject = meeting;

type TagOptionProps = {
  type: 'dev' | 'lang' | 'daily' | 'contact' | 'meeting';
};

const handleTagClick = (tag: string) => {
  return console.log(tag);
};

const TagList: React.FC<TagOptionProps> = ({ type }) => {
  let tagObject: { [key: string]: string } = {};

  switch (type) {
    case 'dev':
      tagObject = DevObject;
      break;
    case 'lang':
      tagObject = LangObject;
      break;
    case 'daily':
      tagObject = DailyObject;
      break;
    case 'contact':
      tagObject = ContactObject;
      break;
    case 'meeting':
      tagObject = MeetingObject;
      break;
    default:
      break;
  }

  return (
    <>
      {Object.keys(tagObject).map((e, index) => (
        <TagWrapper key={index} onClick={() => handleTagClick(e)}>
          <Tag src={tagObject[e]} />
        </TagWrapper>
      ))}
    </>
  );
};

export default TagList;

const TagWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 5px;
  transition: opacity 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Tag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
