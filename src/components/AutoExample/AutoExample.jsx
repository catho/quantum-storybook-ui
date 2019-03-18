/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import AutoPropsApi from '../AutoPropsApi';
import ComponentPanel from '../ComponentPanel';
import { TabbedView, Tab } from '../TabbedView';

const AutoExample = ({
  component: Component,
  componentProps: props,
  description,
  element = <Component {...props} />,
  name = element.type.displayName || element.type.name || element.type,
  importModules = name,
  additionalTabs,
}) => (
  <React.Fragment>
    <Heading name={name}>{description}</Heading>

    <TabbedView>
      <Tab title="Usage">
        <ComponentPanel component={element} importModules={importModules} />
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={element.type} />
      </Tab>

      {additionalTabs}
    </TabbedView>
  </React.Fragment>
);

AutoExample.defaultProps = {
  componentProps: {},
  description: '',
  additionalTabs: null,
};

AutoExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  componentProps: PropTypes.instanceOf(Object),
  description: PropTypes.string,
  element: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  importModules: PropTypes.string,
  additionalTabs: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AutoExample.displayName = 'AutoExample';

export default AutoExample;
