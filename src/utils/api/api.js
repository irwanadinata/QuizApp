import axiosWithConfig from "../axios-with-config";

export const getQuestions = async () => {
  try {
    const response = await axiosWithConfig.get(
      "/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
