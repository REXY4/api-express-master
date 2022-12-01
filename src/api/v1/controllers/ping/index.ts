import { NextFunction, Request, Response } from "express"

const checkApi = async (req : Request, res : Response, next : NextFunction)=>{
    try {
        res.status(200).send({
            statusCode : 200,
            status : "success",
            message : "ping success"
        })
    } catch (error) {
        next(error)
    }
}

export default checkApi