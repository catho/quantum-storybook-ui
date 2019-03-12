import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StoryContainer from '../StoryContainer';
import Title from '../Title';

const HeadingWrapper = styled.div`
  background-color: rgb(251, 251, 252);
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 0;
`;

const StyledP = styled.p`
  font-size: 17px;
  letter-spacing: initial;
  line-height: initial;
`;

const Heading = ({ name, title, children }) => (
  <HeadingWrapper>
    <StoryContainer>
      <Title>{title || name}</Title>
      <StyledP>{children}</StyledP>
    </StoryContainer>
  </HeadingWrapper>
);

Heading.defaultProps = {
  name: '',
  title: '',
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Heading;
