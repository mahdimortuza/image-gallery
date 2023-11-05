import { useDispatch } from "react-redux";
import { deleteImage } from "../../../redux/features/images/imagesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteImage("hello world"));
  };
  return (
    <div className="w-[800px] mx-auto flex justify-between items-center pt-5 px-5 mt-6">
      <div className="flex gap-3 items-center">
        <input className="w-5 h-5" type="checkbox"></input>
        <h5 className="text-xl font-semibold">3 files selected</h5>
      </div>
      <button
        onClick={() => handleDelete()}
        className="text-red-600 font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default Header;
