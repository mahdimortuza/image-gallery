import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Image } from "../Image/Image";

const SortableImage = (props) => {
  const sortable = useSortable({ id: props.image });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  // styles for sorting animation
  const style = {
    transform: CSS.Transform.toString(transform),
    transformOrigin: "0 0",
    transition,
  };

  return (
    <Image
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableImage;
