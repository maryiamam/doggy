import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  BreedWithImage,
  getFavoriteBreedsWithImages,
  saveFavoriteBreeds,
} from "../../requests/database/favoriteBreeds";
import * as S from "./Favorites.styled";
import doggyLight from "../../doggy-light-b.svg";
import doggyDark from "../../doggy-dark-b.svg";
import { useAppSelector } from "../../redux/store";

const Favorites = () => {
  const { currentUser } = useContext(UserContext);
  const [favBreeds, setFavBreeds] = useState<BreedWithImage[]>([]);
  const { theme } = useAppSelector((state) => state.themeReducer);

  useEffect(() => {
    if (currentUser) {
      getFavoriteBreedsWithImages(currentUser.uid).then((breeds) => {
        setFavBreeds(breeds);
      });
    }
  }, [currentUser]);

  const removeBreedFromFav = async (breed: BreedWithImage) => {
    const newFavBreeds = favBreeds.filter((x) => x.name !== breed.name);
    setFavBreeds(newFavBreeds);

    if (currentUser) {
      await saveFavoriteBreeds(newFavBreeds, currentUser.uid);
    }
  };

  const getImgSrc = (breed: BreedWithImage) => {
    if (breed.imgUrl) return breed.imgUrl;
    return theme === "dark" ? doggyLight : doggyDark;
  };

  return (
    <S.Favorites container>
      {favBreeds.map((breed) => (
        <Grid
          item
          xs={4}
          md={3}
          key={breed.id}
          onClick={() => {
            // removeBreedFromFav(breed);
          }}
        >
          <S.BreedImg src={getImgSrc(breed)} />
          <S.BreedName>{breed.name}</S.BreedName>
        </Grid>
      ))}
    </S.Favorites>
  );
};

export default Favorites;
