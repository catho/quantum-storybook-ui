import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StoryContainer from '../StoryContainer';
import Title from '../Title';
import ViewOnRemote from '../ViewOnRemote';
import Colors from '../../ui/Colors';

const HeadingWrapper = styled.div`
  position: relative;
  background-color: ${Colors.grey.athens};
  padding: 0;
`;

const StyledP = styled.p`
  font-size: 17px;
  letter-spacing: initial;
  line-height: initial;
`;

const Image = styled.img`
  margin-right: 20px;
`;

const Heading = ({ name, title, image, children }) => (
  <HeadingWrapper>
    <StoryContainer>
      <Title>
      {image && <Image alt={title} src={image} width="50" height="50" />}
      {title || name}
      </Title>
      <StyledP>{children}</StyledP>
      {name && <ViewOnRemote name={name} />}
    </StoryContainer>
  </HeadingWrapper>
);

Heading.defaultProps = {
  name: '',
  title: '',
};

Heading.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

export default Heading;
