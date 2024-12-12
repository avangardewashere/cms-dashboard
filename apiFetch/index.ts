import { ICatData } from "@/components/Forms/addCatForm";

export const PostCatData = async (params: ICatData) => {
  const { catName, breed, color } = params;
  try {
    //fetch("http://localhost:3001/api/cat"
    const response = await fetch("http://10.10.141.196:3001/api/cat", {
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
    const res = await fetch("http://10.10.141.196:3001/api/cat", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCatData = async(id:string) =>{
  try {
    const res = await fetch(`https://10.10.141.196/api/cat/${id}`,{
      method:"DELETE"
    })

    return res;
  } catch (error) {
    console.log(error)
  }
}
