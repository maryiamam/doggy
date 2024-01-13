import { fetch } from "../requests";

export interface Breed {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: string;
}

export const getAllBreeds = async () => {
  return await fetch("https://api.thedogapi.com/v1/breeds");
};

export const getImage = async (imageId: string) => {
  const result = await fetch(`https://api.thedogapi.com/v1/images/${imageId}`, {
    "x-api-key": process.env.REACT_APP_DOGS_API_KEY,
  });

  return result;
};
