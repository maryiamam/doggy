import { getDocument, setDocument } from "../../utils/firebase";
import { getImage } from "../external/dogs";

const collectionName = "favoriteBreeds";

export interface Breed {
  name: string;
  id: number;
  imageId: string;
}

export interface BreedWithImage extends Breed {
  imgUrl: string;
}

interface FavoriteBreedsDoc {
  userId: string;
  breeds: Breed[];
}

export const saveFavoriteBreeds = async (breeds: Breed[], userId: string) => {
  await setDocument(collectionName, { breeds, userId }, userId);
};

export const getFavoriteBreeds = async (userId: string): Promise<Breed[]> => {
  const result = await getDocument(collectionName, userId);
  return result ? (result as FavoriteBreedsDoc).breeds : [];
};

export const getFavoriteBreedsWithImages = async (
  userId: string
): Promise<BreedWithImage[]> => {
  const breeds = await getFavoriteBreeds(userId);
  if (breeds.length === 0) {
    return [];
  }

  (breeds as any[]).forEach(async (x) => {
    const img = await getImage(x.imageId);
    if (img) {
      x.imgUrl = img.url;
    }
  });

  return breeds as BreedWithImage[];
};
