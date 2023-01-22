import { NextFunction } from "express";
import { Request, Response } from "express";
import { Instance, JSONInstance } from "../models/Instance";
import { insertInstances } from "../data-access/commands/insertInstance";

export function putInstances(
    req: Request<any, boolean, JSONInstance[], any, any>,
    res: Response<boolean, any>,
): void {
    const instanceArray: Instance[] = [];
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
                instanceArray.push(inst);
            }
        }
    )
    insertInstances(instanceArray);
    res.send(true);
}