import { ICatData } from "@/components/Forms/addCatForm";
import mongoose, { Schema,  } from "mongoose";

const CatSchema: Schema<ICatData> = new Schema(
  {
    catName: {
      type: String,
      unique: true,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cat = mongoose.models.Cat || mongoose.model<ICatData>("Cat", CatSchema);

export default Cat;
