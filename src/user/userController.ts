import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const {email, name, password} = req.body;

    if(!name || !email || !password){
        const error = createHttpError(400,"All fields are required");
        return next(error);
    }


    res.json({message: "user created"});
};
