import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  pointer-events: none;
`;

function drawLines(ctx, canvas, element, props) {
  const { x, y, width, height } = element.getBoundingClientRect();
  const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();

  const paddingLeft = Math.round(
    parseFloat(getProperty(element, 'padding-left')),
  );
  const paddingRight = Math.round(
    parseFloat(getProperty(element, 'padding-right')),
  );
  const paddingTop = Math.round(
    parseFloat(getProperty(element, 'padding-top')),
  );
  const paddingBottom = Math.round(
    parseFloat(getProperty(element, 'padding-bottom')),
  );

  const { spacing } = props.theme || {};

  if (paddingLeft) {
    const [text] = Object.keys(spacing).filter(
      key => spacing[key] === paddingLeft,
    );

    text &&
      rect({ ctx, x: x - canvasX, y: y - canvasY, width: paddingLeft, height });
  }

  if (paddingRight) {
    const [text] = Object.keys(spacing).filter(
      key => spacing[key] === paddingRight,
    );

    text &&
      rect({
        ctx,
        x: x - canvasX + width - paddingRight,
        y: y - canvasY,
        width: paddingRight,
        height,
      });
  }

  if (paddingTop) {
    const [text] = Object.keys(spacing).filter(
      key => spacing[key] === paddingTop,
    );

    text &&
      rect({ ctx, x: x - canvasX, y: y - canvasY, width, height: paddingTop });
  }

  if (paddingBottom) {
    const [text] = Object.keys(spacing).filter(
      key => spacing[key] === paddingBottom,
    );

    text &&
      rect({
        ctx,
        x: x - canvasX,
        y: y - canvasY + height - paddingBottom,
        width,
        height: paddingBottom,
      });
  }
}

function rect(props) {
  const { ctx, x, y, width, height } = props;

  ctx.globalCompositeOperation = 'luminosity';
  ctx.fillStyle = '#C2CE89';
  ctx.fillRect(x, y, width, height);
}

function getProperty(element, prop) {
  return window.getComputedStyle(element).getPropertyValue(prop);
}

function transformToMs(prop) {
  return prop.endsWith('ms') ? parseFloat(prop) : parseFloat(prop) * 1000;
}

const findReactComponent = function(dom) {
  function getFiberNode(node) {
    const { stateNode } = node;
    return stateNode && !(stateNode instanceof HTMLElement)
      ? stateNode
      : getFiberNode(node.return);
  }

  const key = Object.keys(dom).find(key =>
    key.startsWith('__reactInternalInstance$'),
  );

  const internalInstance = dom[key];

  if (internalInstance == null) return null;

  if (internalInstance.return) {
    // react 16+
    return internalInstance._debugOwner
      ? getFiberNode(internalInstance._debugOwner)
      : getFiberNode(internalInstance.return);
  } else {
    // react <16
    return getFiberNode(internalInstance._currentElement._owner._instance);
  }
};

const CanvasComponent = ({ children, state }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const {
      current: { firstChild: component },
    } = wrapperRef;

    const { current: canvas } = canvasRef;
    const componentArray = Array.from(component.children).flat(Infinity);

    const ctx = canvas.getContext('2d');

    const animationDuration = transformToMs(
      getProperty(component, 'transition-duration'),
    );
    const animationDelay = transformToMs(
      getProperty(component, 'transition-delay'),
    );

    setTimeout(() => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;

      drawLines(ctx, canvas, component, children.props);
      componentArray.forEach(child => {
        const { props } = findReactComponent(child);
        drawLines(ctx, canvas, child, props);
      });
    }, animationDuration + animationDelay);
  }, [state]);

  return (
    <>
      <div ref={wrapperRef}>{children}</div>
      <Canvas ref={canvasRef} />
    </>
  );
};

const MainTitle = styled(Title)`
  padding: 0;
  margin: 0 0 25px 0;
`;

const Preview = styled.div`
  padding: 60px 200px;
  display: flex;
  justify-content: center;

  background: linear-gradient(
      45deg,
      #eff2f6 25%,
      transparent 25%,
      transparent 75%,
      #eff2f6 75%,
      #eff2f6 0
    ),
    linear-gradient(
      45deg,
      #eff2f6 25%,
      transparent 5%,
      transparent 75%,
      #eff2f6 75%,
      #eff2f6 0
    ),
    #fff;

  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-clip: border-box;
  background-origin: padding-box;
  position: relative;
`;

const LivePreview = ({ component: Component, state, onChange }) => (
  <>
    <MainTitle as="h2">Appearence</MainTitle>
    <Preview>
      <CanvasComponent state={state}>
        {Component}
        {/* <Component {...state} onChange={(e, data) => onChange(data)} /> */}
      </CanvasComponent>
    </Preview>
  </>
);

LivePreview.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LivePreview;
