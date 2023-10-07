import doggyLigth from "../../doggy-head-light.svg";
import doggyDark from "../../doggy-light.svg";
import Eyes from "../Eyes/Eyes";
import "./Doggy.scss";

interface Props {
  uid: string;
  offsetTop: number;
  offsetLeft: number;
  handleClick: () => void;
}

const Doggy = ({ uid, offsetTop, offsetLeft, handleClick }: Props) => {
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
        <img src={doggyLigth}></img>
      </div>

      <Eyes uid={uid} eyeDistance={30} className="doggy-eyes" />
    </div>
  );
};

export default Doggy;
