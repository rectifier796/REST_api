import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Error while creating book"));
  }
};


