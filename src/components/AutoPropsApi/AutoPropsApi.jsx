import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Colors from '../../ui/Colors';
import Title from '../Title';
import Table from '../Table';
import StoryContainer from '../StoryContainer';

const wrap = name => children => (
  <span>
    {name} [{children}]
  </span>
);

const failSafe = type => () => (
  <span>
    Sorry, unable to parse this propType:
    <pre>{JSON.stringify(type, null, 2)}</pre>
  </span>
);

const filterIgnoredProps = (prop, ignoreds) => {
  if (!ignoreds) {
    return true;
  }

  return !ignoreds.includes(prop);
};

const removeQuotes = str => str.replace(/'/g, '');

const PropertyType = styled.code`
  color: ${Colors.pink.amaranth}
`;

const renderPropType = (type = {}) => {
  const typeHandlers = {
    custom: () => wrap('custom')(),
    enum: value =>
      wrap('oneOf')(
        value.map((v, i, allValues) => (
          <span key={v.value}>
            <PropertyType>{removeQuotes(v.value)}</PropertyType>
            {allValues[i + 1] && ', '}
          </span>
        ))
      ),
    union: value =>
      wrap('oneOfType')(
        value.map((v, i, allValues) => (
          <span key={v.name.repeat(i)}>
            <PropertyType>{renderPropType(v)}</PropertyType>
            {allValues[i + 1] && ', '}
          </span>
        ))
      ),
    shape: value =>
      wrap('shape')(
        <ul>
          {Object.keys(value)
            .map(key => ({ ...value[key], key }))
            .map(v => (
              <li key={v.key}>
                {v.key}:&nbsp;
                {renderPropType(v)}
                {v.required && (
                  <small>
                    <strong>&nbsp;required</strong>
                  </small>
                )}
              </li>
            ))}
        </ul>
      ),
    arrayOf: value => wrap('arrayOf')(renderPropType(value)),
  };

  if (type.value) {
    return (typeHandlers[type.name] || failSafe(type))(type.value);
  }

  return <PropertyType>{type.name}</PropertyType>;
};

const AutoPropsApi = ({ component: Component, title, ignoredProps }) => (
  <StoryContainer>
    <Title as="h2">{title || 'Available props'}</Title>
    {Component.__docgenInfo && (
      <ReactMarkdown source={Component.__docgenInfo.description} />
    )}
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Component.__docgenInfo &&
          Object.entries(Component.__docgenInfo.props)
            .filter(([name]) => filterIgnoredProps(name, ignoredProps))
            .map(([name, value]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{renderPropType(value.type)}</td>
                <td>
                  {value.defaultValue && removeQuotes(value.defaultValue.value)}
                </td>
                <td>{value.required ? 'Yes' : 'No'}</td>
                <td>
                  <ReactMarkdown source={value.description} />
                </td>
              </tr>
            ))}
      </tbody>
    </Table>
  </StoryContainer>
);

AutoPropsApi.defaultProps = {
  title: '',
  ignoredProps: [],
};

AutoPropsApi.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
  ignoredProps: PropTypes.arrayOf(PropTypes.string),
};

export default AutoPropsApi;
