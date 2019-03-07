import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutoProps from '../AutoProps';
import LivePreview from '../LivePreview';
import CodeExample from '../CodeExample';
import SimpleHighlight from '../SimpleHighlight';
import StoryContainer from '../StoryContainer';
import Title from '../Title';

const Panel = styled.main`
  display: grid;
  grid-template-areas:
    'import import'
    'props preview'
    'props code';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 110px 0fr 1fr;
  grid-gap: 45px;
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
    const importString = `import { ${importModules} } from '@cathodevel/quantum';`;

    return (
      <StoryContainer>
        <Panel>
          <Import>
            <Title as="h2" style={{ paddingTop: 0 }}>Importing {importModules}</Title>
            <SimpleHighlight
            >
              {importString}
            </SimpleHighlight>
          </Import>

          <Props>
            <Title as="h2" style={{ paddingTop: 0 }}>Props</Title>
            <AutoProps
              component={Component}
              state={this.state}
              changeState={this.handleChange}
            />
          </Props>

          <Preview>
            <Title as="h2" style={{ paddingTop: 0 }}>Preview</Title>
            <LivePreview
              component={Component}
              state={this.state}
              onChange={this.handleChange}
            />
          </Preview>

          <Code>
            <Title as="h2" style={{ paddingTop: 0 }}>Code</Title>
            <CodeExample component={Component} state={this.state} />
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
