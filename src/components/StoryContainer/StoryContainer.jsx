import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const StoryContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,600,600i,700,700i');

  font-family: 'Titillium Web';
  color: ${Colors.blue['bayoux']};
  margin: 0 auto;
  max-width: 87%;
  padding-bottom: 90px;

  h1, h2, h3, h4 {
    color: ${Colors.blue['sanjuan']};
    letter-spacing: -1px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }
`;

const Title = ({ children, ...rest }) => (
  <StoryContainer {...rest}>{children}</StoryContainer>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
