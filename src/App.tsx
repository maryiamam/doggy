import { useEffect } from "react";
import { cursorMoved } from "./redux/cursorReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { resolutionChanged } from "./redux/resolutionReducer";
import DoggyMultiplier from "./routes/DoggyMultiplier/DoggyMultiplier";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { debounce } from "./utils/common";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./routes/SignIn/SignIn";
import { createTheme, ThemeProvider } from "@mui/material";
import { lime, purple, pink } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: pink,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);

  const handleResize = () => {
    dispatch(
      resolutionChanged({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  };

  const debouncedHandleResize = debounce(handleResize, 100);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const handleMouse = (event: any) => {
    dispatch(cursorMoved({ x: event.clientX, y: event.clientY }));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <div className="app" onMouseMove={handleMouse}>
        <div className="app-header">
          <Navbar />
        </div>
        <div className="app-body">
          <Routes>
            <Route path="/" element={<DoggyMultiplier />} />
            <Route path="/doggy" element={<DoggyMultiplier />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
