import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import StoryContainer from '../StoryContainer';

const Panel = styled.main`
  display: grid;
  grid-template-areas:
    'props preview'
    'props code';
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 2fr;
  grid-row-gap: 0px;
  grid-column-gap: 15px;
  margin-top: 90px;
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
      component: { props: componentProps }
    } = props;
    this.state = componentProps;
  }

  handleChange = newState => {
    const state = {
      ...this.state,
      ...newState
    };

    this.setState(state);
  };

  render() {
    const { component: Component, importModules } = this.props;

    return (
      <StoryContainer>
        <Panel>
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
            <CodeExample
              component={Component}
              state={this.state}
              withImport={importModules}
            />
          </Code>
        </Panel>
      </StoryContainer>
    );
  }
}

ComponentPanel.propTypes = {
  importModules: PropTypes.string.isRequired,
  component: PropTypes.instanceOf(Object).isRequired
};

export default ComponentPanel;
