import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function Example() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  const areaRef = React.useRef(null);

  function handleMouse(event) {
    // using a ref because event.target will switch to the values of the child div when you hover over it
    const rect = areaRef.current.getBoundingClientRect();
    // calculating the x and y position within the element
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      style={{
        background: '#fafafa',
        borderRadius: 100,
        display: 'block',
        height: 98.52,
        width: 152,
      }}
      ref={areaRef}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          background: 'green',
          borderRadius: '50%',
          content: '',
          left: '50',
          top: '15',
          height: '80.22px',
          width: '56.3px',
          position: 'absolute',
          rotateX,
          rotateY,
        }}
      />
    </motion.div>
  );
}
