import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HightlightWrapper = styled.pre`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono');

  position: relative;
  padding: 10px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  code {
    background-color: transparent;
    font-family: 'Fira Mono';
    font-size: 12px;
  }
`;

const SimpleHighlight = ({ backgroundColor, fontColor, children }) => (
  <HightlightWrapper backgroundColor={backgroundColor} fontColor={fontColor}>
    <code>{children}</code>
  </HightlightWrapper>
);

SimpleHighlight.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default SimpleHighlight;
