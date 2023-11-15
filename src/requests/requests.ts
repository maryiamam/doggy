import axios, { AxiosResponse } from "axios";

export const fetch = async (path: string, headers?: object) => {
  try {
    const response: AxiosResponse = await axios.get(path, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("General error:", (error as any).message);
    }
  }
};
