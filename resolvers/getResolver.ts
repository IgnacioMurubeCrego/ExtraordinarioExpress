import { Request, Response } from "express";
import { Object } from "../types.ts";
import { ObjectModel } from "../db/object.ts";
import { getObjectFromModel } from "../controllers/getObjectFromModel.ts";

export const getResolver = async (
    req: Request<{ id: string }>,
    res: Response<Object | { error: unknown }>
  ) => {
    const id = req.params.id;
    try {
      const object = await ObjectModel.findById(id).exec();
      if (!object) {
        res.status(404).send({ error: "Subject not found" });
        return;
      }
      const objectResponse: Object = await getObjectFromModel(object);
      res.status(200).json(objectResponse).send();
    } catch (error) {
      res.status(500).send(error);
    }
  };