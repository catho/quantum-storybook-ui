import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { black, grey } from '../../ui/Colors';

const StyledTitle = styled.h2`
  border-bottom: 1px solid ${grey.light};
  color: ${black};
  font-weight: normal;
  margin: 10px 0;
  padding-bottom: 8px;
`;

const Title = ({ children, ...rest }) => (
  <StyledTitle {...rest}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
