import { ObjectModel, ObjectModelType } from "../db/object.ts";
import { Object } from "../types.ts";

export const getObjectFromModel = async (
  object: ObjectModelType
): Promise<Object> => {
  const { _id } = object;

  //const students = await StudenModel.find({ _id: { $in: studentsID } });

  return {
    id: _id.toString(),
  };
};