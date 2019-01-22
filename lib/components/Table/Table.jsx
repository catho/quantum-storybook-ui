import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid ${Colors.grey.medium};
    padding: 8px;
    font-size: 14px;
    text-align: left;
  }
`;

const Table = ({ children, ...rest }) => (
  <StyledTable {...rest}>{children}</StyledTable>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
