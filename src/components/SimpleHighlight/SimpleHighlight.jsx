import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const HightlightWrapper = styled.pre`
  position: relative;
  padding: 10px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 0;
  overflow: auto;

  code {
    background-color: transparent;
  }
`;

const SimpleHighlight = ({ backgroundColor, fontColor, children }) => (
  <HightlightWrapper backgroundColor={backgroundColor} fontColor={fontColor}>
    <code>{children}</code>
  </HightlightWrapper>
);

SimpleHighlight.defaultProps = {
  backgroundColor: Colors.blue.selago,
  fontColor: Colors.blue.curious
};

SimpleHighlight.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ])
};

export default SimpleHighlight;
