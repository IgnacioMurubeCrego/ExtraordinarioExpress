import mongoose from "mongoose";
import { Object } from "../types.ts";


const Schema = mongoose.Schema;

const ObjectSchema = new Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    Object2ID: { type: Schema.Types.ObjectId, required: true, ref: "Object2" },
    Object3ID: [
      { type: Schema.Types.ObjectId, required: true, ref: "Object3" },
    ],
  },
  { timestamps: true }
);

// validations

export type ObjectModelType = mongoose.Document &
  Omit<Object, "id" | "object2" | "object3"> & {
    teacherID: mongoose.Types.ObjectId;
    studentsID: Array<mongoose.Types.ObjectId>;
  };

export const ObjectModel = mongoose.model<ObjectModelType>(
  "Object",
  ObjectSchema
);