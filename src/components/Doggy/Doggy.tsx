import doggyLigth from "../../doggy-head-light.svg";
import doggyDark from "../../doggy-head-dark.svg";
import { useAppSelector } from "../../redux/store";
import Eyes from "../Eyes/Eyes";
import "./Doggy.scss";

interface Props {
  uid: string;
  offsetTop: number;
  offsetLeft: number;
  handleClick: () => void;
}

const Doggy = ({ uid, offsetTop, offsetLeft, handleClick }: Props) => {
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
        <img src={theme === "dark" ? doggyLigth : doggyDark}></img>
      </div>

      <Eyes uid={uid} eyeDistance={30} className="doggy-eyes" />
    </div>
  );
};

export default Doggy;
