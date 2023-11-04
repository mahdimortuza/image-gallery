import { forwardRef } from "react";

/* eslint-disable react/display-name */
export const Image = forwardRef(
  ({ image, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      // transformOrigin: "0 0",
      // height: index === 0 ? 410 : 200,
      // gridRowStart: index === 0 ? "span 2" : null,
      // gridColumnStart: index === 0 ? "span 2" : null,
      // backgroundImage: `url("${image.image}")`,
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      ...style,
    };

    return (
      <div className={`image rounded-md border-[1px] w-full h-full border-solid relative ${
        index === 0 ? "col-span-2 row-span-2" : ""
      }`}>
        <img
        src={image.image}
        ref={ref}
        className="rounded-md"
        style={inlineStyles}
        {...props}
      />
      <input className="absolute top-3 left-3 h-4 w-4" type="checkbox"></input>
      </div>
      
    );
  }
);
