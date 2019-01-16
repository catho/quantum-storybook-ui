import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import HowToImport from '../HowToImport';

const Panel = styled.main`
  display: grid;
  grid-template: 
    ". ."
    50% 50%
    ". .";
`;

class ComponentPanel extends React.Component {
  constructor(props) {
    super(props);

    const {
      component: { props: componentProps },
    } = props;
    this.state = componentProps;
  }

  handleChange = newState => {
    const state = {
      ...this.state,
      ...newState,
    };

    this.setState(state);
  };

  render() {
    const { component: Component, importModules } = this.props;

    return (
      <Panel>
        <HowToImport importModules={importModules} />
        <AutoProps
          component={Component}
          state={this.state}
          changeState={this.handleChange}
        />

        <LivePreview
          component={Component}
          state={this.state}
          onChange={this.handleChange}
        />
        <CodeExample component={Component} state={this.state} />
      </Panel>
    );
  }
}

ComponentPanel.propTypes = {
  importModules: PropTypes.string.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

export default ComponentPanel;
