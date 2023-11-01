import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import HorizontalLine from "../components/HorizontalLine/HorizontalLine";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HorizontalLine></HorizontalLine>
      <Gallery></Gallery>
    </div>
  );
};

export default Main;
