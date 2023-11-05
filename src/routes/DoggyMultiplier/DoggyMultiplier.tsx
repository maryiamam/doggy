import { useEffect, useState } from "react";
import nextId from "react-id-generator";
import Doggy from "../../components/Doggy/Doggy";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import * as S from "./DoggyMultiplier.styled";
import doggyLight from "../../doggy-light-b.svg";
import doggyDark from "../../doggy-dark-b.svg";
import { cursorFollow, cursorUnfollow } from "../../redux/cursorReducer";

interface Dog {
  key: string;
  offsetTop: number;
  offsetLeft: number;
}

const DoggyMultiplier = () => {
  const dispatch = useAppDispatch();
  const { width, height } = useAppSelector((state) => state.resolutionReducer);
  const { theme } = useAppSelector((state) => state.themeReducer);
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    dispatch(cursorFollow());

    return () => {
      dispatch(cursorUnfollow());
    };
  }, []);

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
    <S.DoggyMultiplier
      sx={{
        "&::before": {
          content: '" "',
          display: "block",
          position: "absolute",
          left: 0,
          top: 30,
          width: "100%",
          height: "100%",
          opacity: " 0.1",
          backgroundImage: `url(${theme == "dark" ? doggyLight : doggyDark})`,
          backgroundPosition: "50% 0",
          backgroundSize: "cover",
        },
      }}
    >
      <S.AddDoggyBtn
        variant="outlined"
        onClick={addDog}
        className="add-doggy-btn"
        size="small"
      >
        Add a doggy
      </S.AddDoggyBtn>
      {dogs.map((dog: Dog) => (
        <Doggy
          key={dog.key}
          uid={dog.key}
          offsetTop={dog.offsetTop}
          offsetLeft={dog.offsetLeft}
          handleClick={addDog}
        />
      ))}
    </S.DoggyMultiplier>
  );
};

export default DoggyMultiplier;
