import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
/* eslint-disable react/display-name */
export const Image = forwardRef(
  ({ image, index, faded, style, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(true);
    const handleChecked = () => {
      setIsChecked(!isChecked);
      console.log(isChecked);
    };

    const inlineStyles = {
      opacity: faded ? "0.2" : "1",

      ...style,
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`image rounded-md border-[1px] w-full h-full border-solid relative ${
          index === 0 ? "col-span-2 row-span-2" : ""
        }`}
      >
        <motion.img
          whileHover={{ opacity: 0.5 }}
          src={image.image}
          ref={ref}
          className={`rounded-md`}
          style={inlineStyles}
          {...props}
        />
        <motion.input
        initial={{opacity: 0.5}}
        whileHover={{opacity: 1}}
          onClick={handleChecked}
          className="absolute top-3 left-3 h-4 w-4"
          type="checkbox"
        />
      </motion.div>
    );
  }
);
