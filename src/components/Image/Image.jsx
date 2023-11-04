import { forwardRef } from "react";
/* eslint-disable react/display-name */
export const Image = forwardRef(
  ({ image, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${image.image}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`rounded-lg border-1 border-solid p-0`}
        style={inlineStyles}
        {...props}
      />
    );
  }
);
