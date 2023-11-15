import { useContext, useEffect } from "react";
import { cursorMoved } from "./redux/cursorReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { resolutionChanged } from "./redux/resolutionReducer";
import * as S from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { debounce } from "./utils/common";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";
import { UserContext } from "./contexts/user.context";
import ROUTES from "./constants/routes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  const { currentUser } = useContext(UserContext);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);
  const { follow: followCursor } = useAppSelector(
    (state) => state.cursorReducer
  );

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const handleResize = () => {
    dispatch(
      resolutionChanged({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  };

  const debouncedHandleResize = debounce(handleResize, 100);

  const handleMouse = (event: any) => {
    if (followCursor) {
      dispatch(cursorMoved({ x: event.clientX, y: event.clientY }));
    }
  };

  const isAuthorized = !!currentUser;

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <S.AppWrapper onMouseMove={handleMouse}>
        <Navbar />
        <S.AppBody>
          <Routes>
            <Route path={ROUTES.home.path} element={ROUTES.home.component()} />
            <Route
              path={ROUTES.doggy.path}
              element={ROUTES.doggy.component()}
            />
            <Route
              path={ROUTES.favorites.path}
              element={
                <ProtectedRoute isAuthorized={isAuthorized}>
                  {ROUTES.favorites.component()}
                </ProtectedRoute>
              }
            />
            <Route path={ROUTES.auth.path} element={ROUTES.auth.component()} />
            <Route
              path={ROUTES.account.path}
              element={
                <ProtectedRoute isAuthorized={isAuthorized}>
                  {ROUTES.account.component()}
                </ProtectedRoute>
              }
            />
          </Routes>
        </S.AppBody>
      </S.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
