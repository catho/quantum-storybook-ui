import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';

const Canvas = styled.canvas`
  /* background-color: rgba(0, 0, 0, 0.2); */
  position: absolute;
  top: 0;
  left: 0;

  pointer-events: none;
`;

function canvas_arrow(ctx, fromx, fromy, tox, toy, text = '') {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.setLineDash([5, 2]);

  ctx.font = '10px sans-serif';
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);

  const textLeft = tox < fromx;
  const textWidth = ctx.measureText(text).width;
  const textHeight = parseInt(ctx.font);

  ctx.fillStyle = 'red';

  // horizontal text
  if (fromy === toy) {
    ctx.fillText(
      text,
      textLeft
        ? fromx - textWidth / 2 - (fromx - tox) / 2
        : fromx - textWidth / 2 + (tox - fromx) / 2,
      toy + 34
    );
  } else {
    ctx.fillText(
      text,
      tox - textWidth - 20,
      toy + textHeight / 2 - (toy - fromy) / 2
    );
  }

  ctx.stroke();
  ctx.closePath();
}

function rectV(props) {
  const { ctx, x, y, width, height } = props;
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.setLineDash([5, 2]);

  ctx.beginPath();

  ctx.moveTo(x, y + height + 4);
  ctx.lineTo(x, y + height + 24);
  ctx.stroke();

  ctx.closePath();
}

function rectH(props) {
  const { ctx, x, y, width, height } = props;
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.setLineDash([5, 2]);

  ctx.beginPath();
  ctx.moveTo(x - 30, y);
  ctx.lineTo(x - 4, y);
  ctx.stroke();
  ctx.closePath();
}

function getProperty(element, prop) {
  return parseInt(window.getComputedStyle(element).getPropertyValue(prop));
}

const CanvasComponent = ({ children }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const {
      current: { firstChild: component }
    } = wrapperRef;
    const { current: canvas } = canvasRef;

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const x = component.offsetLeft;
    const y = component.offsetTop;
    const height = component.offsetHeight;
    const width = component.offsetWidth;

    const paddingLeft = getProperty(component, 'padding-left');
    const paddingRight = getProperty(component, 'padding-right');
    const paddingTop = getProperty(component, 'padding-top');
    const paddingBottom = getProperty(component, 'padding-bottom');

    const ARROW_DISTANCE_H = 14;
    const ARROW_DISTANCE_V = 17;

    // Vertical
    if (paddingLeft) {
      canvas_arrow(
        ctx,
        x + paddingLeft,
        y + height + ARROW_DISTANCE_H,
        x,
        y + height + ARROW_DISTANCE_H,
        'xsmall'
      );
      rectV({ ctx, x: x + paddingLeft, y, width, height });
      rectV({ ctx, x, y, width, height });
    }

    if (paddingRight) {
      rectV({ ctx, x: x + width, y, width, height });
      rectV({ ctx, x: x + width - paddingRight, y, width, height });

      canvas_arrow(
        ctx,
        x + width - paddingRight,
        y + height + ARROW_DISTANCE_H,
        x + width,
        y + height + ARROW_DISTANCE_H,
        'xsmall'
      );
    }

    // Horizontal
    if (paddingTop) {
      rectH({ ctx, x: x, y: y + paddingTop, width, height });
      rectH({ ctx, x: x, y, width, height });

      canvas_arrow(
        ctx,
        x - ARROW_DISTANCE_V,
        y,
        x - ARROW_DISTANCE_V,
        y + paddingTop,
        'xsmall'
      );
    }

    if (paddingBottom) {
      rectH({ ctx, x: x, y: y + height - paddingBottom, width, height });
      rectH({ ctx, x: x, y: y + height, width, height });

      canvas_arrow(
        ctx,
        x - ARROW_DISTANCE_V,
        y + height - paddingBottom,
        x - ARROW_DISTANCE_V,
        y + height,
        'xsmall'
      );
    }
  }, []);

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
  padding: 60px 20px;
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

const LivePreview = ({ component: { type: Component }, state, onChange }) => (
  <>
    <MainTitle as='h2'>Appearence</MainTitle>
    <Preview>
      <CanvasComponent>
        <Component {...state} onChange={(e, data) => onChange(data)} />
      </CanvasComponent>
    </Preview>
  </>
);

LivePreview.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default LivePreview;
