import { fetch } from "../requests";

export interface Breed {
  name: string;
  image_link: string;
  barking: number;
  coat_length: number;
  drooling: number;
  energy: number;
  good_with_children: number;
  good_with_other_dogs: number;
  good_with_strangers: number;
  grooming: number;
  max_height_female: number;
  max_height_male: number;
  max_life_expectancy: number;
  max_weight_female: number;
  max_weight_male: number;
  min_height_female: number;
  min_height_male: number;
  min_life_expectancy: number;
  min_weight_female: number;
  min_weight_male: number;
  playfulness: number;
  protectiveness: number;
  shedding: number;
  trainability: number;
}

export const getAllBreeds = async (page: number = 1) => {
  let offset = (page - 1) * 20;

  const response = await fetch(
    `https://api.api-ninjas.com/v1/dogs?min_height=1&offset=${offset}`,
    {
      "X-Api-Key": process.env.REACT_APP_NINJAS_API_KEY,
    }
  );

  return response;
};
