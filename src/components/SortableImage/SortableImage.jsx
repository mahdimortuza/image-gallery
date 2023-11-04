import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Image } from "../Image/Image";

const SortableImage = (props) => {
  const sortable = useSortable({ id: props.image });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Image
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableImage;
