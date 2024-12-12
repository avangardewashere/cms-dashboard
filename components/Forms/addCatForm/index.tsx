"use client";
import { useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

export interface ICatData {
  catName: string;
  breed: string;
  color: string;
  [key: string]: string;
}

const initialValue = {
  catName: "",
  breed: "",
  color: "",
};

const AddCatForm = function AddCatForm() {
  const [catData, setCatData] = useState<ICatData>(initialValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // destructure the target values and names
    const { name, value } = e.target;
    //using spread operator to handle the setter of the data
    setCatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputFields = [
    { name: "catName", placeholder: "Enter Cat Name" },
    { name: "breed", placeholder: "Enter Cat Breed" },
    { name: "color", placeholder: "Enter Cat Color" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(catData));
    setCatData(initialValue);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(style.container)}>
      {inputFields.map((field) => {
        return (
          <input
            key={field.name}
            name={field.name}
            value={catData[field.name]}
            onChange={handleInputChange}
            type={"text"}
            placeholder={field.placeholder}
          />
        );
      })}
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default AddCatForm;
