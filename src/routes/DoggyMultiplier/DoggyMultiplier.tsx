import { useState } from "react";
import nextId from "react-id-generator";
import Doggy from "../../components/Doggy/Doggy";
import { useAppSelector } from "../../redux/store";
import "./DoggyMultiplier.scss";
import { Button } from "@mui/material";

interface Dog {
  key: string;
  offsetTop: number;
  offsetLeft: number;
}

const DoggyMultiplier = () => {
  const { width, height } = useAppSelector((state) => state.resolutionReducer);
  const [dogs, setDogs] = useState<Dog[]>([]);

  const addDog = () => {
    const newDog = {
      key: nextId(),
      offsetTop: getRandomPosition(height - 50, 30),
      offsetLeft: getRandomPosition(width - 50, -50),
    };

    setDogs([...dogs, newDog]);
  };

  const getRandomPosition = (max: number, min: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div className="doggy-multiplier">
      <Button
        variant="outlined"
        onClick={addDog}
        className="add-doggy-btn"
        size="small"
      >
        Add a doggy
      </Button>
      {dogs.map((dog: Dog) => (
        <Doggy
          key={dog.key}
          uid={dog.key}
          offsetTop={dog.offsetTop}
          offsetLeft={dog.offsetLeft}
          handleClick={addDog}
        />
      ))}
    </div>
  );
};

export default DoggyMultiplier;
