import React, { useState, useRef } from "react";

const RippleButton = ({ className, children, ...props }) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(), // unique ID for cleanup
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const handleAnimationEnd = (id) => {
    // remove ripple when animation finishes
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <>
      <style>
        {`
          .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-effect 600ms linear forwards;
            pointer-events: none;
          }
          @keyframes ripple-effect {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `}
      </style>

      <button
        ref={buttonRef}
        className={`relative overflow-hidden ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            onAnimationEnd={() => handleAnimationEnd(ripple.id)}
          />
        ))}
      </button>
    </>
  );
};

export default RippleButton;