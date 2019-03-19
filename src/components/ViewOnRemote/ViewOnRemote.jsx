import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeSign from '../../assets/images/code.svg';
import { Tooltip } from '@catho/quantum';

const baseUrl = 'https://github.com/catho/quantum/tree/master/components/';

const CodeIco = styled.img`
  width: 20px;
  height: 20px;
`;

const Link = styled.a`
  position: absolute;
  right: 40px;
  bottom: 20px;
  text-decoration: none;
  cursor: pointer;

  ${CodeIco} {
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
`;

const ViewOnRemote = ({ name }) => (
  <Link href={`${baseUrl}${name}`} target="_blank">
    <Tooltip text="View Source" placement="left">
      <CodeIco src={CodeSign} />
    </Tooltip>
  </Link>
);

ViewOnRemote.propTypes = {
  name: PropTypes.string.isRequired
};

export default ViewOnRemote;
