import { useState } from "react";
import { BiImage } from "react-icons/bi";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import SortableImage from "../../../components/SortableImage/SortableImage";
import { Image } from "../../../components/Image/Image";
import { useSelector } from "react-redux";

const Gallery = () => {
  // getting initial state from redux
  const { items } = useSelector((state) => state.imagesSlice);
  const imageItem = items.filter((item) => item.status === "exists");

  // local state to animate sorting interactivity by user
  const [images, setImages] = useState(imageItem);

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <div className="">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={images} strategy={rectSortingStrategy}>
          {/* mapping over data to set them on component  */}
          <div className="md:grid md:grid-cols-5 gap-3 bg-white rounded-b-xl pt-5 px-5 md:w-[800px] mx-auto py-5">
            {images?.map((image, index) => (
              <SortableImage key={image.id} image={image} index={index} />
            ))}

            {/* input field for adding new image on the gallery  */}
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
          </div>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Image image={activeId} index={images.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  // functions for drag and drop interaction
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setImages((images) => {
        const oldIndex = images.indexOf(active.id);
        const newIndex = images.indexOf(over.id);

        return arrayMove(images, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default Gallery;
