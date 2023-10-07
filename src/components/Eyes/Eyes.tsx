import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppSelector } from "../../redux/store";
import "./Eyes.scss";

interface Props {
  uid: string;
  className?: string;
  eyeDistance: number;
}

const Eyes = ({ uid, className, eyeDistance }: Props) => {
  const current = useRef<HTMLDivElement>(null);
  const { x, y } = useAppSelector((state) => state.cursorReducer);
  const { width, height } = useAppSelector((state) => state.resolutionReducer);

  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [shiftX, setShiftX] = useState(1);
  const [shiftY, setShiftY] = useState(1);

  useLayoutEffect(() => {
    setDimensions();
  }, []);

  useEffect(() => {
    if (centerX !== 0) {
      transform();
    }
  }, [x, y]);

  const setDimensions = () => {
    if (current && current.current) {
      const clientRect = current.current.getBoundingClientRect();
      setCenterX(clientRect.width / 2 + clientRect.left);
      setCenterY(clientRect.height / 2 + clientRect.top);
    }
  };

  const transform = () => {
    const maxPosShift = 5;
    const maxNegShift = -3;
    const halfX = centerX > width - centerX ? centerX : width - centerX;
    const posX = ((x - centerX) * 15) / halfX + 1;
    setShiftX(
      posX > 0 ? Math.min(posX, maxPosShift) : Math.max(posX, maxNegShift)
    );
    const halfY = centerY > height - centerY ? centerY : height - centerY;
    const posY = ((y - centerY) * 15) / halfY + 1;
    setShiftY(
      posY > 0 ? Math.min(posY, maxPosShift) : Math.max(posY, maxNegShift)
    );
  };

  return (
    <div key={`eyes-${uid}`} className={`eyes ${className}`} ref={current}>
      <div className="big-circle">
        <div
          className="small-circle"
          style={{ marginTop: shiftY, marginLeft: shiftX }}
        />
      </div>
      <div className="big-circle" style={{ marginLeft: eyeDistance }}>
        <div
          className="small-circle"
          style={{ marginTop: shiftY, marginLeft: shiftX }}
        />
      </div>
    </div>
  );
};

export default Eyes;
