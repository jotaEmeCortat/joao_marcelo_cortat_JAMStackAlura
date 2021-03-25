import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../utils/breakpointsMedia';
import useWindowSize from '../../utils/useWindowSize';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 220, y: 400 });

  useEffect(() => {
    const setFromEvent = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  });

  return position;
};

const Eyes = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align:center;
`;

const Eye = styled.div`
  width: 240px;
  height: 120px;
  background: #fafafa;
  display: inline-block;
  margin: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  ${breakpointsMedia({
    md: css`
      `,
    lg: css`
      width: 290px;
      height: 170px;
      `,
  })}
`;

const Ball = styled.div`
  width: 70px;
  height: 70px;
  background: #111111;
  position: absolute;
  /* left: 41%;
  top: 31%; */
  transform: translate(-50%,-50%);
  border-radius: 50%;
  ${breakpointsMedia({
    md: css`
      `,
    lg: css`
      width: 100px;
     height: 100px;
      `,
  })}
`;

export default function Eye22() {
  const position = useMousePosition();
  const size = useWindowSize();
  const x = `${(position.x * 100) / size.width}%`;
  const y = `${(position.y * 100) / size.height}%`;

  return (
    <Eyes>
      <Eye>
        <Ball
          style={{
            left: x,
            top: y,
            transform: `translate(-${x},-${y})`,
          }}
        />
      </Eye>
    </Eyes>
  );
}
