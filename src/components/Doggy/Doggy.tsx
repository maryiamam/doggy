import doggyLight from "../../doggy-head-light.svg";
import doggyDark from "../../doggy-head-dark.svg";
import { useAppSelector } from "../../redux/store";
import * as S from "./Doggy.styled";

interface Props {
  offsetTop?: number;
  offsetLeft?: number;
  handleClick?: () => void;
}

const Doggy = ({ offsetTop, offsetLeft, handleClick }: Props) => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <S.Doggy
      style={{
        top: offsetTop,
        left: offsetLeft,
      }}
      onClick={handleClick}
    >
      <S.DoggyImg>
        <img src={theme === "dark" ? doggyLight : doggyDark}></img>
      </S.DoggyImg>

      <S.DoggyEyes eyeDistance={30} className="doggy-eyes" />
    </S.Doggy>
  );
};

export default Doggy;
