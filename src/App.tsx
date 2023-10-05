import "./App.css";
import { useEffect, useRef, useState } from "react";
import { cursorMoved } from "./redux/cursorReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { resolutionChanged } from "./redux/resolutionReducer";
import Doggy from "./components/Doggy/Doggy";
import nextId from "react-id-generator";

interface Dog {
  key: string;
  offsetTop: number;
  offsetLeft: number;
}

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { width, height } = useAppSelector((state) => state.resolutionReducer);
  const [dogs, setDogs] = useState<Dog[]>([
    { offsetTop: 10, offsetLeft: 0, key: nextId() },
  ]);

  console.log(dogs);

  useEffect(() => {
    if (appRef && appRef.current) {
      dispatch(
        resolutionChanged({
          width: appRef.current.clientWidth,
          height: appRef.current.clientHeight,
        })
      );
    }
  }, []);

  const handleMouse = (event: any) => {
    dispatch(cursorMoved({ x: event.clientX, y: event.clientY }));
  };

  const addDog = () => {
    const newDog = {
      key: nextId(),
      offsetTop: getNewDogPosition(height - 50, 20),
      offsetLeft: getNewDogPosition(width - 50, -50),
    };

    setDogs([...dogs, newDog]);
  };

  const getNewDogPosition = (max: number, min: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div ref={appRef} className="App" onMouseMove={handleMouse}>
      <div className="App-header">
        <button onClick={addDog}>Add a doggy</button>
      </div>
      <div className="App-body">
        {dogs.map((dog: Dog) => (
          <Doggy
            key={dog.key}
            uid={dog.key}
            offsetTop={dog.offsetTop}
            offsetLeft={dog.offsetLeft}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
