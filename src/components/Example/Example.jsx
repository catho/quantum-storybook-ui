import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../ui/Colors';
import CodeExample from '../CodeExample';

const Small = styled.small`
  color: ${Colors.grey.harder};
  cursor: pointer;
  text-transform: lowercase;
`;

const Code = styled.div`
  margin-bottom: 20px;
`;

const Example = ({ component: Component, title, importModules, code }) => (
  <>
    {Component}
    <h3>{title}</h3>
    <Code>
      <CodeExample
        code={code}
        withImport={importModules}
        showTitle={false}
        component={Component}
      />
    </Code>
  </>
);

Example.defaultProps = {
  code: '',
  title: '',
  importModules: '',
  component: {},
};

Example.propTypes = {
  code: PropTypes.string,
  component: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  importModules: PropTypes.string,
};

export default Example;
