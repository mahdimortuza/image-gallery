import { useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";
import SingleImage from "../../../components/SingleImage/SingleImage";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setImages(data.image));
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-3 w-[800px] mx-auto py-5">
        {images.map((image, index) => (
          <SingleImage key={image.id} image={image} index={index}></SingleImage>
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
    </>
  );
};

export default Gallery;
