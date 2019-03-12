import React from 'react';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid ${Colors.grey.harder};

    content: '';
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 12px;
  }
`;

const SelectInput = styled.select`
  appearance: none;
  background-color: #fff;
  border: 1px solid ${Colors.grey.harder};
  border-radius: 4px;
  color: ${Colors.grey.strong};
  font-size: 14px;
  min-width: 170px;
  padding: 5px;

  option {
    padding: 5px;
  }
`;

const Select = ({ children, ...rest }) => (
  <Wrapper>
    <SelectInput {...rest}>{children}</SelectInput>
  </Wrapper>
);

export default Select;
