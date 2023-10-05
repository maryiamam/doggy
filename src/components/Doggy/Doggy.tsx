import doggyLigth from "../../doggy-head-light.svg";
import doggyDark from "../../doggy-light.svg";
import Eyes from "../Eyes/Eyes";
import "./Doggy.css";

interface Props {
  uid: string;
  offsetTop: number;
  offsetLeft: number;
}

const Doggy = ({ uid, offsetTop, offsetLeft }: Props) => {
  return (
    <div className="doggy" style={{ top: offsetTop, left: offsetLeft }}>
      <div className="doggy-img">
        <img src={doggyLigth}></img>
      </div>

      <div className="eyes">
        <Eyes uid={uid} eyeDistance={30} />
      </div>
    </div>
  );
};

export default Doggy;
