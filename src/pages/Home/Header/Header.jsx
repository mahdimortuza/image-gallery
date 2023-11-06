import { useDispatch, useSelector } from "react-redux";
import { BiSolidCheckSquare } from "react-icons/bi";
import { removeImage } from "../../../redux/features/images/imagesSlice";

const Header = () => {
  const { items } = useSelector((state) => state.imagesSlice);
  const imageItem = items.filter((item) => item.status === "deleted");

  // const dispatch = useDispatch();
  const handleDelete = (image) => {
    console.log("from dispatch");
    // dispatch(removeImage(image.id));
  };

  return (
    <div className="w-[800px] mx-auto py-2 px-5 mt-6 bg-white rounded-t-xl">
      {imageItem.length > 0 ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <BiSolidCheckSquare className="w-7 h-7 text-[#337DD3]" />
            <h5 className="text-xl text-black font-semibold">
              {imageItem.length} files selected
            </h5>
          </div>
          <button
            onClick={() => handleDelete()}
            className="text-red-600 font-semibold"
          >
            Delete
          </button>
        </div>
      ) : (
        <h1 className="text-xl text-black font-bold">Gallery</h1>
      )}
    </div>
  );
};

export default Header;
