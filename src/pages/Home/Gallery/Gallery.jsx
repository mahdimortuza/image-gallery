import { useEffect, useState } from "react";
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
import { Photo } from "../../../components/Image/Image";

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setImages(data.image));
  }, []);

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={images} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-5 gap-3 w-[800px] mx-auto py-5">
            {images.map((image, index) => (
              <SortableImage key={image.id} image={image} index={index} />
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
          </div>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo image={activeId} index={images.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

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
