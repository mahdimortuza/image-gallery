import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
/* eslint-disable react/display-name */
export const Image = forwardRef(
  ({ image, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",

      ...style,
    };
    const [isChecked, setIsChecked] = useState(true);
    const [isHover, setIsHover] = useState(true);

    const handleHover = () => {
      setIsHover(!isHover);
    };

    const arr = [];

    const handleCheck = () => {
      setIsChecked(!isChecked);

      if (isChecked === true) {
        arr.push(image.image);
        console.log(arr, arr.length);
      }
    };

    return (
      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`image rounded-md border-[1px] w-full h-full border-solid relative hover:opacity-80
        
        ${!isChecked ? "opacity-40 hover:opacity-40" : "opacity-100"}
        ${index === 0 ? "col-span-2 row-span-2" : ""}`}
      >
        <motion.img
          src={image.image}
          ref={ref}
          className={`rounded-md`}
          style={inlineStyles}
          {...props}
        />

        <div onClick={handleCheck}>
          <input
            className={`absolute top-3 left-3 h-5 w-5
          ${isHover && isChecked ? "opacity-0" : "opacity-100"}
          `}
            type="checkbox"
          />
        </div>
      </motion.div>
    );
  }
);
