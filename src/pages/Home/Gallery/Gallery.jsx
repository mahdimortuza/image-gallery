import { useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import SingleImage from "../../../components/SingleImage/SingleImage";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setImages(data.image));
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newImages = [...images];
    const [reorderedItem] = newImages.splice(result.source.index, 1);
    newImages.splice(result.destination.index, 0, reorderedItem);
    setImages(newImages);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images" type="image">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-5 gap-3 w-[800px] mx-auto py-5"
            >
              {images.map((image, index) => (
                <SingleImage
                  key={image.id}
                  image={image}
                  index={index}
                ></SingleImage>
              ))}
              <label htmlFor="input-file">
                <input
                  type="file"
                  accept="image/*"
                  id="input-file"
                  className="hidden"
                />
                <div className="w-full h-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-lg">
                  <BiImage />
                  <p>Add image</p>
                </div>
              </label>

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Gallery;
