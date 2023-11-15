import { getDocument, setDocument } from "../../utils/firebase";

const collectionName = "favoriteBreeds";

export const saveFavoriteBreeds = async (breeds: string[], userId: string) => {
  await setDocument(collectionName, { breeds, userId }, userId);
};

export const getFavoriteBreeds = async (userId: string) => {
  return await getDocument(collectionName, userId);
};
