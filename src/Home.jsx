import { useEffect, useState } from "react";

const Home = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setImg(data.images));
  }, []);

  console.log(img);

  return (
    <>
      <div>
        {img.map((item) => (
          <img key={item.id} src={item.image}></img>
        ))}
      </div>
    </>
  );
};

export default Home;
