import { createContext, useState } from 'react';

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [categoryTag, setCategoryTag] = useState('');
  const [meetingTag, setMeetingTag] = useState('');
  const [contactTag, setContactTag] = useState('');

  return (
    <TagContext.Provider
      value={{
        categoryTag,
        setCategoryTag,
        meetingTag,
        setMeetingTag,
        contactTag,
        setContactTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
