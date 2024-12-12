import { ICatData } from "@/components/Forms/addCatForm";

export const PostCatData = async (params: ICatData) => {
  const { catName, breed, color } = params;
  try {
    const response = await fetch("http://localhost:3001/api/cat", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ catName, breed, color }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
