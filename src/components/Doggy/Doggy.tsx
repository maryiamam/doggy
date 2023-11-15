import doggyLight from "../../doggy-head-light.svg";
import doggyDark from "../../doggy-head-dark.svg";
import { useAppSelector } from "../../redux/store";
import Eyes from "../Eyes/Eyes";
import "./Doggy.scss";

interface Props {
  offsetTop: number;
  offsetLeft: number;
  handleClick?: () => void;
}

const Doggy = ({ offsetTop, offsetLeft, handleClick }: Props) => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <div
      className="doggy"
      style={{
        top: offsetTop,
        left: offsetLeft,
      }}
      onClick={handleClick}
    >
      <div className="doggy-img">
        <img src={theme === "dark" ? doggyLight : doggyDark}></img>
      </div>

      <Eyes eyeDistance={30} className="doggy-eyes" />
    </div>
  );
};

export default Doggy;
