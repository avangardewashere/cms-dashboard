import { ICatData } from "@/components/Forms/addCatForm";

export const PostCatData = async (params: ICatData) => {
  const { catName, breed, color } = params;
  try {
    //fetch("http://localhost:3001/api/cat"
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

export const GetCatData = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/cat", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCatData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/cat?id=${id}`, {
      method: "DELETE",
    });
    console.log("here", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
