import styled from 'styled-components';
import { categories } from 'components/_common/tags';

const SelectedTag = ({ tagImg }: { tagImg?: string }) => {
  console.log(tagImg);
  return <img src={categories[tagImg as string]} alt="s" />;
};

export default SelectedTag;
