import { useEffect } from "react";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./features/pictures.slice";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);
  //use dispatch sert à déclencher les action
  //useSelector sert à faire appel aux données qui sont dans nos stores

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)));
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
