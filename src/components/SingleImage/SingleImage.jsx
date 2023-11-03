import "./SingleImage.css";

const SingleImage = ({ image: item }) => {
  const { image } = item;
  return (
    <img
      src={image}
      className="image rounded-lg border-2 w-full h-full border-solid"
    ></img>
  );
};

export default SingleImage;
