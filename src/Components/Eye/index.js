import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { breakpointsMedia } from '../../utils/breakpointsMedia';
import useWindowSize from '../../utils/useWindowSize';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 20, y: 120 });

  useEffect(() => {
    const setFromEvent = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  });

  return position;
};

const EyeWrapper = styled.div`
  width: 180px;
  height: 100px;
  background: #fafafa;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  ${breakpointsMedia({
    md: css`
      width: 290px;
      height: 170px;
      `,
    lg: css`
      
      `,
  })}
`;

const move = keyframes`
  0% { transform: translate(0px, 0px) }
  100% { transform: translate(110px, 0px) }

`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  background: #111111;
  position: absolute;
  transform: translate(-50%,-50%);
  animation: ${move} 4s infinite alternate;
  border-radius: 50%;
  ${breakpointsMedia({
    md: css`
      width: 100px;
      height: 100px;
      `,
    lg: css`
      animation: none;
      `,
  })}
`;

export default function Eye() {
  const position = useMousePosition();
  const size = useWindowSize();
  const x = `${(position.x * 100) / size.width}%`;
  const y = `${(position.y * 100) / size.height}%`;

  return (
    <EyeWrapper>
      <Ball
        style={{
          left: x,
          top: y,
          transform: `translate(-${x},-${y})`,
        }}
      />
    </EyeWrapper>
  );
}
