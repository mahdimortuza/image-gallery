import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  removeImage,
  updateStatus,
} from "../../redux/features/images/imagesSlice";
/* eslint-disable react/display-name */
export const Image = forwardRef(
  ({ image, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",

      ...style,
    };
    const [isChecked, setIsChecked] = useState(true);
    const [isHover, setIsHover] = useState(true);

    const dispatch = useDispatch();

    let statusUpdate;

    if (image.status === "exists") {
      statusUpdate = "deleted";
    } else {
      statusUpdate = "exists";
    }

    const handleCheck = (image) => {
      setIsChecked(!isChecked);
      dispatch(updateStatus({ id: image.id, status: statusUpdate }));
      // dispatch(removeImage(image.id))
      console.log(image);
    };

    const handleHover = () => {
      setIsHover(!isHover);
    };

    return (
      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`image mt-3 md:mt-0 rounded-md border-[1px] w-full h-full border-solid relative hover:opacity-80
        
        ${!isChecked ? "opacity-40 hover:opacity-60" : "opacity-100"}
        ${index === 0 ? "col-span-2 row-span-2" : ""}`}
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src={image.image}
          ref={ref}
          className={`rounded-md`}
          style={inlineStyles}
          {...props}
        />

        <div onClick={() => handleCheck(image)}>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
