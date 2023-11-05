import { useEffect } from "react";
import { cursorMoved } from "./redux/cursorReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { resolutionChanged } from "./redux/resolutionReducer";
import DoggyMultiplier from "./routes/DoggyMultiplier/DoggyMultiplier";
import * as S from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { debounce } from "./utils/common";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./routes/Authentication/Authentication";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

const App = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);
  const { follow: followCursor } = useAppSelector(
    (state) => state.cursorReducer
  );

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
    if (followCursor) {
      dispatch(cursorMoved({ x: event.clientX, y: event.clientY }));
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <S.AppWrapper onMouseMove={handleMouse}>
        <Navbar />
        <S.AppBody>
          <Routes>
            <Route path="/" element={<DoggyMultiplier />} />
            <Route path="/doggy" element={<DoggyMultiplier />} />
            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </S.AppBody>
      </S.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
