import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import path from 'node:path';
import cloudinary from "../config/cloudinary";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    if(!req.files){
        return next(createHttpError(400,"Cover Image Requires"));
    }

    const files= req.files as {[fieldname:string]: Express.Multer.File[]};

    console.log(files);

    const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(__dirname, '../../public/data/uploads',fileName);
    console.log(filePath,fileName,coverImageMimeType);
    const uploadResult =await cloudinary.uploader.upload(filePath,{
        filename_override: fileName,
        folder:"book-covers",
        format: coverImageMimeType,
    })

    console.log(uploadResult);

    res.json({});
    
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Error while creating book"));
  }
};


