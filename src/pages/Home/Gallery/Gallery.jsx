import { useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";

const Gallery = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setImg(data.images));
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-3 w-[800px] mx-auto py-5">
        {img.map((item, index) => (
          <img
            className={`image rounded-lg border-2 w-full h-full border-solid ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
            key={item.id}
            src={item.image}
          ></img>
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
