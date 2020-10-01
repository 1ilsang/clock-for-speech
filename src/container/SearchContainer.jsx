import React from 'react';
import styled from 'styled-components';
import { useStoreDispatch } from '~/store/index.jsx';
import { SEARCH_IMAGE_FOR_BACKGROUND } from '~/model/actionType';

const SearchContainer = () => {
  const dispatch = useStoreDispatch();

  const handleInputKeyPress = (event) => {
    if (event.key !== 'Enter') return;
    dispatch({
      type: SEARCH_IMAGE_FOR_BACKGROUND,
      payload: event.target.value,
    });
    event.target.value = '';
  };

  return (
    <SearchContainerStyle>
      <SearchIcon>
        <i className="fa fa-search"></i>
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="images..."
        onKeyPress={handleInputKeyPress}
      ></SearchInput>
    </SearchContainerStyle>
  );
};

export default SearchContainer;

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.titleColor};
  width: 25vh;
  font-size: 20pt;
  margin-left: 35px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.titleColor};

  &::placeholder {
    color: ${(props) => props.theme.colors.titleColor}70;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  font-size: 20pt;
  z-index: 1;
  color: ${(props) => props.theme.colors.titleColor};
`;

const SearchContainerStyle = styled.div`
  margin-left: 5%;
`;
