import { useSelector } from "react-redux";

const Header = () => {
  const { items } = useSelector((state) => state.imagesSlice);
  const imageItem = items.filter((item) => item.status === "deleted");

  const handleDelete = () => {
    console.log("from dispatch");
  };



  return (
    <div className="w-[800px] mx-auto pt-5 px-5 mt-6">
      {imageItem.length > 0 ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <input
              className="w-5 h-5"
              type="checkbox"
            ></input>
            <h5 className="text-xl font-semibold">
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
        <h1 className="text-xl font-bold">Gallery</h1>
      )}
    </div>
  );
};

export default Header;
