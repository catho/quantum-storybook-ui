import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const StoryContainer = styled.div`
  margin: 0 auto;
  max-width: 87%;
  padding-bottom: 90px;
`;

const Title = ({ children, ...rest }) => (
  <StoryContainer {...rest}>{children}</StoryContainer>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
