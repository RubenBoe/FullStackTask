import { Instance } from "../../models/Instance";
import { getConnection } from "../connection";


/**
 * Inserts an array of instances into the db
 * @param instances 
 * @returns if the command completed without errors
 */
export const insertInstances = (instances: Instance[]) => {
    const connection = getConnection();
    let error = false;
    instances.forEach(
        inst => connection.execute(
            "INSERT INTO instancetable (oID, instanceTimestamp, PersonID, PositionX, PositionY) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE oID=VALUES(oID), PositionX=VALUES(PositionX), PositionY=VALUES(PositionY);",
            [inst.oID, inst.instanceTimestamp, inst.PersonID, inst.PositionX, inst.PositionY],
            (err) => {
                if(err) error=true;
            }
        )
    )
    return !error;
} 