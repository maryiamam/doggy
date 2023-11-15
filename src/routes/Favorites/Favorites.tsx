import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  getFavoriteBreeds,
  saveFavoriteBreeds,
} from "../../requests/database/favoriteBreeds";
import { Breed, getAllBreeds } from "../../requests/external/dogs";

const Favorites = () => {
  const { currentUser } = useContext(UserContext);
  const [allBreeds, setAllBreeds] = useState<Breed[]>([]);
  const [favBreeds, setFavBreeds] = useState<string[]>([]);

  useEffect(() => {
    getAllBreeds().then((data) => {
      setAllBreeds(data);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      getFavoriteBreeds(currentUser.uid).then((data) => console.log(data));
    }
  }, [currentUser]);

  const addBreedToFav = async (name: string) => {
    const newFavBreeds = favBreeds.concat([name]);
    setFavBreeds(newFavBreeds);

    if (currentUser) {
      await saveFavoriteBreeds(newFavBreeds, currentUser.uid);
    }
  };

  return (
    <>
      {allBreeds.map((breed) => (
        <div
          key={breed.name}
          onClick={() => {
            addBreedToFav(breed.name);
          }}
        >
          {breed.name}
        </div>
      ))}
    </>
  );
};

export default Favorites;
