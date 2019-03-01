import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const StyledTitle = styled.h1`
  align-items: center;
  color: ${Colors.blue['sanjuan']};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  line-height: 60px;
  margin: 0 0 30px 0;
  padding: 90px 0 0 0;
  text-align: left;
`;

const Title = ({ children, ...rest }) => (
  <StyledTitle {...rest}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
