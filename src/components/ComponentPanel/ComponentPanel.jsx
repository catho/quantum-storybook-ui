import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import HowToImport from '../HowToImport';

const Panel = styled.main`
  display: grid;
  grid-template-areas:
    'import import'
    'props preview'
    'props code';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 110px 0fr 1fr;
  grid-gap: 20px;
`;

const Import = styled.div`
  grid-area: import;
`;
const Props = styled.div`
  grid-area: props;
`;
const Preview = styled.div`
  grid-area: preview;
`;
const Code = styled.div`
  grid-area: code;
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
        <Import>
          <HowToImport importModules={importModules} />
        </Import>

        <Props>
          <AutoProps
            component={Component}
            state={this.state}
            changeState={this.handleChange}
          />
        </Props>

        <Preview>
          <LivePreview
            component={Component}
            state={this.state}
            onChange={this.handleChange}
          />
        </Preview>

        <Code>
          <CodeExample component={Component} state={this.state} />
        </Code>
      </Panel>
    );
  }
}

ComponentPanel.propTypes = {
  importModules: PropTypes.string.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
};

export default ComponentPanel;
