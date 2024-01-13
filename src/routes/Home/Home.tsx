import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  Breed as BreedDoc,
  getFavoriteBreeds,
  saveFavoriteBreeds,
} from "../../requests/database/favoriteBreeds";
import { Breed as ApiBreed, getAllBreeds } from "../../requests/external/dogs";
import * as S from "./Home.styled";

interface Breed extends ApiBreed {
  isFavorite?: boolean;
}

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const [allBreeds, setAllBreeds] = useState<ApiBreed[]>([]);
  const [favBreeds, setFavBreeds] = useState<BreedDoc[]>([]);
  const [displayBreeds, setDisplayBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    getAllBreeds().then((data) => {
      setAllBreeds(data);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      getFavoriteBreeds(currentUser.uid).then((data) => {
        if (data) {
          setFavBreeds(data);
        }
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (allBreeds && favBreeds) {
      const breeds = allBreeds.map((a) => {
        return { ...a, isFavorite: !!favBreeds.find((f) => f.name === a.name) };
      });

      setDisplayBreeds(breeds);
    }
  }, [allBreeds, favBreeds]);

  const addBreedToFav = async (breed: ApiBreed) => {
    if (favBreeds.some((x) => x.name === breed.name)) {
      return;
    }

    const newFavBreeds = favBreeds.concat([
      {
        name: breed.name,
        id: breed.id,
        imageId: breed.reference_image_id,
      },
    ]);

    setFavBreeds(newFavBreeds);

    if (currentUser) {
      await saveFavoriteBreeds(newFavBreeds, currentUser.uid);
    }
  };

  const removeBreedFromFav = async (breed: ApiBreed) => {
    if (!favBreeds.some((x) => x.name === breed.name)) {
      return;
    }

    const newFavBreeds = favBreeds.filter((x) => x.name != breed.name);

    setFavBreeds(newFavBreeds);

    if (currentUser) {
      await saveFavoriteBreeds(newFavBreeds, currentUser.uid);
    }
  };

  const renderFavoriteIcon = (breed: Breed) => {
    if (!currentUser) {
      return null;
    }

    return (
      <>
        {breed.isFavorite ? (
          <S.Favorite
            onClick={() => {
              removeBreedFromFav(breed);
            }}
          />
        ) : (
          <S.FavoriteBorder
            onClick={() => {
              addBreedToFav(breed);
            }}
          />
        )}
      </>
    );
  };

  return (
    <>
      {displayBreeds.map((breed) => (
        <div key={breed.id}>
          {breed.name}
          {renderFavoriteIcon(breed)}
        </div>
      ))}
    </>
  );
};

export default Home;
