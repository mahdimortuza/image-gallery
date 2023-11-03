import { Draggable } from "@hello-pangea/dnd";
import "./SingleImage.css";

const SingleImage = ({ image: item, index }) => {
  const { image, id } = item;
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <img
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          src={image}
          className="image rounded-lg border-2 w-full h-full border-solid"
        ></img>
      )}
    </Draggable>
  );
};

export default SingleImage;
