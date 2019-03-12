import React from 'react';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const sharedStyles = `
  border-bottom: 1px solid;
  content: '';
  display: none;
  height: 10px;
  position: absolute;
`;

const Wrapper = styled.div`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 20px;
`;

const Check = styled.span`
  border: 1px solid ${Colors.grey.harder};
  border-radius: 4px;
  display: inline-block;
  height: 100%;
  pointer-events: none;
  position: relative;
  width: 100%;

  &:before {
    ${sharedStyles}
    left: 8px;
    top: 2px;
    transform: rotate(45deg);
    width: 4px;
  }
  &:after {
    ${sharedStyles}
    left: 3px;
    transform: rotate(-45deg);
    top: 1px;
    width: 10px;
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  display: inline-block;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:checked + ${Check}:before {
    display: inline-block;
  }

  &:checked + ${Check}:after {
    display: inline-block;
  }
`;

const Checkbox = ({ ...rest }) => (
  <Wrapper>
    <Input {...rest} />
    <Check />
  </Wrapper>
);

export default Checkbox;
