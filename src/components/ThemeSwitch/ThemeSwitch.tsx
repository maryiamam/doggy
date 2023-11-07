import { useAppDispatch, useAppSelector } from "../../redux/store";
import { themeChanged } from "../../redux/themeReducer";
import * as S from "./ThemeSwitch.styled";

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);

  const onSwitchTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      themeChanged({
        theme: event.target.checked ? "dark" : "light",
      })
    );
  };

  return <S.StyledSwitch checked={theme === "dark"} onChange={onSwitchTheme} />;
};

export default ThemeSwitch;
