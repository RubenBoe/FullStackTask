import { NextFunction } from "express";
import { Request, Response } from "express";
import { Instance, JSONInstance } from "../models/Instance";

export function putInstances(
    req: Request<any, boolean, JSONInstance[], any, any>,
    res: Response<boolean, any>,
): void {
    console.log(req.body[0].timestamp.$date.$numberLong)
    req.body.forEach(
        i => {
            for (const personID in i.instances) {
                const individualInstance = i.instances[personID];
                const inst: Instance = {
                    instanceTimestamp: parseInt(i.timestamp.$date.$numberLong),
                    oID: i._id.$oid,
                    PersonID: parseInt(personID),
                    PositionX: individualInstance.pos_x,
                    PositionY: individualInstance.pos_y
                }
                console.log(inst)
            }
        }
    )
    res.send(true);
}