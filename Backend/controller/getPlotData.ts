import { selectNumberOfHumans } from "../data-access/queries/selectTimeQueries";
import { CountInstance } from "../models/CountInstance";
import { Request, Response } from "express";


export async function getNumberOfHumansPerTime(
    req: Request<any, CountInstance[], any, any, any>,
    res: Response<CountInstance[], any>,
): Promise<void> {
    console.log("Hallo")
    res.send(await selectNumberOfHumans());
}